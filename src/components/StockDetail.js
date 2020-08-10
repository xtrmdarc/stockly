import React from 'react';
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { setActiveStock } from '../actions';
import StocksApi from '../api/stocksApi';
import { withRouter } from 'react-router-dom';

class StockDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setActiveStock } = this.props;
    const { symbol } = this.props.match.params;
    StocksApi.quoteBySymbol(symbol).then(data => {
      setActiveStock(data);
    });
  }

  render() {
    const { activeStock } = this.props;
    return (
      <div className="stockDetail">
        <div className="topSection" >
        </div>
        <div className="bottomSection">
          <div className="stockDesc">
            <h1 className="stockSymbol"> {activeStock.symbol} </h1>
            <span className="companyName"> {activeStock.name} </span>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeStock: state.activeStock
});

const mapDispatchToProps = dispatch => ({
  setActiveStock: stock => dispatch(setActiveStock(stock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StockDetail));
