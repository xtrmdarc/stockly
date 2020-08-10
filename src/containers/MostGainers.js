import React from 'react';
import StockCard from '../components/StockCard';
import StocksApi from '../api/stocksApi';

class MostGainers extends React.Component {
  constructor(props) {
    super(props);
    this.mostGainersArr = [];
  }

  componentDidMount() {
    StocksApi.getMostGainersList().then(data => {
      this.mostGainersArr = data.slice(0, 3);
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div>
        <div className="featureTitle">
          <h2> Most Gainers </h2>
          <span className="upBlock"> </span>
        </div>
        { this.mostGainersArr.map(p => <StockCard featured stockInfo={p} key={p.ticker} />) }
      </div>
    );
  }
}

export default MostGainers;
