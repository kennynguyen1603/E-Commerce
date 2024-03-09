import { union, filter as _filter } from 'lodash';
import React, { ChangeEvent, MouseEvent, useState } from 'react';

interface CategoryAndPriceFilterProps {
  onFilterChange: any;
  filter: any
}

const CategoryAndPriceFilter: React.FC<CategoryAndPriceFilterProps> = ({ filter, onFilterChange }) => {
  // const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });

  const handleCategoryChange = (category: ChangeEvent<HTMLInputElement>) => {
    if (category.target.checked) {
      onFilterChange((pre: any) => {
        return ({
          ...pre,
          category: union([...pre.category, category.target.value])
        });
      })
    } else {
      onFilterChange((pre: any) => {
        return ({
          ...pre,
          category: _filter(pre.category, (i: string) => i !== category.target.value)
        });
      })
    }

  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value);
    setPriceRange((prevPriceRange) => ({
      ...prevPriceRange,
      max: newMaxPrice,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // const handleAscOrDesc = () => {
  // };

  const radioPrice = ["All price", "Under 10000$", "10000$ - 20000$", "20000$ - 30000$", "30000$ - 40000$", "40000$ - 50000$", "Above 50000$"];
  const category = ["IPhone", "IMac", "MacBook", "Apple Watch"];

  return (
    <div className='filter flex flex-col gap-5 w-full'>
      <div className="category">
        <h3 className='uppercase text-gray-400 mb-2 font-medium'>Category</h3>
        <ul className='checkbox-container'>
          {category.map((categoryItem, index) => (
            <li key={index}>
              <input type="checkbox" onChange={handleCategoryChange} name="category" id={categoryItem} value={categoryItem} checked={filter.category.includes(categoryItem)} />
              <label htmlFor={categoryItem}>{categoryItem}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="priceRange">
        <h3 className='uppercase text-gray-400 font-medium'>Price Range</h3>
        <input className="w-10/12" type="range" name="price" id="price" min="0" max="50000" value={priceRange.max.toString()} onChange={handlePriceChange} />
        {/* <div className='flex flex-wrap'>
          <button type="button" onClick={handleAscOrDesc} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Min Price</button>
          <button type="button" onClick={handleAscOrDesc} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Max Price</button>
        </div> */}
      </div>
      <div className="radio mt-3">
        <div className='uppercase text-gray-400 mb-2 font-medium'>PRICE FILTERS</div>
        {radioPrice.map((price, index) => (
          <div key={index}>
            <input type="radio" name="price" id={price + index} value={price} onChange={handleRadioChange} />
            <label htmlFor={price + index}>{price}</label>
          </div>
        ))} 
      </div>   
    </div>
  );
};

export default CategoryAndPriceFilter;
