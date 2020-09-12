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
/* import Invoice from './components/screens/invoice/index';
 */import Menu from './components/screens/menu/index';
import SpecialMenu from './components/screens/specialMenu/index';
import User from './components/screens/user/index';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <PrivateRoute exact path="/product" component={Product}/>
        <PrivateRoute exact path="/reservation" component={Reservation}/>
        <PrivateRoute exact path="/restaurant" component={Restaurant}/>
        <PrivateRoute exact path="/extra" component={Extra}/>
        <PrivateRoute exact path="/account" component={Account}/>
        {/* <Route path="/invoice">
          <Invoice />
        </Route> */}
        <PrivateRoute exact path="/menu" component={Menu}/>
        <PrivateRoute exact path="/specialMenu" component={SpecialMenu}/>
        <PrivateRoute exact path="/user" component={User}/>
      </Switch>
    </Router>
  );
}

export default App;
