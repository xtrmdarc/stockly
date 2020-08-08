import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import contentReducer from './content';

const rootReducer = combineReducers({
  stocks: stocksReducer,
  displayMainContent: contentReducer,
});

export default rootReducer;