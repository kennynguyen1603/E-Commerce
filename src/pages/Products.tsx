import { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import "@/styles/products.less";
import axios from "axios";
import { filter as _filter, isEmpty, orderBy } from "lodash";
import { Helmet } from "react-helmet";

type SortByType = "price" | "rating" | "popular" | "newest";

interface Filter {
  category: string[];
  priceRange: { min: number; max: number };
  search: string;
  sortBy: SortByType;
  order: "asc" | "desc";
}

export default function Products() {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [filterProducts, setFilterProducts] = useState(0);

  const [filter, setFilter] = useState<Filter>({
    category: [],
    priceRange: { min: 0, max: 50000 },
    search: "",
    sortBy: "popular",
    order: "asc",
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_PRODUCT_BASE}getall`)
      .then((res: any) => {
        setProducts(res.data);
        setTotalProducts(res.data.length);
        setLoading(false);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  function productFilter(): Product[] {
    const { category, priceRange, search, sortBy, order } = filter;

    const dataFilter: Product[] = _filter(products, (i: Product) => {
      const coCate = isEmpty(category) || category.includes(i.category);
      const coPri = i.price >= priceRange.min && i.price <= priceRange.max;
      const coSearch =
        !search || i.name.toLowerCase().includes(search.toLowerCase());
      return coCate && coPri && coSearch;
    });
    return sortBy ? orderBy(dataFilter, [sortBy, order]) : dataFilter;
  }

  // useEffect(() => {
  //   setFilterProducts(productFilter().length);
  //   console.log(productFilter());
  // }, [filter]);

  //tối ưu hóa hiệu suất và tránh việc tìm kiếm không cần thiết
  const handleSearchChange = useCallback(
    _.debounce((newSearchValue) => {
      setFilter((prevFilter) => ({
        ...prevFilter,
        search: newSearchValue,
      }));
    }, 300),
    []
  );

  const debouncedSearchChange = _.debounce(handleSearchChange, 300);

  if (loading)
    return (
      <div>
        Loading... <button onClick={() => setFilter(filter)}>Retry</button>
      </div>
    );
  if (error)
    return (
      <div>
        Error: {(error as Error).message}{" "}
        <button onClick={() => setFilter(filter)}>Retry</button>
      </div>
    );

  return (
    <div className="productListing flex px-14 py-8 bg-slate-100">
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="sidebar flex">
        <ProductsCategoryAndPriceFilter
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>
      <div className="list flex flex-col justify-center pr-4">
        <div className="search flex flex-wrap justify-between items-center ml-2 mb-4">
          <div className="flex w-3/4 items-center text-center">
            <ProductsSearchBar onSearch={debouncedSearchChange} />
            <ProductsSortBy onSortBy={setFilter} />
          </div>
          <div className="w-1/4">
            <p>
              {filter.category.length === 0
                ? `${products.length}`
                : `${filterProducts}`}{" "}
              Results Loaded of {totalProducts}
            </p>
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
