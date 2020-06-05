import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image, TouchableOpacity } from "react-native";
import {Header, Icon} from "react-native-elements";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const restaurante1 = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg" };

class Agradecimento extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Obrigado pela sua reserva",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Agradecimento...");
      }
      render(){
        return (
          <View style={style.container}>
          <StatusBar hidden={false}></StatusBar>
            <View style={style.parteCima}>
                <Image source={require("../assets/logo.jpg")}></Image>
            </View>
            <View style={style.parteBaixo}>
              <Text style={style.title}>{this.state.name}</Text>
              <Text style={style.text}>Reserva número 1</Text>
              <Image style={style.image} source={restaurante1}></Image>
              <TouchableOpacity style={style.avancar} /*onPress={() => this.props.navigation.navigate("Home")}*/>
                  <Text style={style.avancarText}>Guardar reserva</Text>
              </TouchableOpacity>
            </View>
      </View>
        );
      }
    }
    
    const style = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff"
      },
      parteCima: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      parteBaixo:{
          flex: 1.5,
          backgroundColor: "grey",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 30,
          paddingVertical: 50,
          justifyContent: 'center',
          alignItems: 'center'
      },
      imageBackgound: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        color: "red",
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: -40
      },
      text: {
        color: "yellow",
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 10
      },
      image: {
        width: 100,
        height: 100,
        top: 20
      },
      avancar: {
          width: 100,
          height: 42,
          backgroundColor: 'red',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          left: 100,
          top: 60
      },
      avancarText:{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'yellow',
          textAlign: "center"
      },
    });

export default Agradecimento;