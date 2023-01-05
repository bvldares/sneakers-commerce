import React,{useState} from "react";
import previous from "../assets/images/icon-previous.svg"
import next from "../assets/images/icon-next.svg"


export default function MobileCarousel(props){

   
    const[arrayIndex, setArrayIndex] = useState(0)


    function nextIndexM(){
        setArrayIndex(prev => 
            prev === props.imageArray.length -1 ?
            prev = 0 : prev = prev + 1  
    )}
    
    
    function prevIndexM(){
        setArrayIndex(prev => 
            prev === 0 ? 
            prev = props.imageArray.length -1 : 
            prev = prev -1
    )}

    return (
        <section className="mobile-carousel" >
            <button className="mobile-carousel-btn mobile-prev" onClick={prevIndexM}>
                <img src={previous} alt="previous icon" />
            </button>
            <img src={props.imageArray[arrayIndex]} alt="shoe image" className="mobile-carousel-img" />
            <button className="mobile-carousel-btn mobile-next" onClick={nextIndexM}>
                <img src={next} alt="next icon" />
            </button>
            
        </section>
    )
}