import React from 'react'
import './companyInfo.css'

const CompanyInfo = (props) => {
    const {title,address,district,mail,number} = props.info
    return (
      <div className="companyInfoContainer">
        <p className="titleText">{title}</p>
        <div style={{width:"25%",background:"#fff",height:"4px",margin:"0.5rem 0"}}></div>
        <p className="addresText">{address}</p>
        <p className="districtText">{district}</p>
        <p className="mailText">{mail}</p>
        <p className="numberText">{number}</p>
      </div>
    )
  
}

export default CompanyInfo