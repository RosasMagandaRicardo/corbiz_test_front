import React, { useState } from "react";
import starFull from "../../assets/star-solid.svg";
import starVoid from "../../assets/star-regular.svg";

import "./productItem.css";

const ProductItem = ({ data }) => {
  const {
    productId,
    productName,
    stars,
    imageUrl,
    listPrice,
    price,
    installments,
  } = data;

  const { quantity, value } = installments;

  const fillstars = () => {
    const allStars = [];
    for (let i = 0; i < 5; i++) {
      i < stars
        ? allStars.push(<img src={starFull}></img>)
        : allStars.push(<img src={starVoid}></img>);
    }
    return allStars;
  };

  const [enter, setEnter] = useState(false);

  return (
    <div
      key={productId}
      className={`productItem productItem${productId}`}
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      style={{ background: `${enter ? "#E6E8EA" : "white"}`, border: `${enter ? "1px solid darkgray" : "1px solid lightgray"}` }} 
    >
      <div className="productImageContainer">
        <img src={imageUrl} alt={productName} />
        {listPrice != null ? (
          <div className="offerFlag">
            <p>OFF</p>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="prodcutInformationContainer">
        <div className="productName">
          <p className="textProductName">
            <span></span>
            {productName}
          </p>
        </div>
        <div className="ratingContainer">{fillstars()}</div>
        {listPrice ? (
          <div className="listPrice">
            <p className="textListPrice">
              <span>{`De : $ ${listPrice}`}</span>
              
            </p>
          </div>
        ) : (
          <></>
        )}
        <div className="sellPrice">
          <p className="textSellPrice">
            <span></span>
            {price ? `por : $ ${price}` : ""}
          </p>
        </div>
        <div className="installments">
          <p className="textInstallments">
            <span></span>
            {installments ? `ou em ${quantity} de R $ ${value}` : ""}
          </p>
        </div>
        <div className="buyButtonContainer">
        <a href="/"><button style={{ opacity: `${enter ? 1 : 0}` }}>COMPRAR</button></a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
