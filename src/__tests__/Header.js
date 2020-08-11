import '@testing-library/jest-dom';

import React from 'react';
import {render as rtlRender, screen, fireEvent} from '@testing-library/react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import Header from '../containers/Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

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
  function Wrapper({children}) {
    return <Provider store={store}><Router > {children} </Router > </Provider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

test('show logo image when header is rendered', () => {
  render(<Header />);
  expect(screen.findByAltText('stockly logo')).toBeDefined();
});

test('show input filter when the header is rendered', () => {
  render(<Header />);
  expect(screen.getByPlaceholderText('Search for stocks')).toBeDefined();
});