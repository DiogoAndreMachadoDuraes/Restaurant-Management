import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {NossoHeader} from "./shared/NossoHeader.js";
import NossoFinal from "./shared/NossoFinal.js";
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const PratoPeixe = require('../assets/salmao.jpg');
const PratoSemGluten = require('../assets/estrogonofe.jpg');
const PratoVegan = require('../assets/legumesAssados.jpg');
const BatataFrita = require('../assets/batataFrita.jpg');
const Saladas = require('../assets/saladaTropical.jpg');
const Sopas = require('../assets/caldoVerde.jpg');
const Bebidas = require('../assets/agua.jpg');
const Sobremesas = require('../assets/geladoMorango.jpg');
const BebidasQuentes = require('../assets/cafe.jpg');

const dataFromApi = [
  {
    id: 1,
    name: "Pratos de peixe",
    subtitle: "À moda da Avó",
    imagem: PratoPeixe
  },
  {
    id: 2,
    name: "Pratos sem glúten",
    subtitle: "À moda da Avó",
    imagem: PratoSemGluten
  },
  {
    id: 3,
    name: "Pratos Vegan",
    subtitle: "À moda da Avó",
    imagem: PratoVegan
  },
  {
    id: 4,
    name: "Batata Frita",
    subtitle: "À moda da Avó",
    imagem: BatataFrita
  },
  {
    id: 5,
    name: "Saladas",
    subtitle: "À moda da Avó",
    imagem: Saladas
  },
  {
    id: 6,
    name: "Sopas",
    subtitle: "À moda da Avó",
    imagem: Sopas
  },
  {
    id: 7,
    name: "Bebidas",
    subtitle: "À moda da Avó",
    imagem: Bebidas
  },
  {
    id: 8,
    name: "Sobremesas",
    subtitle: "À moda da Avó",
    imagem: Sobremesas
  },
  {
    id: 9,
    name: "Bebidas Quentes",
    subtitle: "À moda da Avó",
    imagem: BebidasQuentes
  }
]

class Extras extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Extras",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Extras...");
      }
      render(){
        return (
          <View style={style.container}>
            <BarraEstados />
            <NossoHeader nome={this.state.name} navigation={this.props.navigation} />
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>
              <ScrollView>
                <View style={style.extras}>
                  {
                    dataFromApi.map((item)=>{
                      return (
                        <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Sobremesas", {item})}>
                          <Image style={style.extrasExpFoto} source={item.imagem} ></Image>
                          <Text style={style.titleExtras}>{item.name}</Text>
                          <Text style={style.textExtras}>{item.subtitle}</Text>
                        </TouchableOpacity>
                      );
                    })
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
        backgroundColor: "black"
      },
      imageBackgound: {
        flex: 1
      },
      text: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: "italic",
      },
      button: {
        width: 100,
        height: 42,
        marginTop: -100,
        backgroundColor: 'black',
        borderRadius: 10,
      },
      extras: {
        width: "100%",
        height: "100%",
      },
      extrasExp: {
        marginTop: 30,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      extrasExpFoto: {
        width: 180,
        height: 180,
        marginTop: 0
      },
      arrow: {
        marginTop: 45,
        marginLeft: -320
      },
      extrasExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      titleExtras: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 12,
        textAlign: 'center'
      },
      textExtras: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      }
    });

export default Extras;