import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/screens/login/index';
import Product from './components/screens/product/index';
import Restaurant from './components/screens/restaurant/index';
import Extra from './components/screens/extra/index';
import Reservation from './components/screens/reservation/index';
import Account from './components/screens/account/index';
import Invoice from './components/screens/invoice/index';
/* import Menu from './components/screens/menu/index';
 */import SpecialMenu from './components/screens/specialMenu/index';
import User from './components/screens/user/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route path="/extra">
          <Extra />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/invoice">
          <Invoice />
        </Route>
        {/* <Route path="/menu">
          <Menu />
        </Route> */}
        <Route path="/specialMenu">
          <SpecialMenu />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
