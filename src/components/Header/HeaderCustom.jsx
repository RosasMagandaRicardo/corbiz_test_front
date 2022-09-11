import React from "react";
import ReactLogo from "../../assets/logo-corebiz-global.svg"
import MenuMobile from "../../assets/bars-solid.svg"
import SearchBar from "./SearchBar"
import MyAccount from "./MyAccount"
import ShoppingCart from "./ShoppingCart"

import './HeaderCustom.css'

const HeaderCustom = () => {
  return (
    <header className="containerNavBar">
      <div className="mobileMenuContainer">
        <img src={MenuMobile} alt="Hamburger" />
      </div>
      <div className="logoContainer">
        <a href="/"><img src={ReactLogo} alt="Logo Corebiz" /></a>
      </div>
      <SearchBar></SearchBar>
      <MyAccount></MyAccount>
      <ShoppingCart></ShoppingCart>
    </header>
  );
};

export default HeaderCustom;
