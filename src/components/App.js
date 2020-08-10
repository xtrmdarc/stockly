import React from 'react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import AboveTheFold from '../containers/AboveTheFold';
import StockCardList from '../containers/StockCardList';
import Header from './Header';
import StockDetail from './StockDetail';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact>
        <AboveTheFold />
        <StockCardList />
      </Route>
      <Route path="/stocks/:symbol" exact>
        <StockDetail />
      </Route>
    </Switch>
  </Router>
);

export default App;
