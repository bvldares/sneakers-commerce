import React,{useState, useEffect} from "react";
import "../App.css"
import minus from "../assets/images/icon-minus.svg"
import plus from "../assets/images/icon-plus.svg"
import MobileCarousel from "./MobileCarousel";
import imgOne from "../assets/images/image-product-1.jpg"
import imgTwo from "../assets/images/image-product-2.jpg"
import imgThree from "../assets/images/image-product-3.jpg"
import imgFour from "../assets/images/image-product-4.jpg"
import DesktopCarousel from "./DesktopCarousel"

export default function Main(props){

const[quantity, setQuantity] = useState(1)
const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

useEffect(()=>{
    const handleResize = () => setCurrentWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
},[currentWidth])


const imageArray = [imgOne, imgTwo, imgThree, imgFour]
const plusOne = () => setQuantity(prev => prev + 1)
const minusOne = () => setQuantity(prev => prev === 1 ? prev = 1 : prev -1)








return (
    <main>
        {currentWidth < 700 ? <MobileCarousel imageArray={imageArray}/> : <DesktopCarousel imageArray ={imageArray} /> }
        <section className="product-description">
            <h5 className="company-name">Sneaker Company</h5>
            <h1 className="sneaker-name">Fall Limited Edition <br /> Sneakers</h1>
            <p className="sneaker-description">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole,
                they’ll withstand everything the weather can offer.
            </p>
            <div className="pricing-container">
                <h3 className="price">${(125 * quantity).toFixed(2)} <span className="discount">-50%</span></h3>
                <p className="previous-price">$250.00</p>
            </div>
            <div className="purchase-settings">
                <div className="quantity-container">
                    <button className="edit-quantity" onClick={minusOne}>
                        <img src={minus} alt="minus icon" />
                    </button>
                    <p className="quantity">{quantity}</p>
                    <button className="edit-quantity" onClick={plusOne}>
                        <img src={plus} alt="plus icon" />
                    </button>
                </div>
                <button className="add-to-basket" onClick={()=> props.updateCartArray(  
                    {code:2552393423, name:"Fall Limited Edition Sneakers", price: 125, numbers : quantity, thumbnail : imageArray[0]})}>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>
                    Add to cart
                </button>
            </div>

        </section>
    </main>
)
}