import React , { useEffect } from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer, 
  DarkTheme, 
  DefaultTheme
} from "@react-navigation/native";
import { StatusBar} from "react-native";

import Login from "./screens/Login.js";
import Espaco from "./screens/Espaco.js";
import Conta from "./screens/Conta.js";
import AfterShop from "./screens/AfterShop.js";
import Reservation from "./screens/Reservation.js";
import Restaurant from "./screens/Restaurant.js";
import Home from "./screens/Home.js";
import Menu from "./screens/Menu.js";
import Registar from "./screens/Registar.js";
import Ementa from "./screens/Ementa.js";
import Carrinho from "./screens/Carrinho.js";
import Product from "./screens/Product.js";
import ProductDetail from "./screens/ProductDetail.js";
import ProductCategory from "./screens/ProductCategory.js";
import Fatura from "./screens/Fatura.js";
import Take_away from "./screens/Take_away.js";

import { DrawerContent } from './screens/shared/DrawerContent';

import { ToggleTheme } from './components/context';
import BarraEstados from "./screens/shared/BarraEstados.js";

const Drawer = createDrawerNavigator();

const App = () => {

  const [ isDark, setTheme]= React.useState(false);

  const theme = isDark ? DarkTheme : DefaultTheme;

  const toggleTheme= React.useMemo(() => ({
    toggle:()=>{
      setTheme(isDark => !isDark);
      //isDark ? BarraEstados.setBarStyle("default") : <BarraEstados/>;
      //isDark ? NossoHeader.setBarStyle("default") : <NossoHeader/>;
      //isDark ? NossoFinal.setBarStyle("default") : <NossoFinal/>;
    }
  }), [])

  return (
    //<AppearanceProvider>
      <ToggleTheme.Provider value={toggleTheme}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator initialRouteName="Login" drawerContentOptions={{ activeBackgroundColor: "#556b2f", activeTintColor: "#fff" }} drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Product" component={Product} options={{ drawerLabel: 'Product' }}/>
            <Drawer.Screen name="ProductCategory" component={ProductCategory} options={{ drawerLabel: 'ProductCategory' }}/>  
            <Drawer.Screen name="ProductDetail" component={ProductDetail} options={{ drawerLabel: 'ProductDetail' }}/>           
            <Drawer.Screen name="Espaco" component={Espaco} options={{ drawerLabel: 'Espaco' }}/>
            <Drawer.Screen name="AfterShop" component={AfterShop} options={{ drawerLabel: 'AfterShop' }}/>
            <Drawer.Screen name="Reservation" component={Reservation} options={{ drawerLabel: 'Reservation' }}/>
            <Drawer.Screen name="Restaurant" component={Restaurant} options={{ drawerLabel: 'Restaurant' }}/>
            <Drawer.Screen name="Home" component={Home} options={{drawerLabel:'Home'}}/>
            <Drawer.Screen name="Menu" component={Menu} options={{drawerLabel:'Menu'}}/>
            <Drawer.Screen name="Registar" component={Registar} options={{drawerLabel:'Registar'}}/>
            <Drawer.Screen name="Carrinho" component={Carrinho} options={{drawerLabel:'Carrinho'}}/>
            <Drawer.Screen name="Conta" component={Conta} options={{drawerLabel:'Conta'}}/>
            <Drawer.Screen name="Ementa" component={Ementa} options={{drawerLabel:'Ementa'}}/>
            <Drawer.Screen name="Fatura" component={Fatura} options={{drawerLabel:'Fatura'}}/>
            <Drawer.Screen name="Take_away" component={Take_away} options={{drawerLabel:'Take_away'}}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </ToggleTheme.Provider>
    //</AppearanceProvider>
  );
}

export default App;