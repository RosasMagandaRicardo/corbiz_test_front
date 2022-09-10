import React from "react";
import starFull from '../../assets/star-solid.svg'
import starVoid from '../../assets/star-regular.svg'

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

  const fillstars = () => {
    const allStars = [];
    for(let i=0;i<5;i++){
        i < stars ? allStars.push(<img src={starFull}></img>) :  allStars.push(<img src={starVoid}></img>)
    }
    return allStars
  }
  
  return (
      <div className="productItem">
        <div className="productImageContainer">
          <img src={imageUrl} alt={productName} />
        </div>
        {listPrice != null ?
            <div className="offerFlag">
            </div>
            :
            <></>
        }
        <div className="prodcutInformationContainer">
          <div className="productName">
            <p><span></span>{productName}</p>
          </div>
          <div className="ratingContainer" style={{display: 'flex'}}>
            {
                fillstars()
            }
          </div>
        </div>
      </div>
  );
};

export default ProductItem;
