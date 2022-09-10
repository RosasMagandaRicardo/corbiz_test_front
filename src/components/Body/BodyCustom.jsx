import React from 'react'
import imgSlide1 from '../../assets/slider1.jpg'
import imgSlide2 from '../../assets/slider2.jpg'
import imgSlide3 from '../../assets/slider3.jpg'
import imgSlide4 from '../../assets/slider4.jpg'
import Slider from './Slider'

import ProductDisplayPage from "./ProductDisplayPage";

import './bodyCustom.css'

const BodyCustom = () => {  

  const slides = [
        {imgSrc:imgSlide1},
        {imgSrc:imgSlide2},
        {imgSrc:imgSlide3},
        {imgSrc:imgSlide4},
    ]

    return (
    <>
      <section className="sliderContainer">
        <Slider slides={slides}/>
      </section>
      <section className="shelfContainer">
        <ProductDisplayPage/>        
      </section>
    </>
    )
}

export default BodyCustom