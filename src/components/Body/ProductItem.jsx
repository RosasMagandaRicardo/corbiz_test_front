import React from "react";
import starFull from '../../assets/star-solid.svg'
import starVoid from '../../assets/star-regular.svg'

import './productItem.css';

const ProductItem = ({ data }) => {

  const {
    productId,
    productName,
    stars,
    imageUrl,
    listPrice,
    price,
    installments
  } = data;

  const {quantity,value} = installments

  const fillstars = () => {
    const allStars = [];
    for(let i=0;i<5;i++){
        i < stars ? allStars.push(<img src={starFull}></img>) :  allStars.push(<img src={starVoid}></img>)
    }
    return allStars
  }
  
  return (
      <div key={productId} className={`productItem productItem${productId}`}>
        <div className="productImageContainer">
          <img src={imageUrl} alt={productName} />
          {listPrice != null ?
            <div className="offerFlag">
                <p>OFF</p>
            </div>
            :
            <></>
        }
        </div>
       
        <div className="prodcutInformationContainer">
          <div className="productName">
            <p><span></span>{productName}</p>
          </div>
          <div className="ratingContainer">{fillstars()}
          </div>
          <div className="listPrice">
            <p><span></span>{listPrice ? `De : ${listPrice}` : ""}</p>
          </div>
          <div className="sellPrice">
            <p><span></span>{price ? `por : ${price}` : ""}</p>
          </div>
          <div className="installments">
            <p><span></span>{installments ? `ou em ${quantity} de R $ ${value}` : ""}</p>
          </div>
        </div>
      </div>
  );
};

export default ProductItem;
