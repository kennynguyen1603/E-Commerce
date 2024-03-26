import { filter as _filter, union } from "lodash";
import React, { ChangeEvent, useRef, useState } from "react";

interface CategoryAndPriceFilterProps {
  onFilterChange: any;
  filter: any;
}

const CategoryAndPriceFilter: React.FC<CategoryAndPriceFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 50000,
  });

  useEffect(() => {
    console.log(priceRange);
  }, [priceRange]);

  const handleCategoryChange = (category: ChangeEvent<HTMLInputElement>) => {
    if (category.target.checked) {
      onFilterChange((pre: any) => {
        return {
          ...pre,
          category: union([...pre.category, category.target.value]),
        };
      });
    } else {
      onFilterChange((pre: any) => {
        return {
          ...pre,
          category: _filter(
            pre.category,
            (i: string) => i !== category.target.value
          ),
        };
      });
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice >= priceRange.min) {
      onFilterChange((prev: any) => {
        return {
          ...prev,
          priceRange: { min: prev.priceRange.min, max: newMaxPrice },
        };
      });
      setPriceRange((prevPriceRange) => ({
        ...prevPriceRange,
        max: newMaxPrice,
      }));
    }
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = parseInt(e.target.value);
    if (newMinPrice <= priceRange.max) {
      onFilterChange((prev: any) => {
        return {
          ...prev,
          priceRange: { min: newMinPrice, max: prev.priceRange.max },
        };
      });
      setPriceRange((prevPriceRange) => ({
        ...prevPriceRange,
        min: newMinPrice,
      }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedIndex = parseInt(e.target.value, 10);
    const selectedPriceRange = radioPrice[selectedIndex];

    if (selectedPriceRange) {
      onFilterChange((prev: any) => {
        return {
          ...prev,
          priceRange: {
            min: selectedPriceRange.min,
            max: selectedPriceRange.max,
          },
        };
      });
      setPriceRange({
        min: selectedPriceRange.min,
        max: selectedPriceRange.max,
      });
    }
  };

  const radioPrice = [
    { nameValue: "All price", min: 0, max: 50000 },
    { nameValue: "Under 10000$", min: 0, max: 10000 },
    { nameValue: "10000$ - 20000$", min: 10000, max: 20000 },
    { nameValue: "20000$ - 30000$", min: 20000, max: 30000 },
    { nameValue: "30000$ - 40000$", min: 30000, max: 40000 },
    { nameValue: "40000$ - 50000$", min: 40000, max: 50000 },
    { nameValue: "Above 50000$", min: 50000, max: 100000 },
  ];

  const radioRef = useRef<HTMLInputElement>(null);

  const category = ["IPhone", "IMac", "MacBook", "Apple Watch"];

  return (
    <div className="filter flex flex-col gap-5 w-full">
      <div className="category">
        <h3 className="uppercase text-gray-400 mb-2 font-medium">Category</h3>
        <ul className="checkbox-container">
          {category.map((categoryItem, index) => (
            <li key={index} className="mb-1">
              <input
                type="checkbox"
                onChange={handleCategoryChange}
                name="category"
                id={categoryItem}
                value={categoryItem}
                checked={filter.category.includes(categoryItem)}
              />
              <label htmlFor={categoryItem} className="ml-2">
                {categoryItem}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="priceRange w-10/12">
        <h3 className="uppercase text-gray-400 font-medium mb-2">
          Price Range
        </h3>
        <div className="slider">
          <div
            className="process absolute"
            style={{
              left: `${(priceRange.min / 50000) * 100}%`,
              right: `${100 - (priceRange.max / 50000) * 100}%`,
            }}
          ></div>
        </div>

        <div className="rangeInput">
          <input
            className="rangeMax"
            type="range"
            name="price"
            id="price"
            min="0"
            max="50000"
            value={priceRange.min.toString()}
            onChange={handleMinPriceChange}
          />

          <input
            className="rangeMin"
            type="range"
            name="price"
            id="price"
            min="0"
            max="50000"
            value={priceRange.max.toString()}
            onChange={handleMaxPriceChange}
          />
        </div>

        <div className="text-sm flex justify-between mt-2">
          <span>0$</span>
          <span>{priceRange.min}$</span>
          <span>{priceRange.max}$</span>
          <span>50000$</span>
        </div>
      </div>
      <div className="radio">
        <div className="uppercase text-gray-400 mb-2 font-medium">
          PRICE FILTERS
        </div>
        {radioPrice.map((price, index) => (
          <div key={index} className="mb-2">
            <input
              type="radio"
              ref={radioRef}
              name="price"
              id={price.nameValue + index}
              value={index}
              onChange={handleRadioChange}
            />
            <label htmlFor={price.nameValue + index} className="ml-2">
              {price.nameValue}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryAndPriceFilter;
