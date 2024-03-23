// file cart.tsx
import ProductItem from "@/components/Cart/ProductItem";
import Axios from "@/config/axios";
import "@/styles/Cart.less";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [cartTotal, setCartTotal] = useState<number>(0); 
  function getCart() {
    Axios.get("carts/get")
      .then((res) => {
        if (res?.data?.products) {
          setCart(res.data.products);
          calculateCartTotal(res.data.products); 
        }
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getCart();
  }, []);

  function handleDeleteProduct(productId: string) {
    setCart((prevCart: any) => {
      const updatedCart = prevCart.filter(
        (item: any) => item.productId !== productId
      );
      calculateCartTotal(updatedCart);
      return updatedCart;
    });
  }

  function updateProduct(product: any, type: "+" | "-") {
    setCart((pr: any) => {
      const index = pr.findIndex((i: any) => i.productId === product.productId);
      if (index >= 0) {
        const newCart = [...pr];
        newCart[index] = { ...product };
        calculateCartTotal(newCart);
        return newCart;
      }
    });
  }

  function calculateCartTotal(cart: any) {
    const total = cart.reduce(
      (acc: number, curr: any) => acc + curr.price * curr.quantity,
      0
    );
    setCartTotal(total);
  }

  if (loading) return <div>Loading... </div>;

  return (
    <div className="Cart mt-10">
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="cart-full">
        <h1>Shopping Card</h1>
        <div className="cart-title">
          <h3>Products</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Sub-Total</h3>
        </div>
        {cart ? (
          cart.map((i: any) => (
            <ProductItem
              key={i.id}
              product={i}
              updateCart={setCart}
              deleteProduct={(productId: string) =>
                handleDeleteProduct(productId)
              }
              updateProduct={(type: "+" | "-") => updateProduct(i, type)}
              updateCartTotal={setCartTotal} 
            />
          ))
        ) : (
          <div className="w-full text-center mt-12">Unavailable</div>
        )}
      </div>
      <div className="right">
        <div className="cart-total">
          <h3>Card Totals</h3>
          <div className="total">
            <div className="content">
              <div className="sub-total">
                <p>Sub-total</p>
                <span>₹{cartTotal}</span>{" "}
              </div>
              <div className="Shipping">
                <p>Shipping</p>
                <span>Free</span>
              </div>
              <div className="Discount">
                <p>Discount</p>
                <span>₹999</span>
              </div>
              <div className="Tax">
                <p>Tax</p>
                <span>₹2,999</span>
              </div>
              <div className="final-total">
                <p>Total</p>
                <span>₹123,999 INR</span>
              </div>
              <button
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
        <div className="coupone-Code">
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                form="Coupon Code"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Coupon Code
              </label>
              <input
                type="text"
                placeholder="Coupon Code"
                className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  APPLY COUPON
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  export default Cart;
