import React from 'react'
import './partners.css'

const Partners = (props) => {
    return (
        <div className="partnersInfoContainer">
            {props.partners.partners.map((option) => (
            <div className="partnerContainer">
                <p>{option.title}</p>
                <img src={option.imgsrc} alt={option.alt} />
            </div>
        ))}        
        </div>
    )
}

export default Partners