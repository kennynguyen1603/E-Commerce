import React from 'react'
import { CiCircleRemove } from 'react-icons/ci'

interface ProductItemProps {
    product: any,
    updateCart: (products: any) => any
}

export default function ProductItem({product, updateCart}:ProductItemProps) {

    function updateProduct(type: '+' | '-'){
        const productUpdate: any = {...ProductItem, product}
        updateCart((pr: any) => {
            const index = pr.findIndex((i: any) => i.productId === product.productId)
            if(index >= 0 ){
                const newCart = [...pr]
                productUpdate.quantity = type === '+' ? productUpdate.quantity + 1 : productUpdate.quantity - 1 <= 0 ? 0 : productUpdate.quantity - 1
                newCart[index] = productUpdate
                return newCart
            }
        })
    }

    const increase = () => {
        updateProduct('+')
      };

      const decrease = () => {
        updateProduct('-')
      };


      function getCurrency(price: number): string{
        return new Intl.NumberFormat('vn-en',{ style: 'currency', currency: 'VND' }).format(price)
      }

  return (
    <div className="cart-items">
          <div className="cart-product">
            <button className="btn-del">
              <CiCircleRemove />
            </button>
            <img
              src={product?.thumbnail}
              alt=""
            />
            <p>{product?.title}</p>
          </div>
          <div className="cart-price">
            <span>
              <del></del>
            </span>
            <span>{getCurrency(product.price)}</span>
          </div>
          <div className="cart-quantity">
            <button onClick={increase}>-</button>
            <h2> {product?.quantity || 0}</h2>
            <button onClick={decrease}>+</button>
          </div>
          <div className="cart-total">
            <span>{getCurrency(product?.price*product?.quantity)}</span>
          </div>
        </div>
  )
}
