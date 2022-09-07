import React from 'react'
import CartShoppingImg from "../../assets/cart-shopping.svg"

import './ShoppingCart.css'

const ShoppingCart = () => {
    return (
      <div className="cartShoppingContainer">
        <img src={CartShoppingImg} alt="MiniCart"/>
        <div className="countContainer">
            <span className="countNumber">1</span>
        </div>
      </div>
    )
}

export default ShoppingCart