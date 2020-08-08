import React from 'react';
import StockCard from '../components/StockCard';
import StocksApi from '../api/stocksApi';

class StockCardList extends React.Component  {
  constructor(props) {
    super(props);
    this.stockList = [];
  }
  
  componentDidMount() {
    StocksApi.getLandingStockList().then( data => {
      this.stockList = data;
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="stocksList">
        { this.stockList.map(p => <StockCard stockInfo={p}/>)}
      </div>
    );
  }
  
}

export default StockCardList;