import React from 'react';
import './Product-card.scss';
import CustomButton from '../../custombutton/CustomButton';

const ProductCard = ({product}) => {
  const {name,price,imageUrl} = product;
 return (
   <div className='product-card-container'>
        <img src={imageUrl} alt ={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton  inverted > Add to cart </CustomButton>
    </div>
  )
      }

export default ProductCard;