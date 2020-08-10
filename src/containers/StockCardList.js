import React from 'react';
import StockCard from '../components/StockCard';
import StocksApi from '../api/stocksApi';
import { connect } from 'react-redux';
import { filterStocks } from '../actions';
import { setActiveStock } from '../actions';

class StockCardList extends React.Component  {
  constructor(props) {
    super(props);
    this.handleStockCardClick = this.handleStockCardClick.bind(this);
  }
  
  componentDidMount() {
    const { updateStocksList } = this.props;
    StocksApi.getLandingStockList().then( data => {
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
        { stockList.map(p => <StockCard stockInfo={p} handleStockCardClick={this.handleStockCardClick} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stockList: state.stocks,
});

const mapDispatchToProps = dispatch => ({
  updateStocksList: stocks => dispatch(filterStocks(stocks)),
  setActiveStock: stock => dispatch(setActiveStock(stock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockCardList);