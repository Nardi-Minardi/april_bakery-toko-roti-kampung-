import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductsAPI = () => {
    const [Products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await axios.get("/v1/products")
        // console.log(res)
        setProducts(res.data.products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return {
        products: [Products, setProducts]
    }
}

export default ProductsAPI

// api products secara global
