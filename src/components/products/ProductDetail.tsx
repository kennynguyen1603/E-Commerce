import Axios from "@/config/axios";
import { AuthContext } from "@/context/AuthContext";
import { logout } from "@/services/auth";
import { addToCartServer } from "@/services/cart";
import {
  convertDataProductAddToCart,
  convertDataProductAddToCart2,
} from "@/utils/product";
import axios from "axios";
import { Carousel } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
import { TbJewishStar } from "react-icons/tb";
import { useParams } from "react-router-dom";
import "@/styles/ProductDetail.less";
import { number } from "yup";

const ProductDetail = () => {
  const { productId } = useParams();
  const authContext = useContext<any>(AuthContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState<any>(null);
  const [outline, setOutline] = useState("description");
  const options = ["Memory", "Size", "Storage"];

  useEffect(() => {
    setLoading(true);
    getCart();
    axios
      .get(`${import.meta.env.VITE_API_PRODUCT_BASE}${productId}`)
      .then((res: any) => setProductDetails(res.data))
      .catch()
      .finally(() => setLoading(false));
  }, []);

  const imgProduct = [
    productDetails?.image,
    productDetails?.image1,
    productDetails?.image2,
    productDetails?.image3,
    productDetails?.image4,
  ];

  const priorityFeatures = [
    { icon: "📱", decs: "Free 1 Year Warranty" },
    { icon: "🚚", decs: "Free Delivery & Fasted Delivery" },
    { icon: "💰", decs: "100% Money-back guarantee" },
    { icon: "📞", decs: "24/7 Customer Support" },
    { icon: "🔒", decs: "Secure Payment Methods" },
  ];

  const ShippingInformation = {
    courier: "2 - 4 days, free shipping",
    LocalShipping: "up to one week, $19.00",
    USPGroundShipping: "4 - 6 days, $29.00",
    UnishopGlobalExpory: "3 - 4 days, $39.00",
  };

  function getCart() {
    Axios.get("carts/get")
      .then((res) => {
        if (res?.data?.products) setCart(res.data.products);
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

    const updateCart = [...cart];
    productDetails.quantity = quantity;
    const productAdd = convertDataProductAddToCart2(productDetails);
    updateCart[index >= 0 ? index : cart.length] = productAdd;
    setCart(updateCart);

    addToCartServer(updateCart)
      .then(() => authContext.setCartItems(updateCart))
      .catch(() => {
        logout();
        navigate(`/login?redirect=${location.pathname}`);
      });
  }

  function handleChangeDetail(a: string) {
    setOutline(a === "description" ? "description" : "review");
  }

  if (loading || !productDetails) return <div>Loading...</div>;

  const ratings = {
    fiveStar: 94532,
    fourStar: 6717,
    threeStar: 714,
    twoStar: 152,
    oneStar: 643,
  };
  const totalRatings = Object.values(ratings).reduce(
    (acc, count) => acc + count,
    0
  );
  const averageRating = (
    (5 * ratings.fiveStar +
      4 * ratings.fourStar +
      3 * ratings.threeStar +
      2 * ratings.twoStar +
      1 * ratings.oneStar) /
    totalRatings
  ).toFixed(1);

  const RatingBar = ({
    starCount,
    count,
    total,
  }: {
    starCount: number;
    count: number;
    total: number;
  }) => {
    const widthPercentage = (count / total) * 100;
    return (
      <div className="flex items-center my-1">
        <div className="flex w-1/5 mr-2.5 justify-center">
          {[...Array(starCount)].map((_, index) => (
            <IoIosStar key={index} className="text-amber-300" />
          ))}
          {starCount < 5 &&
            [...Array(5 - starCount)].map((_, index) => (
              <IoIosStarOutline key={index} className="text-gray-300" />
            ))}
        </div>
        <div className="w-3/5 h-1 rounded-full bg-gray-300">
          <div
            className="h-full bg-orange-400"
            style={{ width: `${widthPercentage}%` }}
          ></div>
        </div>
        <div className="ml-2.5">
          {widthPercentage.toFixed(1) + "%"}
          <span>({count})</span>
        </div>
      </div>
    );
  };

  const FeedbackItem = ({
    name,
    time,
    rating,
    comment,
    avatar,
  }: {
    name: string;
    time: string;
    rating: number;
    comment: string;
    avatar?: string;
  }) => {
    return (
      <div style={{ borderTop: "1px solid #ddd", padding: "10px 0" }}>
        <div style={{ fontWeight: "bold" }}>{name}</div>
        <div style={{ color: "#666", fontSize: "0.8em" }}>{time}</div>
        <div style={{ color: "orange" }}>{"★".repeat(rating)}</div>
        <div>{comment}</div>
      </div>
    );
  };

  return (
    <div className="productDetail flex justify-center items-center flex-col py-8">
      <div className="container bg-transparent flex flex-col">
        <div className="main-content w-full py-10 px-32 flex gap-10">
          <div className="slideShow w-3/4 h-98 px-3">
            <Carousel slideInterval={5000} className="">
              {imgProduct.map((img, index) => (
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
              <span className="text-xl flex text-yellow-400 gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} />
                  ))}
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
                <div key={index} className="option flex flex-col pt-2">
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
          <div className="flex justify-center p-2 gap-4 items-center my-2 border-b border-gray-300">
            <button
              className={`outline description bg-transparent text-slate-900 uppercase ${
                outline === "description" ? "active" : ""
              }`}
              onClick={() => handleChangeDetail("description")}
            >
              description
            </button>
            <button
              className={`outline review bg-transparent text-slate-900 uppercase hover:bg-white ${
                outline === "review" ? "active" : ""
              }`}
              onClick={() => handleChangeDetail("review")}
            >
              review
            </button>
          </div>
          <div className="p-10">
            {outline === "description" ? (
              <div className="description-button grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <h3 className="text-lg font-medium mb-3">Description</h3>
                  <div className="text-gray-500 text-sm">
                    <p className="mb-2">{productDetails.desc1}</p>
                    <p>{productDetails.desc2}</p>
                  </div>
                </div>
                <div className="priorityFeatures">
                  {/*dùng mảng để lưu các feature sau đó render ra, làm database mỗi sản phẩm có feature riêng*/}
                  <h3 className="text-lg font-medium mb-3">Feature</h3>
                  <ul className="flex flex-col gap-4">
                    {priorityFeatures.map((feature, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span>{feature.icon}</span>
                        <span className="customTextColor">{feature.decs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Shipping Imformation
                  </h3>
                  <ul className="flex flex-col gap-5">
                    {Object.entries(ShippingInformation).map(
                      ([key, value], index) => (
                        <li key={index} className="flex gap-2 text-sm">
                          <span className="customTextColor">{key}:</span>
                          <span className="text-gray-500">{value}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="review-content flex flex-col">
                <div className="rating flex">
                  <div className="overallRating w-1/4 flex flex-col justify-center items-center">
                    <div className="ratingStar flex flex-col justify-center items-center gap-4">
                      <div className="ratingNumber">
                        <span className="text-4xl font-semibold">
                          {averageRating}
                        </span>
                      </div>
                      <div className="text-2xl mb-1 text-yellow-400 flex">
                        {Array(parseInt(averageRating)).fill(<IoIosStar />)}
                        {/* {<IoIosStarOutline/>.repeat(parseInt(averageRating))} */}
                        <IoIosStarHalf />
                      </div>
                      <div className="text-sm">
                        <span>Customer Rating</span>(
                        {totalRatings.toLocaleString()})
                      </div>
                    </div>
                  </div>
                  <div className="ratingDetail w-3/4 space-y-2 w">
                    <RatingBar
                      starCount={5}
                      count={ratings.fiveStar}
                      total={totalRatings}
                    />
                    <RatingBar
                      starCount={4}
                      count={ratings.fourStar}
                      total={totalRatings}
                    />
                    <RatingBar
                      starCount={3}
                      count={ratings.threeStar}
                      total={totalRatings}
                    />
                    <RatingBar
                      starCount={2}
                      count={ratings.twoStar}
                      total={totalRatings}
                    />
                    <RatingBar
                      starCount={1}
                      count={ratings.oneStar}
                      total={totalRatings}
                    />
                  </div>
                </div>
                <div className="review-users mt-4">
                  <FeedbackItem
                    name="Dianne Russell"
                    time="Just now"
                    rating={5}
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                  <FeedbackItem
                    name="Courtney Henry"
                    time="2 mins ago"
                    rating={5}
                    comment="In eu tortor viverra, tempor odio ac, pretium diam."
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
