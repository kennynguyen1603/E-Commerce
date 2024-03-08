import { useState, useEffect } from 'react';
import ProductProvider from "@/context/ProductContext";
import "@/styles/products.css";
const API_URL = 'https://apimainproject.vercel.app/product/getall';
import { filter as _filter, isEmpty, orderBy } from 'lodash'
// import { Product } from '@/types/types'

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
  const [products, setProducts] = useState<Product[] | []>([]);
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


  function productFilter(): Product[] {
    const {
      category,
      priceRange,
      search,
      sortBy,
      order
    } = filter
    // console.log('filter:', filter);


    const dataFilter: Product[] = _filter(products, (i: Product) => {
      const coCate = isEmpty(category) || category.includes(i.category)
      const coPri = i.price >= priceRange.min && i.price <= priceRange.max
      const coSearch = !search || search.includes(i.name)
      // console.log('co:', coCate);
      // console.log('coPri:', coPri);
      // console.log('coSearch:', coSearch);


      return coCate && coPri && coSearch
    })
    // console.log("🚀 ~ constdataFilter:Product[]=_filter ~ dataFilter:", dataFilter)

    return sortBy ? orderBy(dataFilter, [sortBy, order]) : dataFilter

  }

  // useEffect(() => {
  //   console.log('Filter changed:', filter);
  // }
  //   , [filter]);



  if (loading) return <div>Loading... <button onClick={() => setFilter(filter)}>Retry</button></div>;
  if (error) return <div>Error: {(error as Error).message} <button onClick={() => setFilter(filter)}>Retry</button></div>;

  return (
    <div className='productListing flex px-14 py-8 bg-slate-100'>
      <div className="sidebar flex">
        <ProductsCategoryAndPriceFilter filter={filter} onFilterChange={setFilter} />
      </div>
      <div className="list flex flex-col justify-center pr-4">
        <div className="search flex flex-wrap justify-between">
          <div className='flex w-3/4 align-center text-center'>
            {/* <ProductsSearchBar onSearch={setFilter} /> */}
            {/* <ProductsSortBy onSortBy={setFilter} /> */}
          </div>
          <div className='w-1/4'>
            <p>{products.length} Results Loaded of {totalProducts}</p>
            {/* <ProductsResultsLoaded products={products} totalProducts={totalProducts}/> */}
          </div>
        </div>
        <div className="productList">
          <ProductsList products={productFilter()} />
        </div>
        <ProductsPaginationBar />
      </div>
    </div>
  );
}

// return (
//   <ProductProvider value={{ filter, products, setProducts, setFilter }}>
//     <div className='productListing flex px-14 py-8 bg-slate-100'>
//       <div className="sidebar flex">
//         <ProductsCategoryAndPriceFilter onFilterChange={setFilter} />
//       </div>
//       <div className="list flex flex-col justify-center pr-4">
//         <div className="search flex flex-wrap justify-between">
//           <div className='flex w-3/4 align-center text-center'>
//             <ProductsSearchBar onSearch={setFilter} />
//             <ProductsSortBy onSortBy={setFilter} />
//           </div>
//           <div className='w-1/4'>
//             <p>{products.length} Results Loaded of {totalProducts}</p>
//             {/* <ProductsResultsLoaded products={products} totalProducts={totalProducts}/> */}
//           </div>
//         </div>
//         <div className="productList">
//           <ProductsList products={productFilter()} />
//         </div>
//         <ProductsPaginationBar />
//       </div>
//     </div>
//   </ProductProvider>
// );