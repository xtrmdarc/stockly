import '@testing-library/jest-dom';

import React from 'react';
import {render as rtlRender, screen, fireEvent} from '@testing-library/react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import AboveTheFold from '../containers/AboveTheFold';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import { toggleDisplayMain, SET_ACTIVE_STOCK } from '../actions';
import StocksApi from '../api/stocksApi';

const initialStateBase = {
  stocks: [],
  displayMainContent: true,
  activeStock: {},
};
const storeBase = createStore(rootReducer, initialStateBase);

function render(
  ui,
  {
    initialState = initialStateBase,
    store = storeBase,
    ...renderOptions
  } = {},
) {
  function Wrapper({children}) {
    return <Provider store={store}><Router > {children} </Router > </Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

test('show above the fold element when website is rendered for the first time', () => {
  render(<AboveTheFold />);
  expect(screen.getByTestId('mainContent')).toBeDefined();
});

test('hide above the fold element after redux store displayMainContent is set to true', () => {
  render(<AboveTheFold />);
  expect(screen.getByTestId('mainContent')).toBeDefined();
  storeBase.dispatch(toggleDisplayMain(false));
  expect(screen.getByTestId('mainContent').style.display).toBe('none');

});

test('show top 3 most gainer stocks symbols', () => {
  render(<AboveTheFold />);
  StocksApi.getMostGainersList().then(data => {
    data = data.slice(0,3);
    data.forEach(stock => {
      expect(screen.getByText(stock.ticker)).toBeDefined();
    });
  })
});

test('show top 3 most loser stocks symbols', async () => {
  render(<AboveTheFold />);
  StocksApi.getMostLosersList().then(data => {
    data = data.slice(0,3);    
    data.forEach(stock => {
      expect(screen.getByText(stock.ticker)).toBeDefined();
    });
  })
});