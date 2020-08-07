import React from 'react';
import MostGainers from './MostGainers';
import logo from '../assets/img/Logo.svg';
import StocksFilter from '../components/StocksFilter';

const AboveTheFold = () => {
  return (
    <div className="aboveTheFold">
      <header>
        <img className="logo" src={logo} alt="stockly logo"/>
        <StocksFilter />
      </header>
      
      <MostGainers />
    </div>
  );
};

export default AboveTheFold;