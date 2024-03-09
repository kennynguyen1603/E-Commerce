import React from "react";
import "@/styles/Cart.less";
import { CiCircleRemove } from "react-icons/ci";

function Cart() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseCount1 = () => {
    setCount1(count1 + 1);
  };

  const decreaseCount1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };
  const increaseCount2 = () => {
    setCount2(count2 + 1);
  };

  const decreaseCount2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  };
  return (
    <div className="Cart">
      <div className="cart-full">
        <h1>Shopping Card</h1>
        <div className="cart-title">
          <h3>Products</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Sub-Total</h3>
        </div>
        <div className="cart-items">
          <div className="cart-product">
            <button className="btn-del">
              <CiCircleRemove />
            </button>
            <img
              src="https://s3-alpha-sig.figma.com/img/9936/80a4/fb804721053db577fe1e84c4758c415b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUIR8voWp0Mja2ywjLb1WsgUQWNeQytmP2ca6Y0AxOJAQviydPTb~4B6ybFC2RdxBPk5FJTRRBCj3b09m0K3L7WXqKmM338WSF~8WKwOzymRJziuqi1R~b5GDC-dtckjjB~FqybDt8nJ1uSuFGE1boBnVe~Z8AfJSL6lCzhdFscQhnxjVwinqmoz-YqaUYW6Ss8FfmykYMJYajskbgwDvTAcRNmHq1S~ogu0K9-aaepS37MVGS1gmYj~NABlUYuFYiLtpP~UZ0hW0PBbixWWyAalqWkJGfNWZkBZpA-aaRdg-plU-syz~UBRCcl1Bly9x7d~4Z4Ieb7lQsi8SfgLLA__"
              alt=""
            />
            <p>2020 Apple MacBook Pro with App..</p>
          </div>
          <div className="cart-price">
            <span>
              <del>₹120000</del>
            </span>
            <span>₹89000</span>
          </div>
          <div className="cart-quantity">
            <button onClick={decreaseCount1}>-</button>
            <h2> {count1}</h2>
            <button onClick={increaseCount1}>+</button>
          </div>
          <div className="cart-total">
            <span>₹89000</span>
          </div>
        </div>
        <div className="cart-items">
          <div className="cart-product">
            <button className="btn-del">
              <CiCircleRemove />
            </button>
            <img
              src="https://s3-alpha-sig.figma.com/img/dc45/6873/073d3eeaa50b890f18d013adcbd15203?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q968O-WOgyLjQ7pwsEcYhZL-t3WV378EGhNzJUEw7NwU4Acpn06WXiaD-b3EnJU62oMAnu3LDYNN2UTKbqF2fp0lNL0uAn3-~dINhhGzURRts0lchBFNfqCHMp5akxDhghlik9pEe9vyoquDq2v7hnipTPdn3jWZRMWsiHVh964Jplt4tsodnH5sK1c-i1meZx6P2Lmnk2PeC7K-Y9sCSTRNCvdQuSbX1b8~GbenC9W8qeKcsaWGhBVx~hmApPgseHmP3cue2y-da5dYwrdQfOOk6ZDq-mgVz0sLfgydBpbUORvTjPZMXYfJI3kDThi8QXhVPz7ZuEYIRHaCSQCH2w__"
              alt=""
            />
            <p>iPhone 11 Pro (256 GB) - Gray </p>
          </div>
          <div className="cart-price">
            <span>
              <del>₹36999</del>
            </span>
            <span>₹32999</span>
          </div>
          <div className="cart-quantity">
            <button onClick={decreaseCount2}>-</button>
            <h2> {count2}</h2>
            <button onClick={increaseCount2}>+</button>
          </div>
          <div className="cart-total">
            <span>₹32999</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="cart-total">
          <h3>Card Totals</h3>
          <div className="total">
            <div className="content">
              <div className="sub-total">
                <p>Sub-total</p>
                <span>₹121,999</span>
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
