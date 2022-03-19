import React from 'react';
import './shop.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../context/product-context';
import Productcard from '../shop/products/ProductCard';


const Shop = () =>{
  const {products} = useContext(ProductsContext);

  return(
    <div className='products-container'>
      {products.map((product) =>(
        <Productcard key= {product.id} product={product} />
      ))}
    </div>
  )

}

export default Shop