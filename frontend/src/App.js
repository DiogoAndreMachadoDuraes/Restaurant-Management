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
import Account from './components/screens/account/index';
import Admin from './components/screens/admin/index';
import Allergen from './components/screens/allergen/index';
import Employee from './components/screens/employee/index';
import Invoice from './components/screens/invoice/index';
import Menu from './components/screens/menu/index';
import MenuProduct from './components/screens/menuProduct/index';
import NutritionalInformation from './components/screens/nutritionalInformation/index';
import SpecialMenu from './components/screens/specialMenu/index';
import TakeAway from './components/screens/takeAway/index';
import User from './components/screens/user/index';

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
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/allergen">
          <Allergen />
        </Route>
        <Route path="/employee">
          <Employee />
        </Route>
        <Route path="/invoice">
          <Invoice />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/menuProduct">
          <MenuProduct />
        </Route>
        <Route path="/nutritionalInformation">
          <NutritionalInformation />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/specialMenu">
          <SpecialMenu />
        </Route>
        <Route path="/takeAway">
          <TakeAway />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
