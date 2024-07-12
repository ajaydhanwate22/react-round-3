import React, { useState } from 'react';

const Slider = ({ min, max, step, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full"
      />
      <div className="mt-2 text-gray-700">{value}</div>
    </div>
  );
};

export default Slider;
