import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import contentReducer from './content';
import activeStockReducer from './activeStock';

const rootReducer = combineReducers({
  stocks: stocksReducer,
  displayMainContent: contentReducer,
  activeStock: activeStockReducer,
});

export default rootReducer;