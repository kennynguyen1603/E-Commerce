import { useState, useEffect } from 'react';
import ProductProvider from "@/context/ProductContext";
import "@/styles/products.css";
const API_URL = 'https://apimainproject.vercel.app/product/getall';

// Định nghĩa rõ ràng hơn cho sortBy
type SortByType = 'price' | 'rating' | 'name';

interface Filter {
  category: string[],
  priceRange: { min: number, max: number },
  search: string,
  sortBy: SortByType,
  order: 'asc' | 'desc'
}

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);

  const [filter, setFilter] = useState<Filter>({
    category: [],
    priceRange: { min: 0, max: 100000 },
    search: '',
    sortBy: 'price',
    order: 'asc'
  });

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setTotalProducts(data.length);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []); 
  
  useEffect(() => {
    console.log('Filter changed:', filter);
  }
  , [filter]);

  if (loading) return <div>Loading... <button onClick={() => setFilter(filter)}>Retry</button></div>;
  if (error) return <div>Error: {(error as Error).message} <button onClick={() => setFilter(filter)}>Retry</button></div>;

  return (
    <ProductProvider value={{filter, products, setProducts, setFilter}}>
      <div className='productListing flex px-14 py-8 bg-slate-100'>
        <div className="sidebar flex">
          <ProductsCategoryAndPriceFilter onFilterChange={setFilter}/>
        </div>
        <div className="list flex flex-col justify-center pr-4">
          <div className="search flex flex-wrap justify-between">
            <div className='flex w-3/4 align-center text-center'>
              <ProductsSearchBar onSearch={setFilter}/>
              <ProductsSortBy onSortBy={setFilter}/>
            </div>
          <div className='w-1/4'>
            <ProductsResultsLoaded products={products} totalProducts={totalProducts}/>
          </div>
          </div>
          <div className="productList">
            <ProductsList products={products}/>
          </div>
          <ProductsPaginationBar />
        </div>
      </div>
    </ProductProvider>
  );
}
