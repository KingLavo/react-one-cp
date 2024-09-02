import React from 'react'
import products from './product'


const Name = () => {
  return (
    <div>
         {
            products.map( (item, index)=>(
                 <div key={index}>
                    <p>{item.name}</p>
                 </div>
            ))
        }
    </div>
  )
}

export default Name
