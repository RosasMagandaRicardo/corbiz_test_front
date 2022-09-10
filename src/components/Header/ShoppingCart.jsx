import React, { useEffect } from "react";
import CartShoppingImg from "../../assets/cart-shopping.svg";

import "./ShoppingCart.css";

const ShoppingCart = () => {
  useEffect(() => {
    localStorage.getItem("carrito");
  }, []);

  return (
    <div className="cartShoppingContainer">
      <img src={CartShoppingImg} alt="MiniCart" />
      <div className="countContainer">
        <span className="countNumber">{localStorage.getItem("carrito")}</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
