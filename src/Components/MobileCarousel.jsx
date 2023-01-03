import React,{useState} from "react";
import imgOne from "../assets/images/image-product-1.jpg"
import imgTwo from "../assets/images/image-product-2.jpg"
import imgThree from "../assets/images/image-product-3.jpg"
import imgFour from "../assets/images/image-product-4.jpg"
import previous from "../assets/images/icon-previous.svg"
import next from "../assets/images/icon-next.svg"


export default function MobileCarousel(){

    const imageArray = [imgOne, imgTwo, imgThree, imgFour]
    const[arrIndex, setArrIndex] = useState(0)


    function nextIndex(){
        setArrIndex(prev => 
            prev === imageArray.length -1 ?
            prev = 0 : prev = prev + 1  
    )}
    
    
    function prevIndex(){
        setArrIndex(prev => 
            prev === 0 ? 
            prev = imageArray.length -1 : 
            prev = prev -1
    )}

    const style = {backgroundImage: `url(${imageArray[arrIndex]})`}

    return (
        <section className="mobile-carousel" style={style} >
            <button className="mobile-carousel-btn mobile-prev" onClick={prevIndex}>
                <img src={previous} alt="previous icon" />
            </button>
            <button className="mobile-carousel-btn mobile-next" onClick={nextIndex}>
                <img src={next} alt="next icon" />
            </button>
            
        </section>
    )
}