import React from "react";
import CompanyInfo from "./CompanyInfo";
import Contact from "./Contact"
import Partners from "./Partners"
import './footerCustom.css';
import Newsletter from "./Newsletter/Newsletter"

import corebizImg from "../../assets/site-logo-corebiz-preto-cinza.svg"
import vtexlogo from "../../assets/vector.svg"
import card from "../../assets/envelope-solid.svg"
import headset from "../../assets/headset-solid.svg"

const FooterCustom = () => {
  const companyInfo = {
    title: "Ubicación",
    address: "Avenida Andrômeda, 2000. Bloco 6 e 8",
    district: "Alphavile SP",
    mail: "brasil@corebiz.ag",
    number: "+55 11 3090 1039",
  };

  const contacts = {
    options : [
      {
        title : "CONTÁCTANOS",
        imgsrc : card
      },
      {
        title : "HABLA CON UN CONSULTOR",
        imgsrc : headset
      }
    ]
  }

  const partners = {
    partners : [
      {
        title : "Desarrollado por",
        imgsrc : corebizImg,
        alt : "Corebiz develop",
      },
      {
        title : "Powered by",
        imgsrc : vtexlogo,
        alt : "Partner VTEX"
      }
    ]
  }

  return (
    <footer className="footerContainer">
      <Newsletter/>
      <div className="columnContainer">
        <div className="columnFooterContainer columnFooterContainerLeft">
          <CompanyInfo info={companyInfo} />
        </div>
        <div className="columnFooterContainer columnFooterContainerCenter">
          <Contact options={contacts}/>
        </div>
        <div className="columnFooterContainer columnFooterContainerRight">
          <Partners partners={partners}/>
        </div>
      </div>
    </footer>
  );
};

export default FooterCustom;