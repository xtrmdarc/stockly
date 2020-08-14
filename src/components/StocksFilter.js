import React from 'react';
import PropTypes from 'prop-types';

const StocksFilter = props => {
  const handleChange = e => {
    const { handleFilterChange } = props;
    handleFilterChange(e.target.value);
  };

  return (
    <div className="stocksSearch">
      <input className="textField" type="text" placeholder="Search for stocks" onChange={handleChange} />
    </div>
  );
};

StocksFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default StocksFilter;
