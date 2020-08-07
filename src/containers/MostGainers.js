import React from 'react';
import StockCard from '../components/StockCard';

const MostGainers = props => {

  const mostGainersArr = [
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
      { mostGainersArr.map(p => <StockCard featured={true} stockInfo={p} />) }
    </div>
  );
}

export default MostGainers;