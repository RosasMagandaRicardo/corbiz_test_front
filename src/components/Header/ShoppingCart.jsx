import React, {useState,useEffect} from "react";
import CartShoppingImg from "../../assets/cart-shopping.svg";

import "./ShoppingCart.css";

const ShoppingCart = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(window.localStorage.getItem('count'))
  }, [count]);

  return (
    <div className="cartShoppingContainer">
      <img src={CartShoppingImg} alt="MiniCart" />
      <div className="countContainer">
        <span className="countNumber">{window.localStorage.getItem('count') ? window.localStorage.getItem('count') : "0"}</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
