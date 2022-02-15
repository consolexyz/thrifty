import React from 'react'
import './Preview.scss'
import PreviewItem from '../preview-item/PreviewItem'


const Preview = ({title, items}) =>
   (
    <div className='collection-preview'>
       <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items.filter((item, idx)=> idx < 4).map( ({id , ...otherItemProps})=>(
            <PreviewItem key={id} {...otherItemProps} />
          ))
        }
      </div>
    </div>
  )


export default Preview