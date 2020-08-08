import React from 'react';
import StocksApi from '../api/stocksApi';

const StocksFilter = () => {
  const handleChange = e => {
    StocksApi.searchByQuery(e.target.value).then( data => console.log(data));
  }

  return (
    <div className="stocksSearch">
      <input className="textField" type="text" placeholder="Search for stocks" onChange={handleChange} />
    </div>
  );
};

export default StocksFilter;