import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image } from "react-native";
import {Header, Icon} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import NossoFinal from "./NossoFinal.js";
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const Pudim = require('../assets/pudim.jpg');
const SaladaFruta = require('../assets/saladaFruta.jpg');
const GeladoMorango = require('../assets/geladoMorango.jpg');

const dataFromApi = [
  {
    id: 1,
    name: "Pudim",
    subtitle: "Á moda da Avó",
    imagem: Pudim
  },
  {
    id: 2,
    name: "Salada de Fruta",
    subtitle: "Á moda da Avó",
    imagem: SaladaFruta
  },
  {
    id: 3,
    name: "Gelado de Morango",
    subtitle: "Á moda da Avó",
    imagem: GeladoMorango
  }
]

class Sobremesas extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Sobremesas",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Sobremesas...");
      }
      render(){
        return (
          <View style={style.container}>
            <BarraEstados />
            <ScrollView>
              <View style={style.sobremesasText}>
                <ImageBackground source={require('../assets/fundodrawer.jpg')} style={style.imageBackgound} opacity={0.8}>
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Extras")} size={45} color={"#fff"}></Icon>
                  </View>
                  <Text style={style.title}>{this.state.name}</Text>
                  <Text style={style.text}>Venha se deliciar com a nossa variedade de sobremesas!</Text>
                </ImageBackground>
              </View>
              <View style={style.sobremesas}>
                {
                  dataFromApi.map((item)=>{
                    return (
                      <TouchableOpacity style={style.sobremesasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Produto", {item})}>
                        <Image style={style.sobremesasExpFoto} source={item.imagem} ></Image>
                        <Text style={style.titleSobremesas}>{item.name}</Text>
                        <Text style={style.textSobremesas}>{item.subtitle}</Text>
                      </TouchableOpacity>
                    );
                  })
                }
                <NossoFinal/>
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
      imageBackgound: {
        width: 400,
        height: 320
      },
      title: {
        color: "lightgreen",
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: -10
      },
      text: {
        color: "white",
        fontSize: 22,
        fontStyle: "italic",
        textAlign: 'center',
        fontWeight: 'bold',
        top: 15,
        marginLeft: 20,
        left: -20
      },
      sobremesasText: {
        width: 400,
        height: 320
      },
      sobremesas: {
        width: "100%",
        height: "100%",
      },
      sobremesasExp: {
        marginTop: 30,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      sobremesasExpFoto: {
        width: 180,
        height: 180,
        marginTop: 0
      },
      arrow: {
        marginTop: 45,
        marginLeft: -320
      },
      sobremesasExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      titleSobremesas: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 12
      },
      textSobremesas: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      },
    });

export default Sobremesas;