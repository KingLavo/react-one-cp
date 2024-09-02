import React from 'react'
import products from './product'


const Image = () => {
    
  return (
    <div>
         {
            products.map( (item, index)=>(
                 <div key={index}>
                    <img style={{width:"100px", height:"100px"}} src={`/images/${item.image}`} alt={`${item.name}`} />
                 </div>
            ))
        }
    </div>
  )
}

export default Image
