import React from 'react';
import AboveTheFold from '../containers/AboveTheFold';
import StockCardList from '../containers/StockCardList';
import Header from './Header';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import StockDetail from './StockDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch >
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
}

export default App;