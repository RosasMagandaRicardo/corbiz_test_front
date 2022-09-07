import React from "react";
import ReactLogo from "../../assets/logo-corebiz-global.svg"
import SearchBar from "./SearchBar"
import MyAccount from "./MyAccount"
import ShoppingCart from "./ShoppingCart"

import './HeaderCustom.css'

const HeaderCustom = () => {
  return (
    <section className={`containerNavBar`}>
      <div className="logoContainer">
        <img src={ReactLogo} alt="Logo Corebiz" />
      </div>
      <SearchBar></SearchBar>
      <MyAccount></MyAccount>
      <ShoppingCart></ShoppingCart>
    </section>
  );
};

export default HeaderCustom;
