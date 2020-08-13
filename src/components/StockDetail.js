import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setActiveStock } from '../actions';
import StocksApi from '../api/stocksApi';

class StockDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeStock: {} };
  }

  componentDidMount() {
    /* eslint-disable react/destructuring-assignment */
    const { symbol } = this.props.match.params;
    /* eslint-enable react/destructuring-assignment */
    StocksApi.quoteBySymbol(symbol).then(data => {
      this.setState({
        activeStock: data
      });
    });
  }

  render() {
    const { activeStock } = this.state;
    const up = activeStock.change > 0.00;
    const formatterCur = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const formatterNum = new Intl.NumberFormat('en-US', {
      currency: 'USD',
    });

    return (
      <div className="stockDetail">
        <div className="topSection">
          <div className="pageName">
            <h2>
              Stock detail
              {' '}
              <br />
              {' '}
              page
            </h2>
          </div>
          <div>
            <div className="descItem">
              <h4>Exchange</h4>
              <span>{activeStock.exchange}</span>
            </div>
            <div className="descItem">
              <h4>MARKET CAPITALIZATION</h4>
              <span>
                {formatterCur.format(activeStock.marketCap)}
                {' '}
                USD
              </span>
            </div>
            <div className="descItem">
              <h4>VOLUME</h4>
              <span>{formatterNum.format(activeStock.volume)}</span>
            </div>
            <div className="descItem">
              <h4>OPEN</h4>
              <span>
                {formatterCur.format(activeStock.open)}
                {' '}
                USD
              </span>
            </div>
          </div>
        </div>
        <div className="bottomSection">
          <div className="stockDesc">
            <h1 className="stockSymbol">
              {' '}
              {activeStock.symbol}
              {' '}
            </h1>
            <span className="companyName">
              {' '}
              {activeStock.name}
              {' '}
            </span>
          </div>
          <div className="rightSection">
            <span className="stockPrice">
              {activeStock.price}
              {' '}
              <span className="currency"> USD</span>
            </span>
            <span className={`changePrice ${up ? 'highColor' : 'downColor'}`}>
              {' '}
              <span className="change">
                {activeStock.change}
                {' '}
                USD
                {' '}
              </span>
              <span className="percentageChange">
                (
                {activeStock.changesPercentage}
                %)
              </span>
              {' '}

            </span>
          </div>
        </div>
      </div>
    );
  }
}

StockDetail.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  match: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withRouter(StockDetail);
