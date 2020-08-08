import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store  = createStore(rootReducer, {
  displayStockList: [],
});

ReactDOM.render(
  <Provider store={store} > 
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
