import React from 'react';
import StockCard from './StockCard';
import StocksApi from '../api/stocksApi';

class MostGainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostGainersArr: [],
    };
  }

  componentDidMount() {
    StocksApi.getMostGainersList().then(data => {
      const newState = data['Error Message'] ? [] : data;

      this.setState({
        mostGainersArr: newState.slice(0, 3),
      });
    });
  }

  render() {
    const { mostGainersArr } = this.state;
    return (
      <div>
        <div className="featureTitle">
          <h2> Most Gainers </h2>
          <span className="upBlock"> </span>
        </div>
        { mostGainersArr.map(p => <StockCard featured stockInfo={p} key={p.ticker} />) }
      </div>
    );
  }
}

export default MostGainers;
