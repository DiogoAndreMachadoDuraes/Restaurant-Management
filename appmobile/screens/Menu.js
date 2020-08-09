import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, Image, TouchableOpacity } from "react-native";
import NossoFinal from './shared/NossoFinal.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { OwnHeader } from './shared/OwnHeader';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

const Hamburguer = require('../assets/gourmet.jpg');
const Francesinha = require('../assets/french.jpg');
const Carne = require('../assets/variedade.jpg');
const Peixe = require('../assets/peixe.jpg');
const Pizza = require('../assets/pizzamenu.jpg');
const Doce = require('../assets/doces.jpg');

const dataFromApi = [
  {
    id: 1,
    name: "Menus de Hambúrgueres",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: Hamburguer
  },
  {
    id: 2,
    name: "Menus de Francesinhas",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: Francesinha
  },
  {
    id: 3,
    name: "Pratos de Carne",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: Carne
  },
  {
    id: 4,
    name: "Pratos de Peixe",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: Peixe
  },
  {
    id: 5,
    name: "Menus de Pizzas",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: Pizza
  },
  {
    id: 6,
    name: "Menus de Cafés",
    subtitle: "Acompanhem aqui todos os nossos Menus deliciosos!",
    imagem: Doce
  }
]

class Menu extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Menu",
          data:[]
        };
      }
      async componentDidMount(){ 
        console.log("Mounting the screen SpecialMenu...");

        await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Ementa', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.setState({ data: json, isLoading:false });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
      render(){
        return (
          <View style={style.container}>
            <OwnStatusBar />
            <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>
              <ScrollView>
              <View style={style.menu}>
              {
                isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={this.state.data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={style.menuExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Hamburguer", {item})}>
                          <Image style={style.menuExpFoto} source={item.imagem} ></Image>
                          <Text style={style.titleMenu}>{item.name}</Text>
                          <Text style={style.textMenu}>{item.subtitle}</Text>
                        </TouchableOpacity>
                      )}
                  />
                )
              }
                  <NossoFinal />
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

      image: {                         //foto por tras do titulo
        width: 420,
        height: 250,
      },

      text: {                       
        color: "white",
        fontSize: 20,
        fontStyle: "italic",
        textAlign: 'center',
        fontWeight: 'bold',
        top: 30,
        opacity: 1,
      },

      menuText: {
        width: 400,
        height: 320
      },

      menu: {                           //scrollview
        width: "100%",
        height: 1690,
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
        alignItems: 'center'
      },

      menuExpFoto: {
        width: 100,
        height: 100,
        marginTop: -10
      },

      

      menuExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },

      titleMenu: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "normal",
        top: 12
      },

      textMenu: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      }
    });
export default Menu;