import React from 'react';
import StockCard from '../components/StockCard';
import StocksApi from '../api/stocksApi';
import { connect } from 'react-redux';
import { filterStocks } from '../actions';

class StockCardList extends React.Component  {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const { updateStocksList } = this.props;
    StocksApi.getLandingStockList().then( data => {
      updateStocksList(data);
    });
  }

  render() {
    const { stockList } = this.props;
    return (
      <div className="stocksList">
        { stockList.map(p => <StockCard stockInfo={p}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stockList: state.stocks,
});

const mapDispatchToProps = dispatch => ({
  updateStocksList: stocks => dispatch(filterStocks(stocks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockCardList);