import '@testing-library/jest-dom';

import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Header from '../containers/Header';
import rootReducer from '../reducers';
/* eslint-disable */
function render(
  ui,
  {
    initialState = {
      stocks: [],
      displayMainContent: true,
      activeStock: {},
    },
    store = createStore(rootReducer, initialState),
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
test('show logo image when header is rendered', () => {
  render(<Header />);
  expect(screen.findByAltText('stockly logo')).toBeDefined();
});

test('show input filter when the header is rendered', () => {
  render(<Header />);
  expect(screen.getByPlaceholderText('Search for stocks')).toBeDefined();
});
