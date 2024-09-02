import React from 'react'
import products from './product'


const Description = () => {
  return (
    <div>
         {
            products.map( (item, index)=>(
                 <div key={index}>
                    <p>{item.description}</p>
                 </div>
            ))
        }
    </div>
  )
}

export default Description
