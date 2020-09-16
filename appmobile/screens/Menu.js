import * as React from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity} from "react-native";
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop';

const dataFromApi = [
  {
    id: 1,
    name: "Menu Hambúrguer",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: require('../assets/gourmet.jpg')
  },
  
  {
    id: 2,
    name: "Menu Francesinha",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: require('../assets/french.jpg')
  },

  {
    id: 3,
    name: "Pratos de Carne",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: require('../assets/variedade.jpg')
  },

  {
    id: 4,
    name: "Pratos de Peixe",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: require('../assets/peixe.jpg')
  },

  {
    id: 5,
    name: "Menu Pizza",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: require('../assets/pizzamenu.jpg')
  },

  {
    id: 6,
    name: "Pratos Vegan",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: require('../assets/vegan.jpg')
  },

  {
    id: 7,
    name: "Menu Café",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: require('../assets/doces.jpg')
  }
]

  class Menu extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Menu"
        };
  }

  componentDidMount(){ 
    console.log("Mounting the screen Menu...");
  }

  _onPress (item){
    this.props.navigation.navigate("CallTypeMenu", {type:item.name});
  }

  render(){
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} opacity={1}>
          <ScrollView>
          <View style={style.menu}>
          {
            dataFromApi.map((item)=>{
              return ( <TouchableOpacity style={style.menuExp} activeOpacity={0.5} onPress={()=>this._onPress(item)}>
                      <Image style={style.menuExpFoto} source={item.imagem} ></Image>
                      <Text style={style.titleMenu}>{item.name}</Text>
                      <Text style={style.textMenu}>{item.subtitle}</Text>
                    </TouchableOpacity>);
            })
          }
              <FinalHeader />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBackgound: {                         //foto por tras do titulo
    flex:1,
  },

  menu: {                           //scrollview
    width: "100%",
    height: "100%",
  },

  menuExp: {
    marginTop: 25,
    top: 40,
    marginLeft: 55,
    padding: 20,
    width: 290,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuExpFoto: {
    width: 100,
    height: 100,
    marginTop: -10,
  },

  titleMenu: {
    color: "#000",
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: "normal",
    top: 12,
  },

  textMenu: {
    color: "#000",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: 'center',
    top: 20,
  }
});

export default Menu;