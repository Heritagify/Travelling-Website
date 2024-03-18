import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div>
      <label>Price Range: ${priceRange.min} - ${priceRange.max}</label>
      <InputRange
        maxValue={1000} // Set your maximum price range here
        minValue={0}
        value={priceRange}
        onChange={handlePriceChange}
      />
    </div>
  );
};

export default PriceRangeSlider;
