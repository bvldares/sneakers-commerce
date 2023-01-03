import React,{useState} from "react";
import "../App.css"
import minus from "../assets/images/icon-minus.svg"
import plus from "../assets/images/icon-plus.svg"
import MobileCarousel from "./MobileCarousel";

export default function Main(){

    const[quantity, setQuantity] = useState(1)
    

    return (
        <main>
            <MobileCarousel/>
            <section className="product-description">
                <h5 className="company-name">Sneaker Company</h5>
                <h1 className="sneaker-name">Fall Limited Edition <br /> Sneakers</h1>
                <p className="sneaker-description">
                 These low-profile sneakers are your perfect casual wear
                 companion. Featuring a durable rubber outer sole,
                 they’ll withstand everything the weather can offer.
                </p>
                <div className="pricing-container">
                    <h3 className="price">${125 * quantity} <span>-50%</span></h3>
                    <p className="previuos-price">$250.00</p>
                </div>
                <div className="purchase-settings">
                    <div className="quantity-container">
                        <button className="edit-quantity">
                            <img src={minus} alt="minus icon" />
                        </button>
                        <p className="quantity">{quantity}</p>
                        <button className="edit-quantity">
                            <img src={plus} alt="plus icon" />
                        </button>
                    </div>
                    <button className="add-to-basket"></button>
                </div>

            

            </section>
        </main>
    )
}