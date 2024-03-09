import React from 'react';
import { IoIosStar } from "react-icons/io";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   discountPercentage: number;
//   stock: number; 
//   // Giả định thêm thuộc tính category cho mỗi sản phẩm
//   category: string;
// }

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='showList p-2'>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className='flex flex-col items-center bg-white p-5 product-container cursor-pointer'>
            <img src={product.image} alt={product.name} className='thumbnail w-auto' />
            <h2 className='text-center mt-2 truncate w-44'>{product.name}</h2>
            <div className="price flex">
              <p className='text-center'>{product.price}$</p>
              {/* <p className='text-center'>Discount: {product.discountPercentage}%</p> */}
            </div>
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default ProductList;
