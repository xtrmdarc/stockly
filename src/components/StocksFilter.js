import React from 'react';

const StocksFilter = props => {
  const handleChange = e => {
    const { handleFilterChange } = props;
    handleFilterChange(e.target.value);
  }

  return (
    <div className="stocksSearch">
      <input className="textField" type="text" placeholder="Search for stocks" onChange={handleChange} />
    </div>
  );
};

export default StocksFilter;