import React, { useState } from "react";
import mainImg from "../assets/images/image-product-1.jpg"
import thumb1 from "../assets/images/image-product-1-thumbnail.jpg"
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg"
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg"
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg"
import previous from "../assets/images/icon-previous.svg"
import next from "../assets/images/icon-next.svg"
import close from "../assets/images/icon-close.svg"

export default function DesktopCarousel(props){

    const[imgArr, setImgArr] = useState([mainImg, thumb1, thumb2, thumb3, thumb4])



    const[isOpen, setIsOpen] = useState(false)

    const openModal = () => document.querySelector(".carousel-dialog").showModal()
    const handleClose = () => document.querySelector(".carousel-dialog").close()

    const[arrIndex, setArrIndex] = useState(0)

    function nextIndex(){
        setArrIndex(prev => 
            prev === props.imageArray.length -1 ?
            prev = 0 : prev = prev + 1  
    )}
    
    
    function prevIndex(){
        setArrIndex(prev => 
            prev === 0 ? 
            prev = props.imageArray.length -1 : 
            prev = prev -1
    )}
    
    
    
    return (
        <div className="carouselWrapper">
            <img className="carousel-main-img" onClick={openModal} src={mainImg} alt="shoes img" />
            <div className="thumbnails">
                <img className="thumbnails-img" onClick={openModal} src={thumb1} alt="shoe tiny img" />
                <img className="thumbnails-img" onClick={openModal} src={thumb2} alt="shoe tiny img" />
                <img className="thumbnails-img" onClick={openModal} src={thumb3} alt="shoe tiny img" />
                <img className="thumbnails-img" onClick={openModal} src={thumb4} alt="shoe tiny img" />
            </div>
           
           
           
           
            <dialog open={isOpen} onClose={handleClose} className="carousel-dialog"> 
                <button className="mobile-carousel-btn desktop-prev" onClick={prevIndex}>
                    <img src={previous} alt="previous icon" />
                </button>

                <img src={props.imageArray[arrIndex]} alt="" className="desktop-carousel-img" />

                <button className="mobile-carousel-btn desktop-next" onClick={nextIndex}>
                    <img src={next} alt="next icon" />
                </button>

                <button className="close-button" onClick={handleClose}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFF" fillRule="evenodd"/></svg>
                </button>
            </dialog>
        </div>
        

    )
}