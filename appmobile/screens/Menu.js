import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image, TouchableOpacity } from "react-native";
import {Header, Icon} from "react-native-elements";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NossoFinal from './shared/NossoFinal.js';
import BarraEstados from "./shared/BarraEstados.js";
import {NossoHeader} from "./shared/NossoHeader.js";


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
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Menu...");
      }
      render(){
        return (
          <View style={style.container}>
            <BarraEstados />
            <NossoHeader nome={this.state.name} navigation={this.props.navigation} />
            <View style={style.imageBackgound}> 
            <ImageBackground source={imageBackgound}/>           
            <ScrollView>
            
              <View style={style.menuText}>
                <Image source={require('../assets/ementa.jpg')} style={style.image} opacity={1}>             
                <View style={style.caixatexto2}></View>
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Home")} size={45} color={"#ff6347"}></Icon>
                  </View>
                
                </Image>
              </View>
              
              <View style={style.menu}>
                  {
                    dataFromApi.map((item)=>{
                      return (
                        <TouchableOpacity style={style.menuExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Vitela", {item})}>
                          <Image style={style.menuExpFoto} source={item.imagem} ></Image>
                          <Text style={style.titleMenu}>{item.name}</Text>
                          <Text style={style.textMenu}>{item.subtitle}</Text>
                        </TouchableOpacity>
                      );
                    })
                  }

              </View>

            <NossoFinal></NossoFinal>
            
            </ScrollView>
            </View>
            
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
        height: 250
      },

      title: {                                  //titulo que diz MENU
        color: "#ff6347",
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: -35,
        marginLeft: 130,
      },

      caixatexto:{
        width: 415,
        height: 100,
        backgroundColor: '#000',
        opacity: 0.7,
        marginTop: -35,
        marginLeft: 0,
        borderRadius: 5,
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
        height: 1160,
      },

      menuExp: {
        marginTop: 10,
        top: -65,
        marginLeft: 55,
        padding: 30,
        width: 300,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },

      menuExpFoto: {
        width: 100,
        height: 100,
        marginTop: -20
      },

      arrow: {                          //come back (seta)
        marginTop: 45,
        marginLeft: -320,
        top: -50,
      },

      caixatexto2:{
        width: 40,
        height: 40,
        backgroundColor: '#000',
        opacity: 1,
        top: 40,
        marginLeft: 31,
        borderRadius: 5,
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
      },

      companhiaText: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 50
      },

      direitosText: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },

      redesText: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },

      facebook: {
        textAlign: 'center',
        marginTop: 10,
        marginRight: 20,
      },

      instagram: {
        textAlign: 'center',
        marginTop: -31,
        marginRight: -50,
        marginVertical: 50,
      },

      final: {
        backgroundColor: "#556b2f",
        justifyContent: 'center',
        marginTop: 100
      }
    });
export default Menu;