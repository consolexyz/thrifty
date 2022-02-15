import React from 'react'
import './Preview-item.scss'

const PreviewItem = ({id,name,price,imageUrl}) =>
  (
    <div className='preview-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
            <div className='preview-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
    </div>
  )
export default PreviewItem