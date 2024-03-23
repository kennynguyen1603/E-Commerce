import { CiCircleRemove } from "react-icons/ci";
import { useState, useEffect } from "react"; 

interface ProductItemProps {
  product: any;
  updateCart: (products: any) => any;
  deleteProduct: (productId: string) => void;
  updateProduct: (product: any, type: "+" | "-") => void;
  updateCartTotal: (priceChange: number) => void;
}

export default function ProductItem({ product, updateCart, deleteProduct, updateProduct, updateCartTotal }: ProductItemProps) {
  const [quantity, setQuantity] = useState(product.quantity);
  const [productPrice, setProductPrice] = useState(product.price * product.quantity); 

  useEffect(() => {
    setProductPrice(product.price * quantity); 
  }, [quantity, product.price]);

  function handleDeleteProduct(productId: string) {
    updateCart((pr: any) => {
      const updatedCart = pr.filter((item: any) => item.productId !== productId);
      deleteProduct(productId);
      return updatedCart;
    });
    updateCartTotal(-productPrice); 
  }
 
  
  function updateProductQuantity(type: "+" | "-") {
    const newQuantity = type === "+" ? quantity + 1 : quantity - 1;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      updateProduct({ ...product, quantity: newQuantity }, type);
      const priceChange = type === "+" ? product.price : -product.price;
      updateCartTotal(priceChange); 
    }
  }
  
  function getCurrency(price: number): string {
    return new Intl.NumberFormat("vn-en", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }

  return (
    <div className="cart-items flex-row">
      <div className="cart-product">
        <img src={product?.thumbnail} alt="" />
        <p>{product?.title}</p>
      </div>
      <div className="cart-price">
        <span>
          <del></del>
        </span>
        <span>{getCurrency(product.price)}</span>
      </div>
      <div className="cart-quantity">
        <button onClick={() => updateProductQuantity("-")}>-</button>
        <h2>{quantity}</h2>
        <button onClick={() => updateProductQuantity("+")}>+</button>
      </div>
      <div className="cart-total">
        <span>{getCurrency(productPrice)}</span>
      </div>
      <div>
        <button
          className="btn-del flex items-center justify-center bg-red-700 text-white rounded-full text-center w-8 h-8 mx-3"
          onClick={() => handleDeleteProduct(product.productId)}
        >
          <CiCircleRemove className="w-6" />
        </button>
      </div>
    </div>
  );
}
