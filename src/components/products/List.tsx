import React from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { AuthContext } from '@/context/AuthContext';
import { convertDataProductAddToCart } from '@/utils/product';
import { addToCartServer } from '@/services/cart';
import { logout } from '@/services/auth';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const authContext = useContext<any>(AuthContext)
  const navigate = useNavigate();
  let location = useLocation();

  const addToWishlist = (productId: string) => {
    const isProductInWishlist = authContext.wishlist.some((item: { productId: string; }) => item.productId === productId);

    if (isProductInWishlist) {
      const updatedWishlist = authContext.wishlist.filter((item: { productId: string; }) => item.productId !== productId);
      authContext.setWishlist(updatedWishlist);
    } else {
      const productToAdd = products.find(product => product._id === productId);
      if (productToAdd) {
        const newWishlistItem = {
          productId: productToAdd._id,
          title: productToAdd.name,
          price: productToAdd.price,
          quantity: 1,
          stock: productToAdd.stock,
          thumbnail: productToAdd.image,
          category: productToAdd.category,
          image: productToAdd.image
        };
        authContext.setWishlist([...authContext.wishlist, newWishlistItem]);
      }
    }
  };

  function addToCart(productId: string) {

    if (!authContext?.infoUser?.accessToken)
      navigate(`/login?redirect=${location.pathname}`,)


    const product = products.find((product) => product._id === productId);
    const isProductInCart = authContext.cartItems.some((item: { productId: string; }) => item.productId === productId);
    if (product && !isProductInCart) {
      const cartItemsSave: cartItemsServerType[] = convertDataProductAddToCart(authContext.cartItems, product)
      addToCartServer(cartItemsSave)
        .then(() => {
          authContext.setCartItems()
        })
        .catch(() => {
          logout();
          navigate(`/login?redirect=${location.pathname}`)
        })
    }
  }

  useEffect(() => {
    console.log("🚀 ~ addToCart ~ authContext:", authContext.cartItems)
  }, [authContext.cartItems])

  return (
    <div className='showList p-2'>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className='flex flex-col items-center bg-white p-5 product-container cursor-pointer relative'>
            {authContext.wishlist.some((item: { productId: string; }) => item.productId === product._id) ? (
              <IoMdHeart className='text-red-500 absolute right-3 top-4 text-xl' onClick={() => addToWishlist(product._id)} />
            ) : (
              <IoMdHeartEmpty className='text-red-500 absolute right-3 top-4 text-xl' onClick={() => addToWishlist(product._id)} />
            )}
            <img src={product.image} alt={product.name} className='thumbnail w-auto' />
            <h2 className='text-center mt-2 whitespace-normal w-44 text-sm'>{product.name}</h2>
            <div className="price flex">
              <p className='text-center font-semibold text-base mt-1'>{product.price}$</p>
            </div>
            <Button className='w-32 mt-2' onClick={() => addToCart(product._id)} gradientDuoTone="pinkToOrange" size='sm'>Add to cart</Button>
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default ProductList;
