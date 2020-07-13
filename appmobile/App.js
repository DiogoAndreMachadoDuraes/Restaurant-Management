import * as React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";

import Login from "./screens/Login.js";
import Espaco from "./screens/Espaco.js";
import BebidasQuentes from "./screens/BebidasQuentes.js";
import Cafe from "./screens/Cafe.js";
import Agradecimento from "./screens/Agradecimento.js";
import Reserva from "./screens/Reserva.js";
import Restaurantes from "./screens/Restaurantes.js";
import Home from "./screens/Home.js";
import Menu from "./screens/Menu.js";
import Registar from "./screens/Registar.js";
import Ementa from "./screens/Ementa.js";
import Carrinho from "./screens/Carrinho.js";
import Produto from "./screens/Produto.js";
import DetalhesProduto from "./screens/DetalhesProduto.js";
import CategoriaProduto from "./screens/CategoriaProduto.js";

import { DrawerContent } from './screens/shared/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
      //<AppearanceProvider>
        <NavigationContainer /*theme={scheme === 'dark' ? DarkTheme : DefaultTheme}*/>
          <Drawer.Navigator initialRouteName="Login" drawerContentOptions={{ activeBackgroundColor: "#556b2f", activeTintColor: "#fff" }} drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Produto" component={Produto} options={{ drawerLabel: 'Produto' }}/>
            <Drawer.Screen name="CategoriaProduto" component={CategoriaProduto} options={{ drawerLabel: 'CategoriaProduto' }}/>  
            <Drawer.Screen name="DetalhesProduto" component={DetalhesProduto} options={{ drawerLabel: 'DetalhesProduto' }}/>           
            <Drawer.Screen name="Espaco" component={Espaco} options={{ drawerLabel: 'Espaco' }}/>
            <Drawer.Screen name="BebidasQuentes" component={BebidasQuentes} options={{ drawerLabel: 'BebidasQuentes' }}/>
            <Drawer.Screen name="Cafe" component={Cafe} options={{ drawerLabel: 'Cafe' }}/>
            <Drawer.Screen name="Agradecimento" component={Agradecimento} options={{ drawerLabel: 'Agradecimento' }}/>
            <Drawer.Screen name="Reserva" component={Reserva} options={{ drawerLabel: 'Reserva' }}/>
            <Drawer.Screen name="Restaurantes" component={Restaurantes} options={{ drawerLabel: 'Restaurantes' }}/>
            <Drawer.Screen name="Home" component={Home} options={{drawerLabel:'Home'}}/>
            <Drawer.Screen name="Menu" component={Menu} options={{drawerLabel:'Menu'}}/>
            <Drawer.Screen name="Registar" component={Registar} options={{drawerLabel:'Registar'}}/>
            <Drawer.Screen name="Carrinho" component={Carrinho} options={{drawerLabel:'Carrinho'}}/>
            <Drawer.Screen name="Ementa" component={Ementa} options={{drawerLabel:'Ementa'}}/>
          </Drawer.Navigator>
        </NavigationContainer>
      //</AppearanceProvider>
    );
}

export default App;