import React from 'react'
import '@/styles/Cart.less'

function ProductsIphone(props: any) {
   return (
      <div className='card'>
         <div className="card-img">
            <img src={props.url} />
         </div>
         <p>{props.status}</p>
         <h3>{props.name}</h3>
         <h4>{props.price}</h4>
         <button>Buy</button>
      </div>
   )
}

export default ProductsIphone