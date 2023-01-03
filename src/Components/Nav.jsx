import React, {useState} from "react";
import "../App.css"
import hamburger from "../assets/images/icon-menu.svg"
import closedMenu from "../assets/images/icon-close.svg"
import logo from "../assets/images/logo.svg"
import cart from "../assets/images/icon-cart.svg"
import propic from "../assets/images/image-avatar.png"


export default function App(){

    const[openMenu, setOpenMenu] = useState(false)

    
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


            <img className="cart-img" src={cart} alt="cart icon" />
            <img className="propic-img" src={propic} alt="user profile picture" />
 
        </nav>
    )
}