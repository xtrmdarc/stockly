import React from 'react';
import MostGainers from './MostGainers';
import logo from '../assets/img/Logo.svg';
import StocksFilter from '../components/StocksFilter';
import MostLosers from './MostLosers';
import { connect } from 'react-redux';
import { filterStocks, toggleDisplayMain } from '../actions';
import StocksApi from '../api/stocksApi';

const AboveTheFold = props => {
  const { displayMainContent, toggleDisplayMain }  = props;
  const handleFilterStocks = query => {
    const { filterStocksByQuery } = props;

    if(query.trim().length > 0 ) {
      toggleDisplayMain(false);
      StocksApi.searchByQuery(query).then(data => filterStocksByQuery(data));
    } else {
      toggleDisplayMain(true);
      StocksApi.getLandingStockList().then(data => filterStocksByQuery(data));
    }
  };

  return (
    <div className="aboveTheFold">
      <header>
        <img className="logo" src={logo} alt="stockly logo"/>
        <StocksFilter handleFilterChange={handleFilterStocks}/>
      </header>
      <div className="mainContent" style={{display: displayMainContent ? 'block' : 'none'}}>
        <div className="titleHeader">
          <span className="announcement">Currently supporting NASDAQ</span>
          <h1 className="mainTitle">Follow the right stock.</h1>
        </div>
        <div className="featuredMostLists">
          <MostGainers />
          <MostLosers />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  displayMainContent: state.displayMainContent,
});

const mapDispatchToProps = dispatch => ({
  filterStocksByQuery: stocks => dispatch(filterStocks(stocks)),
  toggleDisplayMain: status => dispatch(toggleDisplayMain(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboveTheFold);
