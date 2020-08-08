import React from 'react';
import StockCard from '../components/StockCard';
import StocksApi from '../api/stocksApi';

class MostLosers extends React.Component {
  constructor(props) {
    super(props);
    this.mostLosersArr = [];
  }

  componentDidMount() {
    StocksApi.getMostLosersList().then( data => {
      this.mostLosersArr = data.slice(0, 3);
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div>
        <div className="featureTitle"> 
          <h2> Most Losers </h2>
          <span className="downBlock"> </span>
        </div>
        { this.mostLosersArr.map(p => <StockCard featured={true} stockInfo={p} />) }
      </div>
    );
  }

  
}

export default MostLosers;
