import { union, filter as _filter, max } from 'lodash';
import React, { ChangeEvent, MouseEvent, useState } from 'react';

interface CategoryAndPriceFilterProps {
  onFilterChange: any;
  filter: any
}

const CategoryAndPriceFilter: React.FC<CategoryAndPriceFilterProps> = ({ filter, onFilterChange }) => {
  // const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 50000 });

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
    if(newMaxPrice) {
      onFilterChange((prev : any) => {
        return({
          ...prev,
          priceRange: {min: 0, max: newMaxPrice}
        })
      })
      setPriceRange((prevPriceRange) => ({
        ...prevPriceRange,
        max: newMaxPrice,
    }));

    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const selectedIndex = parseInt(e.target.value, 10);
  console.log(selectedIndex);
  const selectedPriceRange = radioPrice[selectedIndex];
  
  if (selectedPriceRange) {
    onFilterChange((prev: any) => {
      return ({
        ...prev,
        priceRange: {min: selectedPriceRange.min, max: selectedPriceRange.max}
      });
    });
    setPriceRange({ min: selectedPriceRange.min, max: selectedPriceRange.max });
  }
};

  // useEffect(() => {
  //   console.log(handleRadioChange);
  // }, [priceRange]);

  const radioPrice = [
    {nameValue: "All price",
    min: 0,
    max: 50000
    },
    {nameValue: "Under 10000$",  
    min: 0,
    max: 10000
    },
    {nameValue: "10000$ - 20000$",
    min: 10000,
    max: 20000
    },
    {nameValue: "20000$ - 30000$",
    min: 20000,
    max: 30000
    },
    {nameValue: "30000$ - 40000$",
    min: 30000,
    max: 40000
    },
    {nameValue: "40000$ - 50000$",
    min: 40000,
    max: 50000
    },
    {nameValue: "Above 50000$",
    min: 50000,
    max: 100000
    },
  ];
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
      <div className="priceRange w-10/12">
        <h3 className='uppercase text-gray-400 font-medium'>Price Range</h3>
        <input className="w-full" type="range" name="price" id="price" min="0" max="50000" value={priceRange.max.toString()} onChange={handlePriceChange} />
        {/* <div className='flex flex-wrap'>
          <button type="button" onClick={handleAscOrDesc} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Min Price</button>
          <button type="button" onClick={handleAscOrDesc} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Max Price</button>
        </div> */}
        <div className='text-sm flex justify-between'>
          <span>0$</span>
          <span>{priceRange.max}$</span>
          <span>50000$</span>
        </div>
      </div>
      <div className="radio">
        <div className='uppercase text-gray-400 mb-2 font-medium'>PRICE FILTERS</div>
        {radioPrice.map((price, index) => (
          <div key={index}>
            <input type="radio" name="price" id={price.nameValue + index} value={index} onChange={handleRadioChange} />
            <label htmlFor={price.nameValue + index}>{price.nameValue}</label>
          </div>
        ))} 
      </div>   
    </div>
  );
};

export default CategoryAndPriceFilter;
