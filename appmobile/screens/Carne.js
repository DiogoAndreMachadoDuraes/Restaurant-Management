import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image, TouchableOpacity } from "react-native";
import {Header, Icon} from "react-native-elements";
import NossoFinal from './shared/NossoFinal.js';
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Carne extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Pratos de Carne",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Estilo de Pratos de Carne...");
      }
      render(){
        return (
          <View style={style.container}>
            <BarraEstados />
            <ScrollView>
            
              <View style={style.menuText}>
                <ImageBackground source={require('../assets/variedade.jpg')} style={style.imageBackgound} opacity={1}>             
                <View style={style.caixatexto2}></View>
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Menu")} size={45} color={"#ff6347"}></Icon>
                  </View>
                  <View style={style.caixatexto}></View>
                  <Text style={style.title}>{this.state.name}</Text>
                </ImageBackground>
              </View>
              
              <View style={style.menu}>
                <TouchableOpacity style={style.menuExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Vitela")}>
                  <Image style={style.menuExpFoto} source={require('../assets/carne.jpg')} ></Image>
                  <Text style={style.titleMenu}>Vitela Assada</Text>
                  <Text style={style.textMenu}>Vitela assada acompanhada por batata frita gourmet e uma combinação de legumes selecionados portugueses. </Text>
                </TouchableOpacity>
                </View>
                <NossoFinal></NossoFinal>

            </ScrollView>
          </View>
        );
      }
    }
    const style = StyleSheet.create({
      container: {
        flex: 1,
      },
      imageBackgound: {                         //foto por tras do titulo
        width: 395,
        height: 250,
        marginLeft: 0,
        top: 0,
        opacity: 0.8,
      },

      title: {                                  //titulo que diz MENU
        color: "white",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "normal",
        top: -60,
        marginLeft: 0,
      },
      caixatexto:{
        width: 390,
        height: 70,
        backgroundColor: '#000',
        opacity: 0.9,
        marginTop: 20,
        marginLeft: 2,
        borderRadius: 100,
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
        height: 640,
      },
      menuExp: {
        marginTop: 10,
        top: -65,
        marginLeft: 55,
        padding: 30,
        width: 300,
        height: 220,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      menuExpFoto: {
        width: 90,
        height: 85,
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
        marginLeft: 18,
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
        textAlign: 'center',
        fontStyle: "normal",
        top: 12
      },
      textMenu: {
        color: "#000",
        fontSize: 10,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      },
    });
export default Carne;