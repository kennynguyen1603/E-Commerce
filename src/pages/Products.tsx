import "@/styles/productlisting.css";
const API_URL = 'https://dummyjson.com/products';

export default function ProductListing() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className='productListing flex p-10 bg-slate-100'>
      <div className="sidebar flex">
        <ProductsCategoryAndPriceFilter />
      </div>
      <div className="main-content flex flex-col">
        <div className="search flex px">
          <ProductsSearchBar />
          <ProductsSortBy />
          <ProductsResultsLoaded />
        </div>
        <div className="productList">
          <ProductsList products={products}/> 
        </div>
        <ProductsPaginationBar />    
      </div>
    </div>
  )
}
