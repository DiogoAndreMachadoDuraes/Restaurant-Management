import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/screens/home/index";
import Choose from './components/screens/loginChoose/index';
import Product from './components/screens/product/index';
import Create from './components/screens/product/create';
import Edit from './components/screens/product/edit';
import Reservation from './components/screens/reservation/index';
import Restaurant from './components/screens/restaurant/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Choose />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/productCreate">
          <Create />
        </Route>
        <Route path="/productEdit">
          <Edit />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
