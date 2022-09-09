import React,{useState} from 'react'
import "./Testimonials.css";
import {testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
    const [selected,setSelected]=useState(0);
    const tLength=testimonialsData.length;
  return (
    <div className="Testimonials">
        <div className="left-t">
        <span>Testimonials</span><span className='stroke-text'> What they</span><span>say about us</span>
        <span>
            {testimonialsData[selected].review }
        </span>
        <span style={{color:"var(--orange)"}}>
            {testimonialsData[selected].name}
        </span>
        <span>
            {testimonialsData[selected].status}
        </span>
        </div>
        <div className="right-t">
            <div>
            <img className='img' src={testimonialsData[selected].image} alt=""/>
            </div>
            
             
        </div>
    </div>
  )
}

export default Testimonials