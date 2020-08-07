import React from 'react';
import StockCard from '../components/StockCard';

const MostLosers = props => {

  const mostLosersArr = [
    {
      ticker: 'CNDT',
      changes: '1.583',
      price: '3.843',
      changesPercentage: '(+70.04%)',
      companyName: 'Conduent Incorporated'
    },
    {
      ticker: 'CNDT',
      changes: '1.583',
      price: '3.843',
      changesPercentage: '(+70.04%)',
      companyName: 'Conduent Incorporated'
    }
  ];

  return (
    <div>
      <div className="featureTitle"> 
        <h2> Most Losers </h2>
        <span className="downBlock"> </span>
      </div>
      { mostLosersArr.map(p => <StockCard featured={true} stockInfo={p} />) }
    </div>
  );
}

export default MostLosers;
