import React from 'react';
import './shopCategories.css'

const ShopCategories = ({ count, changeCategory, categoryFilter }) => {
    return (
        <div className="categories-wrapper">
            <h4>Kategori</h4>
            <hr/>
            <label>Pilih Kategori</label>
            <select defaultValue={categoryFilter} onChange={changeCategory} >
                <option value="">Semua</option>
                <option value="roti_bakar">Roti Bakar</option>
                <option value="roti_sobek">Roti Sobek</option>
                <option value="roti_goreng">Roti Goreng</option>
            </select>
            <h5>Result</h5>
            <p>{count} Produk</p>
        </div>
    )
}

export default ShopCategories
