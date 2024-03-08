import React, { useState } from 'react';

interface CategoryAndPriceFilterProps {
  onFilterChange: any;
}

const CategoryAndPriceFilter: React.FC<CategoryAndPriceFilterProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prevSelectedCategory) => {
      const newSelectedCategory = prevSelectedCategory.includes(category)
        ? prevSelectedCategory.filter((item) => item !== category)
        : [...prevSelectedCategory, category];

      onFilterChange((prevFilter: any) => ({
        ...prevFilter,
        category: newSelectedCategory,
      }));

      return newSelectedCategory;
    });
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

  const handleAscOrDesc = () => {
  };

  useEffect(() => {
    onFilterChange({
      category: selectedCategory,
      priceRange: priceRange,
    });
  }, [selectedCategory, priceRange, onFilterChange]);

  const radioPrice = ["All price", "Under 10000$", "10000$ - 20000$", "20000$ - 30000$", "30000$ - 40000$", "40000$ - 50000$", "Above 50000$"];
  const category = ["Iphone", "IMac", "Macbook"];

  return (
    <div className='filter flex flex-col gap-5 fixed'>
      <div className="category">
        <h3 className='uppercase text-gray-400 mb-2 font-medium'>Category</h3>
        <ul className='checkbox-container'>
          {category.map((categoryItem, index) => (
            <li key={index} onClick={() => handleCategoryChange(categoryItem)}>
              <input type="checkbox" name="category" id={categoryItem} value={categoryItem} checked={selectedCategory.includes(categoryItem)} onChange={() => handleCategoryChange(categoryItem)} />
              <label htmlFor={categoryItem}>{categoryItem}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className="price">
        <h3 className='uppercase w-full text-gray-400 font-medium'>Price Range</h3>
        <input className="w-full" type="range" name="price" id="price" min="0" max="100000" value={priceRange.max.toString()} onChange={handlePriceChange} />
        <div className='flex flex-wrap'>
          <button type="button" onClick={handleAscOrDesc} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Min Price</button>
          <button type="button" onClick={handleAscOrDesc} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Max Price</button>
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
    </div>
  );
};

export default CategoryAndPriceFilter;
