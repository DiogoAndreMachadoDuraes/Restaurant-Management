import React , { useEffect } from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { 
  NavigationContainer, 
  DarkTheme as NavigationDarkTheme, 
  DefaultTheme as NavigationDefaultTheme
} from "@react-navigation/native";

import Login from "./screens/Login.js";
import Space from "./screens/Space.js";
import Account from "./screens/Account.js";
import AfterShop from "./screens/AfterShop.js";
import Reservation from "./screens/Reservation.js";
import ShowReservation from "./screens/ShowReservation.js";
import Restaurant from "./screens/Restaurant.js";
import Home from "./screens/Home.js";
import Menu from "./screens/Menu.js";
import CallTypeMenu from "./screens/CallTypeMenu.js";
import EditAccount from "./screens/EditAccount.js";
import CreateAccount from "./screens/CreateAccount.js";
import SpecialMenu from "./screens/SpecialMenu.js";
import CallTypeSpecialMenu from "./screens/CallTypeSpecialMenu.js";
import Shop from "./screens/Shop.js";
import Product from "./screens/Product.js";
import ProductDetail from "./screens/ProductDetail.js";
import ProductCategory from "./screens/ProductCategory.js";
import Invoice from "./screens/Invoice.js";
import TakeAway from "./screens/TakeAway.js";
import CreateTakeAway from "./screens/CreateTakeAway.js";
import { DrawerContent } from './screens/shared/DrawerContent';
import MenuDetail from "./screens/MenuDetail.js";
import EditReservation from "./screens/EditReservation.js";

import { ToggleTheme } from './components/context';


const Drawer = createDrawerNavigator();

const App = () => {

  const [ isDark, setTheme]= React.useState(false);

  const customDefaultTheme={
    ... NavigationDefaultTheme,
    colors:{
      ... NavigationDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const customDarkTheme={
    ... NavigationDarkTheme,
    colors:{
      ... NavigationDarkTheme.colors,
      background: 'black',
      text: '#ffffff'
    }
  }

  const theme = isDark ? customDarkTheme : customDefaultTheme;

  const toggleTheme= React.useMemo(() => ({
    toggle:()=>{
      setTheme(isDark => !isDark);
    }
  }), [])

  return (
    <ToggleTheme.Provider value={toggleTheme}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator initialRouteName="Login" drawerContentOptions={{ activeBackgroundColor: "#556b2f", activeTintColor: "#fff" }} drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Login" component={Login} options={{ gestureEnabled:false }}/>
          <Drawer.Screen name="CreateAccount" component={CreateAccount} options={{ gestureEnabled:false, drawerLabel:'CreateAccount'}}/>
          <Drawer.Screen name="Product" component={Product} options={{ drawerLabel: 'Product' }}/>
          <Drawer.Screen name="ProductCategory" component={ProductCategory} options={{ drawerLabel: 'ProductCategory' }}/>  
          <Drawer.Screen name="ProductDetail" component={ProductDetail} options={{ drawerLabel: 'ProductDetail' }}/>           
          <Drawer.Screen name="Space" component={Space} options={{ drawerLabel: 'Space' }}/>
          <Drawer.Screen name="AfterShop" component={AfterShop} options={{ drawerLabel: 'AfterShop' }}/>
          <Drawer.Screen name="Reservation" component={Reservation} options={{ gestureEnabled:false, drawerLabel: 'Reservation' }}/>
          <Drawer.Screen name="ShowReservation" component={ShowReservation} options={{ drawerLabel: 'ShowReservation' }}/>
          <Drawer.Screen name="Restaurant" component={Restaurant} options={{ drawerLabel: 'Restaurant' }}/>
          <Drawer.Screen name="Home" component={Home} options={{drawerLabel:'Home'}}/>
          <Drawer.Screen name="Menu" component={Menu} options={{drawerLabel:'Menu'}}/>
          <Drawer.Screen name="CallTypeMenu" component={CallTypeMenu} options={{drawerLabel:'CallTypeMenu'}}/>
          <Drawer.Screen name="EditAccount" component={EditAccount} options={{drawerLabel:'EditAccount'}}/>
          <Drawer.Screen name="Shop" component={Shop} options={{drawerLabel:'Shop'}}/>
          <Drawer.Screen name="Account" component={Account} options={{drawerLabel:'Account'}}/>
          <Drawer.Screen name="SpecialMenu" component={SpecialMenu} options={{drawerLabel:'SpecialMenu'}}/>
          <Drawer.Screen name="CallTypeSpecialMenu" component={CallTypeSpecialMenu} options={{drawerLabel:'CallTypeSpecialMenu'}}/>
          <Drawer.Screen name="Invoice" component={Invoice} options={{drawerLabel:'Invoice'}}/>
          <Drawer.Screen name="TakeAway" component={TakeAway} options={{drawerLabel:'TakeAway'}}/>
          <Drawer.Screen name="CreateTakeAway" component={CreateTakeAway} options={{ gestureEnabled:false, drawerLabel:'CreateTakeAway'}}/>
          <Drawer.Screen name="EditReservation" component={EditReservation} options={{ gestureEnabled:false, drawerLabel:'EditReservation'}}/>
          <Drawer.Screen name="MenuDetail" component={MenuDetail} options={{ gestureEnabled:false, drawerLabel:'MenuDetail'}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </ToggleTheme.Provider>
  );
}

export default App;