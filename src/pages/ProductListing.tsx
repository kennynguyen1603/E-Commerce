import React, {useState, useEffect} from 'react'
import CategoryAndPriceFilter from '@/components/productlisting/CategoryAndPriceFilter';
import ResultsLoaded from '@/components/productlisting/ResultsLoaded';
import SearchBar from '@/components/productlisting/SearchBar';
import SortBy from '@/components/productlisting/SortBy';
import PaginationBar from '@/components/productlisting/PaginationBar';
import ProductList from '@/components/productlisting/ProductList';
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
      <div className="sidebar flex-1">
        <CategoryAndPriceFilter />
      </div>
      <div className="main-content flex-3">
        <div className="search flex">
          <SearchBar />
          <SortBy />
          <ResultsLoaded />
        </div>
        <div className="productList ">
          <ProductList products={products}/> 
        </div>
        <PaginationBar />    
      </div>
    </div>
  )
}
