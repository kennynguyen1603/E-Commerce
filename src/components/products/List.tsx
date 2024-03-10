import React from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
// import { Button } from 'flowbite-react';
// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   discountPercentage: number;
//   stock: number; 
//   category: string;
// }

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);

  const addToFav = (_id: string) => {
    if (favoriteProducts.includes(_id)) {
      setFavoriteProducts(favoriteProducts.filter((id) => id !== _id));
    } else {
      setFavoriteProducts([...favoriteProducts, _id]);
    }
  };

  return (
    <div className='showList p-2'>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className='flex flex-col items-center bg-white p-5 product-container cursor-pointer relative'>
            {favoriteProducts.includes(product._id) ? (
              <IoMdHeart className='text-red-500 absolute right-3 top-4 text-xl' onClick={() => addToFav(product._id)}/>
            ) : (
              <IoMdHeartEmpty className='text-red-500 absolute right-3 top-4 text-xl' onClick={() => addToFav(product._id)}/>
            )}
            <img src={product.image} alt={product.name} className='thumbnail w-auto' />
            <h2 className='text-center mt-2 whitespace-normal w-44 text-sm'>{product.name}</h2>
            <div className="price flex">
              <p className='text-center font-semibold text-base mt-1'>{product.price}$</p>
            </div>
            <Button className='w-32 mt-2' gradientDuoTone="pinkToOrange" size='sm'>Add to cart</Button>
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default ProductList;
