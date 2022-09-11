import React from "react";
import ReactLogo from "../../assets/logo-corebiz-global.svg";
import MenuMobile from "../../assets/bars-solid.svg";
import SearchBar from "./SearchBar";
import MyAccount from "./MyAccount";
import ShoppingCart from "./ShoppingCart";
import { isMobile, BrowserView, MobileView } from "react-device-detect";

import "./HeaderCustom.css";

const HeaderCustom = () => {
  return (
    <>
      {isMobile ? (
        <MobileView>
          <header className="containerNavBar">
            <div className="headermenuCart">
              <div className="mobileMenuContainer">
                <img src={MenuMobile} alt="Hamburger" />
              </div>
              <div className="logoContainer">
                <a href="/">
                  <img src={ReactLogo} alt="Logo Corebiz" />
                </a>
              </div>
              <ShoppingCart></ShoppingCart>
            </div>
            <SearchBar></SearchBar>
          </header>
        </MobileView>
      ) : (
        <BrowserView>
          <header className="containerNavBar">
            <div className="menuLogoContainer">
              <div className="mobileMenuContainer">
                <img src={MenuMobile} alt="Hamburger" />
              </div>
              <div className="logoContainer">
                <a href="/">
                  <img src={ReactLogo} alt="Logo Corebiz" />
                </a>
              </div>
            </div>
            <SearchBar></SearchBar>
            <MyAccount></MyAccount>
            <ShoppingCart></ShoppingCart>
          </header>
        </BrowserView>
      )}
    </>
  );
};

export default HeaderCustom;
