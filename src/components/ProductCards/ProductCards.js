import React from 'react';
import { numberFormat } from '../../utils/utils';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './productCards.css'

const ProductCards = ({ products, addToCart }) => {
    return (
        <>
            <Fade bottom cascade>
                <div className="cards-body">
                    <Link to={`products/${products._id}`}>
                        <img src={products.image.url} alt="" />
                    </Link>
                    <div>
                        <p>{products.productsName}</p>
                        <small>Kode: {products.idProducts}</small>
                        <p>Harga Rp.{numberFormat(products.price)}</p>
                        <small>{products.description}</small>
                    </div>
                    <button onClick={() => addToCart(products)}>Add to cart</button>
                </div>
            </Fade>
        </>
    )
}

export default ProductCards
