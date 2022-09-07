import { useState, useEffect } from "react";
import HeaderCustom from "./components/Header/HeaderCustom";
import FooterCustom from "./components/Footer/FooterCustom"

import "./App.css";

const App = () => {
  const [response, setResponse] = useState("");

  const API_DIRECTION = "https://corebiz-test.herokuapp.com/api/v1/products";

  // call server to see if its running

    const peticion = async() => {
      const response = await fetch(`${API_DIRECTION}`);
      const dat = await response.json();
      /* renderTheData(dat); */
      /*fetch(`${API_DIRECTION}`)
          .then((response) => response.json())
          .then((data) => renderTheData(data));*/
          console.log("Response",dat)
    }
  peticion();

  return (
    <div  className={"storeContainer"} style={{ textAlign: "center" }}>
      <HeaderCustom/>
      <FooterCustom/>
    </div>
  );
};

export default App;
