import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productsDetail.css';
import { Link } from 'react-router-dom';
import { numberFormat } from '../../utils/utils';


const ProductDetails = (props) => {
    const productId = props.match.params.productId
    const [detailProducts, setDetailProducts] = useState([]);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/v1/products/detail?id=${productId}&type=single`)
            .then(res => {
               
                setDetailProducts(res.data[0])
            })
            .catch(err => {
                console.log("error get data", err)
            })

    }, [productId])

    // condition image if not show
    if (detailProducts.length === 0) return null;

    return (
        <><h4 className="detail-title">Detail Produk</h4>
            <div className="detail-wrapper">
                
                <img src={detailProducts.image.url} alt="" />

                <div className="box-detail">

                    <div className="row-detail">
                        <h2>{detailProducts.productsName}</h2>
                        <p style={{ fontSize: "14px", textAlign: "right" }}>#Kode: {detailProducts.idProducts}</p>
                    </div>
                    <span>Rp. {numberFormat(detailProducts.price)}</span>
                    <p>{detailProducts.description}</p>
                    <p>Sold: {detailProducts.sold}</p>
                    <Link to="/shop" style={{fontSize: "14px", marginRight:"20px"}}>Back to Products</Link>
                    <Link to="/cart" className="button">Buy Now</Link>
                </div>
            </div>

            {/* <div>
            <h2>Related Produk</h2>
                <div className="cards-body">
                {
                    products.map(product => {
                        return product.categories === detailProducts.categories
                        ? <ProductCards key={product._id} product={product} /> : null
                    })
                }

            </div>
        </div> */}

        </>
    )
}

export default ProductDetails
