import React, { useState, useEffect } from 'react';
import ProductProvider from "@/context/ProductContext";
import "@/styles/products.css";
const API_URL = 'https://apimainproject.vercel.app/product/getall';

interface Filter {
  category: string[],
  price: number,
  search: string,
  sortBy: any,
  order: string
}


export default function ProductListing() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [filter, setFilter] = useState({
  category: [],
  price: 0,
  search: '',
  sortBy: 'price',
  order: 'asc' // Assuming this was intended to be part of the filter
});

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
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
    <ProductProvider value={{filter, products, setProducts, setFilter}}>
      <div className='productListing flex px-14 py-8 bg-slate-100'>
      <div className="sidebar flex">
        <ProductsCategoryAndPriceFilter categoryandprice={setFilter}/>
      </div>
      <div className="list flex flex-col justify-center pr-4">
        <div className="search flex">
          <ProductsSearchBar search={setFilter}/>
          <ProductsSortBy sortby={setFilter}/>
          <ProductsResultsLoaded products={products}/>
        </div>
        <div className="productList">
          <ProductsList products={products}/> 
        </div>
        <ProductsPaginationBar />    
      </div>
    </div>
    </ProductProvider>
  )
}
