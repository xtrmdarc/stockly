import React from 'react';
import StocksFilter from './StocksFilter';
import { connect } from 'react-redux';
import StocksApi from '../api/stocksApi';
import { filterStocks, toggleDisplayMain } from '../actions';
import logo from '../assets/img/Logo.svg';
import { Link } from 'react-router-dom';

const Header = props => {
  const { toggleDisplayMain }  = props;
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
    <header>
      <Link to="/"> 
        <img className="logo" src={logo} alt="stockly logo"/>
      </Link>
      <StocksFilter handleFilterChange={handleFilterStocks}/>
    </header>
  );
}

const mapDispatchToProps = dispatch => ({
  filterStocksByQuery: stocks => dispatch(filterStocks(stocks)),
  toggleDisplayMain: status => dispatch(toggleDisplayMain(status)),
});

export default connect(null, mapDispatchToProps)(Header);
