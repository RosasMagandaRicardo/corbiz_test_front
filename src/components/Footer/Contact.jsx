import React from "react";
import './contact.css';

const Contact = (props) => {
  return (
    <div className="contactInfoContainer">
        {props.options.options.map((product,index) => (
        <a href="/">
          <div className={`contactOption contactOption${index+1}`}>
              <img src={product.imgsrc} alt={`icon${index}`}/>
              <p>{product.title}</p>
          </div>
        </a>
      ))}        
    </div>
  )
};

export default Contact;
