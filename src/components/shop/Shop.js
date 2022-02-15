import React from 'react';
import Preview from './preview/Preview';
import ShopData from './shop.data';

class Shop extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      collections:ShopData
    }
  }
render() {

  const {collections} = this.state;
  return(
    <div className='shop-page'>
      {
      collections.map( ({id, ...otherCollectionProps})=> ( <Preview  key={id} {...otherCollectionProps}/>))
      }
    </div>
  )
}
}

export default Shop