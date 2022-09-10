import React, { useState, useEffect } from "react";
import HeaderCustom from "./components/Header/HeaderCustom";
import FooterCustom from "./components/Footer/FooterCustom";
import BodyCustom from "./components/Body/BodyCustom";


import "./App.css";

const App = () => {
  const mainContainerStyles = {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div className={"storeContainer"} style={mainContainerStyles}>
      <HeaderCustom />
      <BodyCustom />
      <FooterCustom />
    </div>
  );
};

export default App;
