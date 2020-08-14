import '@testing-library/jest-dom';

import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AboveTheFold from '../containers/AboveTheFold';
import rootReducer from '../reducers';
import { toggleDisplayMain } from '../actions';
import StocksApi from '../api/stocksApi';

const initialStateBase = {
  stocks: [],
  displayMainContent: true,
  activeStock: {},
};
const storeBase = createStore(rootReducer, initialStateBase);
/* eslint-disable */
function render(
  ui,
  {
    
    initialState = initialStateBase,
    store = storeBase,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          {' '}
          {children}
          {' '}
        </Router>
        {' '}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
/* eslint-enable */
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
    const arr = data.slice(0, 3);
    arr.forEach(stock => {
      expect(screen.getByText(stock.ticker)).toBeDefined();
    });
  });
});

test('show top 3 most loser stocks symbols', async () => {
  render(<AboveTheFold />);
  StocksApi.getMostLosersList().then(data => {
    const arr = data.slice(0, 3);
    arr.forEach(stock => {
      expect(screen.getByText(stock.ticker)).toBeDefined();
    });
  });
});
