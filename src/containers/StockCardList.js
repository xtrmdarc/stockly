import React from 'react';
import StockCard from '../components/StockCard';

const StockCardList = () => {
  const stockList = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 449.73000000,
      changesPercentage: -1.11000000,
      change: -5.06000000,
      dayLow: 448.14000000,
      dayHigh: 453.94000000,
    },
    {
      symbol: 'FB',
      name: 'Facebook Inc.',
      price: 449.73000000,
      changesPercentage: -1.11000000,
      change: -5.06000000,
      dayLow: 448.14000000,
      dayHigh: 453.94000000,
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 449.73000000,
      changesPercentage: -1.11000000,
      change: -5.06000000,
      dayLow: 448.14000000,
      dayHigh: 453.94000000,
    },
  ];

  return (
    <div className="stocksList">
      {stockList.map(p => <StockCard stockInfo={p}/> )}
    </div>
  );
}

export default StockCardList;