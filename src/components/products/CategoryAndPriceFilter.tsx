import React, { useState } from 'react';

interface CategoryAndPriceFilterProps {
  onFilterChange: (categoryFilter: string[], priceRange: { min: number, max: number }) => void;
}

const CategoryAndPriceFilter: React.FC<CategoryAndPriceFilterProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number, max: number }>({ min: 0, max: 0 });

  const handleCategoryChange = (category: string) => {
    const newSelectedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((item) => item !== category)
      : [...selectedCategory, category];
    setSelectedCategory(newSelectedCategory);
    onFilterChange(newSelectedCategory, priceRange);
  };

  const handlePriceChange = (range: { min: number, max: number }) => {
    setPriceRange(range);
    onFilterChange(selectedCategory, range);
  };

  const radioPrice = ["All price", "Under 10000$", "10000$ - 20000$", "20000$ - 30000$", "30000$ - 40000$", "40000$ - 50000$", "Above 50000$", "Custom Price Range"];
  const category = ["Iphone", "IMac", "Macbook"];

  // UI for selecting categories and price range, call handleCategoryChange and handlePriceChange accordingly
  return (
    <div className='filter flex flex-col gap-5 fixed'>
      <div className="category">
        <h3 className='uppercase text-gray-400 mb-2 font-medium'>Category</h3>
        <ul className='checkbox-container'>
          {category.map((categoryItem, index) => (
                  <li key={index} onClick={() => handleCategoryChange(categoryItem)}>
                    <input type="checkbox" name="category" id={categoryItem} value={categoryItem} />
                    <label htmlFor={categoryItem}>{categoryItem}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="price">
              <h3 className='uppercase w-full text-gray-400 font-medium'>Price Range</h3>
              <input className="w-full" type="range" name="price" id="price" min="0" max="100" value={priceRange} onChange={(e) => handlePriceChange} />
        <div className='flex flex-wrap'>
          <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Min Price</button>
          <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Max Price</button>
        </div>
        <div className="radio mt-3">
          <div className='uppercase text-gray-400 mb-2 font-medium'>PRICE FILTERS</div>
          {radioPrice.map((price, index) => (
            <div key={index}>
              <input type="radio" name="price" id={price} value={price} />
              <label htmlFor={price}>{price}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryAndPriceFilter;

