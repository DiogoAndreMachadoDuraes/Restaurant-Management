import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/screens/home/index";
import Login from './components/screens/login/index';
import Product from './components/screens/product/index';
import ProductCreate from './components/screens/product/create';
import ProductEdit from './components/screens/product/edit';
import Reservation from './components/screens/reservation/index';
import ReservationCreate from './components/screens/reservation/create';
import ReservationEdit from './components/screens/reservation/edit';
import Restaurant from './components/screens/restaurant/index';
import RestaurantCreate from './components/screens/restaurant/create';
import RestaurantEdit from './components/screens/restaurant/edit';
import BuyMenu from './components/screens/buyMenu/index';
import BuyMenuCreate from './components/screens/buyMenu/create';
import BuyMenuEdit from './components/screens/buyMenu/edit';
import BuyProduct from './components/screens/buyProduct/index';
import BuyProductCreate from './components/screens/buyProduct/create';
import BuyProductEdit from './components/screens/buyProduct/edit';
import Client from './components/screens/client/index';
import ClientCreate from './components/screens/client/create';
import ClientEdit from './components/screens/client/edit';
import Extra from './components/screens/extra/index';
import ExtraCreate from './components/screens/extra/create';
import ExtraEdit from './components/screens/extra/edit';
import ProductExtra from './components/screens/productExtra/index';
import ProductExtraCreate from './components/screens/productExtra/create';
import ProductExtraEdit from './components/screens/productExtra/edit';
import WeeklyMeal from './components/screens/weeklyMeal/index';
import WeeklyMealCreate from './components/screens/weeklyMeal/create';
import WeeklyMealEdit from './components/screens/weeklyMeal/edit';
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
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/productCreate">
          <ProductCreate />
        </Route>
        <Route path="/productEdit">
          <ProductEdit />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/reservationCreate">
          <ReservationCreate />
        </Route>
        <Route path="/reservationEdit">
          <ReservationEdit />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route path="/restaurantCreate">
          <RestaurantCreate />
        </Route>
        <Route path="/restaurantEdit">
          <RestaurantEdit />
        </Route>
        <Route path="/buyMenu">
          <BuyMenu />
        </Route>
        <Route path="/buyMenuCreate">
          <BuyMenuCreate />
        </Route>
        <Route path="/buyMenuEdit">
          <BuyMenuEdit />
        </Route>
        <Route path="/buyProduct">
          <BuyProduct />
        </Route>
        <Route path="/buyProductCreate">
          <BuyProductCreate />
        </Route>
        <Route path="/buyProductEdit">
          <BuyProductEdit />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
        <Route path="/clientCreate">
          <ClientCreate />
        </Route>
        <Route path="/clientEdit">
          <ClientEdit />
        </Route>
        <Route path="/extra">
          <Extra />
        </Route>
        <Route path="/extraCreate">
          <ExtraCreate />
        </Route>
        <Route path="/extraEdit">
          <ExtraEdit />
        </Route>
        <Route path="/productExtra">
          <ProductExtra />
        </Route>
        <Route path="/productExtraCreate">
          <ProductExtraCreate />
        </Route>
        <Route path="/productExtraEdit">
          <ProductExtraEdit />
        </Route>
        <Route path="/weeklyMeal">
          <WeeklyMeal />
        </Route>
        <Route path="/weeklyMealCreate">
          <WeeklyMealCreate />
        </Route>
        <Route path="/weeklyMealEdit">
          <WeeklyMealEdit />
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
