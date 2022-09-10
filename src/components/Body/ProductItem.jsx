import React from "react";

const ProductItem = ({data}) => {
const {productName} = data;
/* const {_id, productName ,image,description,brand,category,price,countInStock} = data; */
  return (
    
    <div className="productItem">
      <div className="image-container">
      </div>
      <div className="information-container">
        <p><span>Product: </span>{" "+productName}</p>
      </div>
      
    </div>
  );
};

export default ProductItem;
