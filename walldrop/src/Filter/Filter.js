import React from 'react';

const Filter = ({ onFilterChange }) => {
  const filterChange = (event) => {
    const selectedValue = event.target.value;
    onFilterChange(selectedValue); // Call the callback function with the selected value
  };

  return (
    <div className="filter-area">
      Filter:
      <select name="isAvailable" onChange={filterChange}>
        <option value="all">All</option>
        <option value="iPhone">iPhone</option>
        <option value="Desktop">Desktop</option>
      </select>
    </div>
  );
};

export default Filter;
