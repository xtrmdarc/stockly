import { combineReducers } from 'redux';
import stocksReducer from './stocks';

const rootReducer = combineReducers({
  stocks: stocksReducer,
});

export default rootReducer;