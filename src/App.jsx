import React, {useState} from "react";
import "./App.css"
import Nav from "./Components/Nav"
import Main from "./Components/Main";
import { nanoid } from 'nanoid'
import trash from "./assets/images/icon-delete.svg"


export default function App(){

  const[cartArray, setCartArray] = useState([])

  function updateCartArray(obj){ setCartArray(prev => [...prev, obj])}


  function deleteItem(event){
    console.log(event.target.id)
    setCartArray(prev => prev.filter(element => element.code != event.target.id))

  }


  const cartElements = cartArray.map(element => {
    return (
        <div className="cart-element" key={nanoid()}>
        <img className="cart-element-thumbnail" src={element.thumbnail} alt="shoe thumbnail"/>
        <div className="cart-element-info">
            <h6 className="cart-element-name">{element.name}</h6>
            <p className="cart-element-price">
                {`$${element.price} x ${element.numbers}` }
                <span className="cart-element-final-price">${(element.price * element.numbers).toFixed(2)}</span>
            </p>
        </div>
        <img className="cart-element-trash-icon" onClick={deleteItem} id={element.code} src={trash} alt="trash icon" />
    </div>
    )
}) 

  return (
    <div className="wrapper">
      <Nav cartElements ={cartElements}/>
      <Main updateCartArray = {updateCartArray} />
    </div>
  )
}