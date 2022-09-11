import React from "react";
import HeaderCustom from "./components/Header/HeaderCustom";
import FooterCustom from "./components/Footer/FooterCustom";
import BodyCustom from "./components/Body/BodyCustom";
import "./storeContainer.css";

import "./App.css";

const App = () => {
  return (
    <div className={"storeContainer"}>
      <HeaderCustom />
      <BodyCustom />
      <FooterCustom />
    </div>
  );
};

export default App;
