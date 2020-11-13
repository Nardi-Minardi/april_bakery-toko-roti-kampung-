import React, { Component } from 'react';
import { ShopCategories, ProductCards } from '../../components';
import { Spinner } from 'reactstrap';
import axios from 'axios';
import './shop.css';

export class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            categoryFilter: "",
            cartItems: localStorage.getItem("cartItems") ?
                JSON.parse(localStorage.getItem("cartItems"))
                : [],
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:3001/v1/products")
            .then(res => {
              
                this.setState({
                    products: res.data.products
                })
            })
            .catch(err => {
                console.log("error mengambil data", err)
            })
    }

    //filtering categories function
    changeCategory = (e) => {
        if (e.target.value !== "") {
            this.setState({
                changeCategory: e.target.value,
                products: this.state.products.filter((product) => product.categories.indexOf(e.target.value) >= 0)
            })
            axios
                .get("http://localhost:3001/v1/products?categories=" + e.target.value)
                .then(res => {
                    // console.log(res.data)
                    this.setState({
                        products: res.data.products,
                    })
                })
        } else {
            this.setState({
                changeCategory: e.target.value,
                products: this.state.products
            })
            axios
                .get("http://localhost:3001/v1/products")
                .then(res => {
                    // console.log(res.data)
                    this.setState({
                        products: res.data.products,
                    })
                })
        }
    }


    render() {
        const { products, categoryFilter } = this.state;
        return (
            <div className="shop-wrapper">
                <ShopCategories
                    count={products.length}
                    categoryFilter={categoryFilter}
                    changeCategory={this.changeCategory}
                />

                <div>
                    <div>
                        <h4 style={{ marginTop: "20px" }}>Daftar Produk</h4>
                        <hr />
                    </div>
                    <div className="card-wrapper">
                        {/* jika products nya ga ada tampilin loading */}

                        {
                            products.length < 1 && <Spinner style={{ width: '3rem', height: '3rem' }} color="danger" />
                        }

                        {/* jika products ada tampilin */}
                        {
                            products && products.map(item => {
                                return <ProductCards
                                    key={item._id}
                                    products={item}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop
