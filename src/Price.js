import React from 'react'
import products from './product'


const Price = () => {
  return (
    <div>
         {
            products.map( (item, index)=>(
                 <div key={index}>
                    <p>{item.price}</p>
                 </div>
            ))
        }
    </div>
  )
}

export default Price
