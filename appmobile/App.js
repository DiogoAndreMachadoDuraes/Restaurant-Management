import * as React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";

import Login from "./screens/Login.js";
import BatataFrita from "./screens/BatataFrita.js";
import BebidasFrias from "./screens/BebidasFrias.js";
import BebidasQuentes from "./screens/BebidasQuentes.js";
import Cafe from "./screens/Cafe.js";
import Agradecimento from "./screens/Agradecimento.js";
import Estrogonofe from "./screens/Estrogonofe.js"
import Extras from "./screens/Extras.js";
import Legumes from "./screens/Legumes.js";
import Pudim from "./screens/Pudim.js";
import Reservas from "./screens/Reservas.js";
import Restaurantes from "./screens/Restaurantes.js";
import Saladas from "./screens/Saladas.js";
import SaladaTropical from "./screens/SaladaTropical.js";
import Salmao from "./screens/Salmao.js";
import Sobremesas from "./screens/Sobremesas.js";
import CaldoVerde from "./screens/CaldoVerde.js";
import VinhoTinto from "./screens/VinhoTinto.js";
import Home from "./screens/Home.js";
import Menu from "./screens/Menu.js";
import Estilo from "./screens/Estilo.js";
import Hamburguer from "./screens/Hamburguer.js";
import HamburguerCamarao from "./screens/HamburguerCamarao.js";

import { DrawerContent } from './screens/DrawerContent';
import NossoHeader from "./screens/NossoHeader.js";

const Drawer = createDrawerNavigator();

const App = () => {
    return (
      //<AppearanceProvider>
        <NavigationContainer /*theme={scheme === 'dark' ? DarkTheme : DefaultTheme}*/>
          <Drawer.Navigator initialRouteName="Login" drawerStyle={{ backgroundColor: '#fff'}} drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="NossoHeader" component={NossoHeader} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="BatataFrita" component={BatataFrita} options={{ drawerLabel: 'BatataFrita' }}/>
            <Drawer.Screen name="BebidasFrias" component={BebidasFrias} options={{ drawerLabel: 'BebidasFrias' }}/>
            <Drawer.Screen name="BebidasQuentes" component={BebidasQuentes} options={{ drawerLabel: 'BebidasQuentes' }}/>
            <Drawer.Screen name="Cafe" component={Cafe} options={{ drawerLabel: 'Cafe' }}/>
            <Drawer.Screen name="Agradecimento" component={Agradecimento} options={{ drawerLabel: 'Agradecimento' }}/>
            <Drawer.Screen name="Estrogonofe" component={Estrogonofe} options={{ drawerLabel: 'Estrogonofe' }}/>
            <Drawer.Screen name="Extras" component={Extras} options={{ drawerLabel: 'Extras' }}/>
            <Drawer.Screen name="Legumes" component={Legumes} options={{ drawerLabel: 'Legumes' }}/>
            <Drawer.Screen name="Pudim" component={Pudim} options={{ drawerLabel: 'Pudim' }}/>
            <Drawer.Screen name="Reservas" component={Reservas} options={{ drawerLabel: 'Reservas' }}/>
            <Drawer.Screen name="Restaurantes" component={Restaurantes} options={{ drawerLabel: 'Restaurantes' }}/>
            <Drawer.Screen name="Saladas" component={Saladas} options={{ drawerLabel: 'Saladas' }}/>
            <Drawer.Screen name="SaladaTropical" component={SaladaTropical} options={{ drawerLabel: 'SaladaTropical' }}/>
            <Drawer.Screen name="Salmao" component={Salmao} options={{ drawerLabel: 'Salmao' }}/>
            <Drawer.Screen name="Sobremesas" component={Sobremesas} options={{ drawerLabel: 'Sobremesas' }}/>
            <Drawer.Screen name="CaldoVerde" component={CaldoVerde} options={{ drawerLabel: 'CaldoVerde' }}/>
            <Drawer.Screen name="VinhoTinto" component={VinhoTinto} options={{ drawerLabel: 'VinhoTinto' }}/>
            <Drawer.Screen name="Home" component={Home} options={{drawerLabel:'Home'}}/>
            <Drawer.Screen name="Menu" component={Menu} options={{drawerLabel:'Menu'}}/>
            <Drawer.Screen name="Estilo" component={Estilo} options={{drawerLabel:'Estilo'}}/>
            <Drawer.Screen name="Hamburguer" component={Hamburguer} options={{drawerLabel:'Hamburguer'}}/>
            <Drawer.Screen name="HamburguerCamarao" component={HamburguerCamarao} options={{drawerLabel:'HamburguerCamarao'}}/>
          </Drawer.Navigator>
        </NavigationContainer>
      //</AppearanceProvider>
    );
}

export default App;