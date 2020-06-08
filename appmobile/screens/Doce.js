import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image, TouchableOpacity } from "react-native";
import {Header, Icon} from "react-native-elements";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Doce extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Menu Café",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Estilo de Menu de Café...");
      }
      render(){
        return (
          <View style={style.container}>
            <StatusBar hidden={false} backgroundColor={'#ffa07a'}></StatusBar>
            <ScrollView>
              <View style={style.menuText}>
                <ImageBackground source={require('../assets/doces.jpg')} style={style.imageBackgound} opacity={1}>             
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Menu")} size={45} color={"#ff6347"}></Icon>
                  </View>
                
                </ImageBackground>
              </View>
              
              <View style={style.menu}>
                <TouchableOpacity style={style.menuExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Nata")}>
                  <Image style={style.menuExpFoto} source={require('../assets/cafe.jpg')} ></Image>
                  <Text style={style.titleMenu}>Cafe e Nata</Text>
                  <Text style={style.textMenu}> Saiba mais sobre este menu delicioso que temos para si! </Text>
                </TouchableOpacity>
              </View>
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

      title: {                                  //titulo que diz Hamburgueria Gourmet
        color: "#ff6347",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "normal",
        top: 0,
        marginLeft: 0,
      },
      caixatexto:{
        width: 415,
        height: 100,
        backgroundColor: '#000',
        opacity: 0.7,
        marginTop: 5,
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
export default Doce;