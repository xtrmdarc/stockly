import { FILTER_STOCKS } from '../actions';

const stocksReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER_STOCKS: {
      return action.stocks;
    }
    default: return state;
  }
};

export default stocksReducer;
