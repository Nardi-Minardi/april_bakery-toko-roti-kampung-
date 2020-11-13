import React, { useState, useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import { IcMenu, IcClose } from '../../assets';
import { GlobalState } from '../../GlobalState';
import '../navbar.css';

const DefaultHeader = () => {
    const state = useContext(GlobalState)
    console.log(state)
    const [isLogged, setIsLogged] = state.userAPI.isLogged
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin
    const [isOpen, setIsOpen] = useState(false);
    

    //handle click menu toggle
    const toggle = () => setIsOpen(!isOpen);

    //close Toggle menu if event click
    const closeToggleMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeToggleMenu}>
                        <strong>April's Bakery <i className="fab fa-typo3" /></strong>
                    </Link>
                    <div className="menu-icon" onClick={toggle}>
                        {isOpen ? <img src={IcClose} alt="" width="25" /> : <img src={IcMenu} alt="" width="25" />}
                    </div>
                    <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-links" onClick={closeToggleMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop" className="nav-links" onClick={closeToggleMenu}>
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-links" onClick={closeToggleMenu}>
                                Tentang Kami
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-links" to="/account" onClick={closeToggleMenu}>
                                <small>Login | Register</small>
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to="/" className="cart-icon">
                        <div>
                            <small>Cart</small><i className="fas fa-shopping-cart" />
                            <span>0</span>
                        </div>
                    </NavLink>

                </div>
            </nav>
        </>
    )
}

export default DefaultHeader

