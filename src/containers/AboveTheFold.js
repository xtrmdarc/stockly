import React from 'react';
import MostGainers from './MostGainers';
import logo from '../assets/img/Logo.svg';
import StocksFilter from '../components/StocksFilter';
import MostLosers from './MostLosers';
import { connect } from 'react-redux';
import { filterStocks } from '../actions';
import StocksApi from '../api/stocksApi';

const AboveTheFold = props => {
  const handleFilterStocks = query => {
    const { filterStocksByQuery } = props;
    StocksApi.searchByQuery(query).then(data => filterStocksByQuery(data));
  };

  return (
    <div className="aboveTheFold">
      <header>
        <img className="logo" src={logo} alt="stockly logo"/>
        <StocksFilter handleFilterChange={handleFilterStocks}/>
      </header>
      <div className="titleHeader">
        <span className="announcement">Currently supporting NASDAQ</span>
        <h1 className="mainTitle">Follow the right stock.</h1>
      </div>
      <div className="featuredMostLists">
        <MostGainers />
        <MostLosers />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  filterStocksByQuery: stocks => dispatch(filterStocks(stocks))
});

export default connect(null,mapDispatchToProps)(AboveTheFold);