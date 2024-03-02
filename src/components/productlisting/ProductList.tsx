import React, { useEffect } from 'react';
import { IoIosStar } from "react-icons/io";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  rating: number;
  stock: number; 
}

interface ProductListProps {
  products: Product[];
}

const renderRating = (rating: number, stock: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} className="star"><IoIosStar /></span>);
  }
  const stockText = stock > 0 ? `(${stock})` : "(Out of stock)";
  return (
    <div className="rating flex justify-around">
      <div className="star-container flex items-center text-yellow-300">
        {stars}
      </div>
      <span>{stockText}</span>
    </div>
  );
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  useEffect(() => {
    console.log(products)
  }, [])

  return (
    <div className='grid grid-cols-4 gap-3 p-10'>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className='flex flex-col items-center bg-white p-5 product-container'>
            <img src={`${product.thumbnail}`} alt={product.title} className='thumbnail w-auto'/>
            {renderRating(product.rating, product.stock)} {/* Calling the renderRating function */}
            <h2 className='text-center mt-2'>{product.title}</h2>
            <div className="price flex">
              <p className='text-center'>{product.price}</p>
              <p className=''>discount: {product.discountPercentage}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
