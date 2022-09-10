import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

import './productsDisplayPage.css'

const ProductDisplayPage = ({ state }) => {
    useEffect(()=> {
        peticion()
    },[])

  const peticion = async () => {
    const response = await fetch("https://corebiz-test.herokuapp.com/api/v1/products");
    const dat = await response.json();
    setProductos(dat)
  };

  const [productos, setProductos] = useState([]);

  return (
    <>
        <h2 style={{margin:0}}>Más Vendidos</h2>
        <div style={{width:"8%",background:"#C0C0C0",height:"4px",margin:"0rem"}}></div>
        <div className="itemsShelf">
            {productos.map((product) => (
            <ProductItem key={product.productId} data={product}/>
            ))}
        </div>
    </>
  );
};

export default ProductDisplayPage;
