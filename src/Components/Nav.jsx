import React, {createElement, useState} from "react";
import "../App.css"
import hamburger from "../assets/images/icon-menu.svg"
import closedMenu from "../assets/images/icon-close.svg"
import logo from "../assets/images/logo.svg"
import cart from "../assets/images/icon-cart.svg"
import propic from "../assets/images/image-avatar.png"



export default function App(props){

    const[openMenu, setOpenMenu] = useState(false)
    const[openCart, setOpenCart] = useState(false)

    const toggleCart = () => setOpenCart(prev=> !prev)


    const mobileList = {transform: openMenu ? "translateX(0)" : ""}

    return (
        <nav>
            <button className="hamburger" onClick={()=> setOpenMenu(prev=>!prev)}>
                <img className="hamburger-img" src={!openMenu ? hamburger : closedMenu} alt="hamburger" />
            </button>

            <img className="logo" src={logo} alt="logo" />

            <ul className="nav-list" style={mobileList}>
                <li className="list-element"><a href="#" className="list-link">Collection</a></li>
                <li className="list-element"><a href="#" className="list-link">Men</a></li>
                <li className="list-element"><a href="#" className="list-link">Women</a></li>
                <li className="list-element"><a href="#" className="list-link">About</a></li>
                <li className="list-element"><a href="#" className="list-link">Contact</a></li>
            </ul>


            <img className="cart-img" src={cart} onClick={toggleCart} alt="cart icon" />

            <div className="shopping-cart" style={{display: openCart ? "block" : "none"}}>
                <h3 className="shopping-cart-title">Cart</h3>
                <div className="shopping-cart-products-list">
                {props.cartElements.length > 0 ? props.cartElements : <p className="empty-cart-message">Your cart is empty</p>}
                </div>
                <button style={{display: props.cartElements.length > 0 ? "block" : "none"}} className="shopping-cart-button">Checkout</button>

            </div>

            <img className="propic-img" src={propic} alt="user profile picture" />
 
        </nav>
    )
}