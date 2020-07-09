import * as React from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

const Cafe = require('../assets/cafe.jpg');
const Cappuccino = require('../assets/cappuccino.jpg');
const CafeLeite = require('../assets/pingo.jpg');

const dataFromApi = [
  {
    id: 1,
    name: "Café",
    subtitle: "Ótimo para todos os momentos",
    imagem: Cafe
  },
  {
    id: 2,
    name: "Cappuccino",
    subtitle: "Cappuccino à moda da Avó",
    imagem: Cappuccino
  },
  {
    id: 3,
    name: "Café com leite",
    subtitle: "Café com leite maravilhoso",
    imagem: CafeLeite
  }
]

class BebidasQuentes extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Bebidas Quentes",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã BebidasQuentes...");
      }
      render(){
        return (
          <View style={style.container}>
            <BarraEstados />
            <ScrollView>
              <View style={style.bebidasQuentesText}>
                <ImageBackground source={require('../assets/fundodrawer.jpg')} style={style.imageBackgound} opacity={0.8}>
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Extras")} size={45} color={"#fff"}></Icon>
                  </View>
                  <Text style={style.title}>{this.state.name}</Text>
                  <Text style={style.text}>Venha tomar algo quente connosco!</Text>
                </ImageBackground>
              </View>
              <View style={style.bebidasQuentes}>
              {
                  dataFromApi.map((item)=>{
                    return (
                      <TouchableOpacity style={style.bebidasQuentesExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Produto", {item})}>
                        <Image style={style.bebidasQuentesExpFoto} source={item.imagem} ></Image>
                        <Text style={style.titlebebidasQuentes}>{item.name}</Text>
                        <Text style={style.textbebidasQuentes}>{item.subtitle}</Text>
                      </TouchableOpacity>
                    );
                  })
                }
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
        top: 15
      },
      bebidasQuentesText: {
        width: 400,
        height: 320
      },
      bebidasQuentes: {
        width: "100%",
        height: 1000,
      },
      bebidasQuentesExp: {
        marginTop: 30,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      bebidasQuentesExpFoto: {
        width: 180,
        height: 180,
        marginTop: 0
      },
      arrow: {
        marginTop: 45,
        marginLeft: -320
      },
      bebidasQuentesExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      titlebebidasQuentes: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 12
      },
      textbebidasQuentes: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      },
    });

export default BebidasQuentes;