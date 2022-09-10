import React, { useReducer } from "react";
import {shoppingInitialState, shoppingReducer } from "../../reducer/shoppingReducer";
import ProductItem from "./ProductItem"

const ProductCarrousel = () => {

const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
const {productos,carrito} = state;

  const addToCart = (_id) => {
    console.log(_id);
  }

  return (
    <div className="productCarrouselContainer" style={{ height: "100%" }}>

      {productos.map((product) => (
        <ProductItem key={product._id} data={product}/>
      ))}
    </div>
  );
};

export default ProductCarrousel;
