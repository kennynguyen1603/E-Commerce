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
        <img src="https://s3-alpha-sig.figma.com/img/6c27/133b/8d89f36564dcafa8c8b3c0a44b4d00ca?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JuEcvJhiosctlsESgTdzNTRRo50iEjt360zcloVg~942oyAUEtiuw~8h4AsUa3YHOVpTL76gesl8hLDROEnFM0w6f45UqGy2MwxzBHHW8dq5BKdyCGzLlyO6aS3zJ-8WKG-S8HHQ2igJQENo-IS1VI4Gwl3AcRCQMKVGYygb9ts2tHThUKnZCDdLtjhE0Cf5u0ElYNZ~uNkDiBPQIDV0JrP6lmOWiH5hKFZ0t71iNSIejnlNiOjFAAquuEoT3~NtE9c0XG3FP92IdTnfc38CUVf4pXuHmga0xMm0TFcUpE5cusCe0SwsqauTtdaWHVkr03rLa40BFS-Z~vC~Ae5q4w__" alt="" />
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
