import React from 'react';
import StockCard from './StockCard';
import StocksApi from '../api/stocksApi';

class MostLosers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostLosersArr: [],
    };
  }

  componentDidMount() {
    StocksApi.getMostLosersList().then(data => {
      const newState = data['Error Message'] ? [] : data;
      
      this.setState({
        mostLosersArr: newState.slice(0, 3),
      });
    });
  }

  render() {
    const { mostLosersArr } = this.state;
    return (
      <div>
        <div className="featureTitle">
          <h2> Most Losers </h2>
          <span className="downBlock"> </span>
        </div>
        { mostLosersArr.map(p => <StockCard featured stockInfo={p} key={p.ticker} />) }
      </div>
    );
  }
}

export default MostLosers;
