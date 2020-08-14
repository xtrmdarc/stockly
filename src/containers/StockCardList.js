import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockCard from '../components/StockCard';
import StocksApi from '../api/stocksApi';
import { filterStocks, setActiveStock } from '../actions';

class StockCardList extends React.Component {
  constructor(props) {
    super(props);
    this.handleStockCardClick = this.handleStockCardClick.bind(this);
  }

  componentDidMount() {
    const { updateStocksList } = this.props;
    StocksApi.getLandingStockList().then(data => {
      updateStocksList(data);
    });
  }

  handleStockCardClick(stock) {
    const { setActiveStock } = this.props;
    setActiveStock(stock);
  }

  render() {
    const { stockList } = this.props;
    return (
      <div className="stocksList">
        { stockList.map(p => (
          <StockCard
            stockInfo={p}
            key={p.symbol}
            handleStockCardClick={this.handleStockCardClick}
          />
        ))}
      </div>
    );
  }
}

StockCardList.propTypes = {
  updateStocksList: PropTypes.func.isRequired,
  setActiveStock: PropTypes.func.isRequired,
  stockList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  stockList: state.stocks,
});

const mapDispatchToProps = dispatch => ({
  updateStocksList: stocks => dispatch(filterStocks(stocks)),
  setActiveStock: stock => dispatch(setActiveStock(stock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockCardList);
