import * as React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";

import Login from "./screens/Login.js";
import Espaco from "./screens/Espaco.js";
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
import Hamburguer from "./screens/Hamburguer.js";
import HamburguerVitela from "./screens/HamburguerVitela.js";
import Vitela from "./screens/Vitela.js";
import Francesinha from "./screens/Francesinha.js";
import FrancesinhaEspecial from "./screens/FrancesinhaEspecial.js";
import Carne from "./screens/Carne.js";
import Peixe from "./screens/Peixe.js";
import Pizza from "./screens/Pizza.js";
import PizzaPortuguesa from "./screens/PizzaPortuguesa.js";
import Registar from "./screens/Registar.js";
import Doce from "./screens/Doce.js";
import Nata from "./screens/Nata.js";
import Carrinho from "./screens/Carrinho.js";

import { DrawerContent } from './screens/shared/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
      //<AppearanceProvider>
        <NavigationContainer /*theme={scheme === 'dark' ? DarkTheme : DefaultTheme}*/>
          <Drawer.Navigator initialRouteName="Login" drawerStyle={{ backgroundColor: '#fff'}} drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Espaco" component={Espaco} options={{ drawerLabel: 'Espaco' }}/>
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
            <Drawer.Screen name="Hamburguer" component={Hamburguer} options={{drawerLabel:'Hamburguer'}}/>
            <Drawer.Screen name="HamburguerVitela" component={HamburguerVitela} options={{drawerLabel:'HamburguerVitela'}}/>
            <Drawer.Screen name="Registar" component={Registar} options={{drawerLabel:'Registar'}}/>
            <Drawer.Screen name="Carne" component={Carne} options={{drawerLabel:'Carne'}}/>
            <Drawer.Screen name="Peixe" component={Peixe} options={{drawerLabel:'Peixe'}}/>
            <Drawer.Screen name="Francesinha" component={Francesinha} options={{drawerLabel:'Francesinha'}}/>
            <Drawer.Screen name="FrancesinhaEspecial" component={FrancesinhaEspecial} options={{drawerLabel:'FrancesinhaEspecial'}}/>
            <Drawer.Screen name="Pizza" component={Pizza} options={{drawerLabel:'Pizza'}}/>
            <Drawer.Screen name="Vitela" component={Vitela} options={{drawerLabel:'Vitela'}}/>
            <Drawer.Screen name="PizzaPortuguesa" component={PizzaPortuguesa} options={{drawerLabel:'PizzaPortuguesa'}}/>
            <Drawer.Screen name="Doce" component={Doce} options={{drawerLabel:'Doce'}}/>
            <Drawer.Screen name="Nata" component={Nata} options={{drawerLabel:'Nata'}}/>
            <Drawer.Screen name="Carrinho" component={Carrinho} options={{drawerLabel:'Carrinho'}}/>

          </Drawer.Navigator>
        </NavigationContainer>
      //</AppearanceProvider>
    );
}

export default App;