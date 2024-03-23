import { responsive } from '@/data/dataAppleWatch';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductsApplewatch from "../products/ProductsApplewatch";
export default function AppleWatch() {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function getData() {
    axios.get(`${import.meta.env.VITE_API_PRODUCT_BASE}getall`)
      .then((res: any) => {
        if (res.data) {
          const AppleWatch = res.data.filter((p: Product) => p.category === 'Apple Watch')
          setProducts(AppleWatch);
        }

      })
      .catch(setError)
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, [])

  if (loading) return <div>Loading... </div>;
  if (error) return <div>Error!</div>;
  return (
    <>
      <div className="container flex flex-wrap justify-between gap-x-10 items-center bg-gray-800 m-auto rounded-lg py-4 px-12">
        <img
          className="max-w-32"
          src="https://cdn.hoanghamobile.com/i/preview/Uploads/2021/10/08/apple-watch-s7-3.png"
          alt=""
        />
        <h1 className='text-white text-[4.5rem]'>Apple Watch</h1>
        <img
          className="max-w-32"
          src="https://www.att.com/scmsassets/global/devices/other/apple/apple-watch-ultra-2-49mm/defaultimage/titanium-blue-alpine-loop-medium-hero-zoom.png"
          alt=""
        />
      </div>
      <div className="AppleWatch">

        <div className="side">
          <div className="AppleWatch-spec">
            <Carousel responsive={responsive}>
              {products.map((item: Product) => (
                <ProductsApplewatch
                  key={item._id}
                  name={item?.name}
                  url={item?.image}
                  price={item?.price}
                  status={true} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
