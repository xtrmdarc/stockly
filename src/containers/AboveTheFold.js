import React from 'react';
import MostGainers from './MostGainers';
import logo from '../assets/img/Logo.svg';
import StocksFilter from '../components/StocksFilter';
import MostLosers from './MostLosers';

const AboveTheFold = () => {
  return (
    <div className="aboveTheFold">
      <header>
        <img className="logo" src={logo} alt="stockly logo"/>
        <StocksFilter />
      </header>

      <div className="featuredMostLists">
        <MostGainers />
        <MostLosers />
      </div>
    </div>
  );
};

export default AboveTheFold;