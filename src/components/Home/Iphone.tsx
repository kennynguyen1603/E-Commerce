import { responsive } from '@/data/dataIphone';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductsIphone from '../products/ProductsIphone';
export default function Iphone() {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  function getData() {
    axios.get(`${import.meta.env.VITE_API_PRODUCT_BASE}getall`)
      .then((res: any) => {
        if (res.data) {
          const iphones = res.data.filter((p: Product) => p.category === 'IPhone')
          setProducts(iphones);
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
    <div className='Iphone' >
      <div className="text">
        <h1>ex.iphones.</h1>
        <p>From ₹25,000 to ₹10,000,0. Every Model Ever Built</p>
        <div className="learn-more">
          <button>Buy</button>
          <p>Learn more</p>
        </div>
      </div>
      <div className="img-iphone">
        <img src="https://s3-alpha-sig.figma.com/img/6c27/133b/8d89f36564dcafa8c8b3c0a44b4d00ca?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=arloZatXl~uvJ8V0v0h5P~ZxUM7V1RIHtuIu~q3u25M2uVR1qgDkSDAQngkHNbi1oQPQlSTfDGmGiyaSEM3IA80FGUwkRH~afuX2hv1orVsJDzg76W-Ranj21lfVDqkOXCwQt46ORBxjozuZ5YI4bm6ukHrgjx-56waNnBeMpm3P5DOBQ0cEw6xhzgv7YfVSI6uCzNNiMguJ~R5~mkwSLWXCNAu~fMI-7wlu5M1Fp7qdv2L~N7EeuKLmZuIG9BdI1A6ZIFp1eMr1Ne3N3WqZ7JdaY~yWN4M4Kltv4OBMc0IwR0gyG5K0PiPf1qkbCBe3ACs6gAgHjBE77bPZXOdmOA__" alt="" />
      </div>
      <div className="side">
        <h1>Newest ex.iphones. Collection</h1>
        <div className="iPhone-spec">
          <Carousel responsive={responsive}>
            {products.map((item: Product) => (
              <ProductsIphone
                key={item._id}
                name={item?.name}
                url={item?.image}
                price={item?.price}
                status={true} />
            ))}
          </Carousel>
        </div>
      </div>
    </div >

  )
}
