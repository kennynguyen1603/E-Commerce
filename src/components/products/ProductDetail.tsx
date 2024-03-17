import Axios from "@/config/axios";
import { AuthContext } from "@/context/AuthContext";
import { logout } from "@/services/auth";
import { addToCartServer } from "@/services/cart";
import { convertDataProductAddToCart, convertDataProductAddToCart2 } from "@/utils/product";
import axios from "axios";
import { Carousel } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const authContext = useContext<any>(AuthContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState<any>(null);
  const options = ["Memory", "Size", "Storage"];
  useEffect(() => {
    setLoading(true);
    getCart();
    axios
      .get(`${import.meta.env.VITE_API_PRODUCT_BASE}${productId}`)
      .then((res: any) => {
        console.log("res:", res);

        setProductDetails(res.data);
      })
      .catch()
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   console.log("productDetails", productDetails);
  // }, [productDetails]);

  //loading

  // const isProduct = products.find((product) => product._id === productId);
  // if (!isProduct) return <div>Product not found</div>;

  // const imgProduct = [
  //   isProduct.image,
  //   isProduct.image1,
  //   isProduct.image2,
  //   isProduct.image3,
  //   isProduct.image4,
  // ];
  function getCart() {
    Axios.get("carts/get")
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res.data);
        if (res?.data?.products) {
          setCart(res.data.products);
        }
      })
      .finally(() => setLoading(false));
  }

  function handleQuantityChange(arg0: number): void {
    if (arg0 < 1) return;
    setQuantity(arg0);
  }

  function addToCart(productId: string) {
    if (!authContext?.infoUser?.accessToken)
      return navigate(`/login?redirect=${location.pathname}`);

    const index = cart.findIndex(
      (product: any) => product.productId === productId
    );
    console.log("🚀 ~ addToCart ~ index:", index)


    if (index >= 0) {
      const updateCart = [...cart];

      productDetails.quantity = quantity;
      const productAdd = convertDataProductAddToCart2(productDetails)
      updateCart[index] = productAdd;

      setCart(updateCart);
      addToCartServer(updateCart)
        .then(() => {
          authContext.setCartItems(updateCart);
        })
        .catch(() => {
          logout();
          navigate(`/login?redirect=${location.pathname}`);
        });
    } else {
      const cartItemsSave: cartItemsServerType[] = convertDataProductAddToCart(
        cart,
        productDetails
      );
      setCart(cartItemsSave);
      addToCartServer(cartItemsSave)
        .then(() => {
          authContext.setCartItems(cartItemsSave);
        })
        .catch(() => {
          logout();
          navigate(`/login?redirect=${location.pathname}`);
        });
    }
  }

  function handleChangeDetail(a: string) {
    setProductDetails(a === "description" ? "description" : "review");
  }

  if (loading || !productDetails) return <div>Loading...</div>;
  return (
    <div className="flex justify-center items-center flex-col py-8">
      <div className="container bg-transparent flex flex-col">
        <div className="main-content w-full py-10 px-32 flex gap-10">
          <div className="slideShow w-3/4 h-98 px-3">
            <Carousel slideInterval={5000} className="bg-red-400">
              {[
                productDetails.image,
                productDetails.image1,
                productDetails.image2,
                productDetails.image3,
                productDetails.image4,
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={productDetails.name}
                  className="h-4/6 w-auto"
                />
              ))}
            </Carousel>
          </div>
          <div className="infoProduct w-1/2 flex flex-col">
            <div className="rating flex items-center gap-2 mb-2">
              <span className="text-2xl flex text-yellow-400 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="text-sm">5 Star Rating</span>
            </div>
            <div className="name text-2xl mb-2">{productDetails.name}</div>
            <div className="grid grid-cols-2 text-sm mb-2">
              <p>ID: {productDetails._id.slice(0, 6)}</p>
              <p>
                Availability:{" "}
                {productDetails.stock > 0 ? "In stock" : "sold out"}
              </p>
              <p>Brand: Apple</p>
              <p>Category: {productDetails.category}</p>
            </div>
            <div className="product-pricing flex gap-6 mb-4 text-xl">
              <span className="discounted-price text-sky-600">
                ₹{productDetails.price - (productDetails.price * 25) / 100}
              </span>
              <span className="original-price line-through text-gray-500">
                ₹{productDetails.price}
              </span>
              <span className="discount-percent bg-amber-500 text-base">
                25% OFF
              </span>
            </div>
            <div className="product-options flex flex-col border-t border-gray-300">
              {options.map((option, index) => (
                <div key={index} className="option flex flex-col pt-2 gap-2">
                  <label htmlFor={option}>{option}</label>
                  <select
                    name={option}
                    id={option}
                    className="h-10 rounded-md border border-gray-300"
                  >
                    <option value="" className="">
                      {option}
                    </option>
                  </select>
                </div>
              ))}
            </div>
            <div className="addCart flex flex-wrap gap-2 justify-between mt-3">
              <div className="relative flex w-2/6">
                <button
                  className="absolute left-0 top-0 h-full px-2"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </button>

                <input
                  type="text"
                  className="w-full p-2 text-center border rounded-lg"
                  value={quantity.toString().padStart(2, "0")}
                  readOnly
                />

                <button
                  className="absolute right-0 top-0 h-full px-2"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Button
                className="btn btn-primary w-7/12 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                onClick={() => addToCart(productDetails._id)}
                color="light"
              >
                Add to Cart
              </Button>
              <Button color="blue" className="w-5/6">
                Buy Now
              </Button>
              <Button className="btn btn-tertiary" color="light">
                <TbJewishStar />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-white">
        <div className="sub-content">
          <div className="flex justify-center items-center my-2 border-b border-gray-300">
            {/* co the dung mang de luu cac gia tri sau do render ra */}
            <Button
              className="description bg-transparent text-slate-900 uppercase"
              onClick={() => handleChangeDetail("description")}
            >
              description
            </Button>
            <Button
              className="review bg-transparent text-slate-900 uppercase"
              onClick={() => handleChangeDetail("review")}
            >
              review
            </Button>
          </div>
          <div className="p-10">
            {productDetails === "description" ? (
              <div className="description-content">
                <p className="mb-4">{productDetails.desc1}</p>
                <p>{productDetails.desc2}</p>
              </div>
            ) : (
              <div>
                <p>review</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
