import React from 'react';
import { numberFormat } from '../../utils/utils';
import Fade from 'react-reveal/Fade';
import './shopList.css';

const ShopList = ({ cartItems, removeFromCart }) => {
    return (
        <div className="shoplist-wrapper">
            {
                cartItems.length === 0 ? (<p>Keranjang Masih Kosong</p>)
                    : (<p>Total Keranjang x {" "} {cartItems.length}</p>)
            }
            <div className="shoplist-items-wrapper">
                <Fade left cascade>
                    <ul className="shoplist-items">
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image.url} alt={item.productsName} />
                                </div>
                                <div>
                                    <div>{item.productsName}</div>
                                    <div className="right">
                                        Rp.
                                {numberFormat(item.price)} x {item.count} {" "}
                                        <button onClick={() => removeFromCart(item)}>Hapus</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
            </div>
            {cartItems.length !== 0 && (
                <div className="right">
                    <div className="total-items">
                        Total Belanja Rp {" "}
                        {numberFormat(
                            cartItems.reduce((a, c) => a + (c.price * c.count), 0)
                        )}
                    </div>
                    <button>Proses</button>
                </div>
            )}

        </div>
    )
}

export default ShopList
