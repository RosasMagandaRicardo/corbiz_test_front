import React, { useState } from 'react'

const Slider = ({slides}) => {
    const [currentSlider,setCurrentslider] = useState(0)

    const sliderStyles = {
        height: "100%",
        position : "relative"
    }

    const slideStyles = {
        width:"100%",
        height:"100%",
        backgroundImage:`url(${slides[currentSlider].imgSrc})`,
        backgroundPosition: "center",
        backgroundSize : "cover",
        transform : "backgroundImage 300ms ease"
    }

    const dotsStyles = {
        display : "flex",
        justifyContent : "center",
        position : "absolute",
        bottom : "1rem",
        width : "100%"
    }

    const dotStyles = {
        height : "10px",
        width : "10px",
        background : "#BDBDBD",
        borderRadius : "50%",
        margin : "0 0.3rem",
        cursor : "pointer"
    }

    const dotStylesSelected = {
        height : "10px",
        width : "10px",
        background : "#F8475F",
        borderRadius : "50%",
        margin : "0 0.3rem",
        cursor : "pointer"
    }

    const changeToSlide = slideIndex => {
        setCurrentslider(slideIndex);
    }

    return (
      <div className="sliderContainer" style={sliderStyles}>
        <div className="slideContainer" style={slideStyles}>
            <div className="dotsContainer" style={dotsStyles}>
                {slides.map((slide,slideIndex) => (
                    <div key={slideIndex} className="dot" style={slideIndex === currentSlider ? dotStylesSelected : dotStyles} onClick={(()=>changeToSlide(slideIndex))}></div>
                ))}
            </div>
        </div>
      </div>
    )
}

export default Slider