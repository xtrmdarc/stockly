import '@testing-library/jest-dom';

import React from 'react';
import {render as rtlRender, screen, fireEvent} from '@testing-library/react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import StockCard from '../components/StockCard';
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

const stockInfoFeatured = {
  ticker : "KELYB",
  changes : 25.69,
  price : "40.5",
  changesPercentage : "(+173.46%)",
  companyName : "Kelly Services Inc. Class B Common Stock"
};

const stockInfoGeneral = {
  symbol : "AAPL",
  name : "Apple Inc.",
  price : 446.20000000,
  changesPercentage : -1.04000000,
  change : -4.71000000,
  dayLow : 444.28000000,
  dayHigh : 449.93000000,
};

test('display the passed down the featured stock ticker', () => {
  render(<StockCard stockInfo={stockInfoFeatured} featured/>);
  expect(screen.getByText(stockInfoFeatured.ticker)).toBeDefined();
});

test('display the passed down the featured stock price', () => {
  render(<StockCard stockInfo={stockInfoFeatured} featured/>);
  expect(screen.getByText(stockInfoFeatured.price)).toBeDefined();
});

test('display the passed down the featured stock changesPercentage', () => {
  render(<StockCard stockInfo={stockInfoFeatured} featured/>);
  expect(screen.getByText(stockInfoFeatured.changesPercentage)).toBeDefined();;
});

test('excute the passed down prop when clicked', () => {
  const passedDownMethod = () => {
    expect(1).toBe(1);
  };
  const el = render(<StockCard stockInfo={stockInfoGeneral} handleStockCardClick={passedDownMethod}/>);
  const stockDiv = el.getByTestId('generalStock');
  fireEvent.click(stockDiv);
});

test('renders the featured stock layout correctly', () => {
  render(<StockCard featured stockInfo={stockInfoFeatured} />);
  expect(screen.findByLabelText('featuredStock')).toBeDefined();
});

test('renders the general stock layout correctly', () => {
  render(<StockCard featured stockInfo={stockInfoFeatured} />);
  expect(screen.findByLabelText('generalStock')).toBeDefined();
});

test('display the passed down the general stock symbol', () => {
  render(<StockCard stockInfo={stockInfoGeneral} />);
  expect(screen.getByText(stockInfoGeneral.symbol)).toBeDefined();
});

test('display the passed down the general stock name', () => {
  render(<StockCard stockInfo={stockInfoGeneral} />);
  expect(screen.getByText(stockInfoGeneral.name)).toBeDefined();
});

test('display the passed down the general stock price', () => {
  render(<StockCard stockInfo={stockInfoGeneral} />);
  expect(screen.getByText(stockInfoGeneral.price+'')).toBeDefined();
});

test('display the passed down the general stock changesPercentage', () => {
  render(<StockCard stockInfo={stockInfoGeneral} />);
  expect(screen.getByText('('+stockInfoGeneral.changesPercentage+'%)')).toBeDefined();
});

test('display the passed down the general stock change', () => {
  render(<StockCard stockInfo={stockInfoGeneral} />);
  expect(screen.getByText(stockInfoGeneral.change+' USD')).toBeDefined();
});

test('display the passed down the general stock dayLow', () => {
  render(<StockCard stockInfo={stockInfoGeneral} />);
  expect(screen.getByText(stockInfoGeneral.dayLow+' USD')).toBeDefined();
});

test('display the passed down the general stock dayHigh', () => {
  render(<StockCard stockInfo={stockInfoGeneral} />);
  expect(screen.getByText(stockInfoGeneral.dayHigh+' USD')).toBeDefined();
});
