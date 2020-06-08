import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TouchableOpacity, Image } from "react-native";
import { Header, Icon } from "react-native-elements";
//import { TouchableRipple } from "react-native-paper";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { StackedBarChart } from 'react-native-svg-charts';
import NossoFinal from './NossoFinal.js';

import Categoria from "./Categoria.js";

const folhada = { uri: "https://receitas.pasteldenata.info/wp-content/uploads/2009/04/forma_de_pasteldenata.jpg" };
const nata = {uri: "https://lh3.googleusercontent.com/proxy/jQptr64FbetvpybFCAlKpnKfBqnivDAiruRWBcRg2gZIZ_i-x_OCJG4BcOFyyTwg6ejdBFTl9XerVouL7CU8boVe8vkGP1L22q4E-XMIu-iPODE7SA"};
const canela = {uri: "https://www.spdm.org.br/media/k2/items/cache/0990257def9e36e39ea94b2cedd7baef_XL.jpg"};
const cafe = {uri: "https://lh3.googleusercontent.com/proxy/Ghd3QYheLDWeXkHjkqb63OmGAjP0RkSbwBDZwkIvgqVuFcLrCvr93b54kb8Ihs62yu6Dqn14tp1CTZfBkBZhXY5gYT7IbkuBcz2cD-1PGgSs1ROxkV1bHxJYyZWclV2v7lUH2Vep"};


class Nata extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Café e Nata",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Cafe e Nata...");
      }
      render(){
       /* const data = [
          {
              month: new Date(2015, 0, 1),
              apples: 3840,
              bananas: 1920,
              cherries: 960,
              dates: 400,
              oranges: 400,
          },
          {
              month: new Date(2015, 1, 1),
              apples: 1600,
              bananas: 1440,
              cherries: 960,
              dates: 400,
          },
          {
              month: new Date(2015, 2, 1),
              apples: 640,
              bananas: 960,
              cherries: 3640,
              dates: 400,
          },
          {
              month: new Date(2015, 3, 1),
              apples: 3320,
              bananas: 480,
              cherries: 640,
              dates: 400,
          },
      ]
      const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
      const keys = ['apples', 'bananas', 'cherries', 'dates']
*/
        return (
          <View style={style.container}>
            <StatusBar hidden={false} backgroundColor={'#556b2f'}></StatusBar>
            <ScrollView>
                <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Doce")} size={45}/>
                </View>
                <View style={style.shop}>
                    <Icon name="local-grocery-store" onPress={()=>this.props.navigation.navigate("Carrinho")} size={40}/>
                </View>
                <Text style={style.title}>{this.state.name}</Text>
                <Image source={require('../assets/cafe.jpg')} style={style.image} opacity={0.8}/>
                <Text style={style.text}> Delicie se com este café e claro, com a nossa nata de sabor a canela.</Text>
                <TouchableOpacity style={style.button} /*onPress={() => this.props.navigation.navigate("Register")}*/>
                  <Text style={style.buttonText}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
                <Text style={style.ingredientesText}>Ingredientes</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Categoria image={cafe} name="Cafe" />
                <Categoria image={folhada} name="Massa folhada" />
                <Categoria image={nata} name="Creme de Nata" />
                <Categoria image={canela} name="Canela" />
               
              </ScrollView>
              <Text style={style.alergeniosText}>Alergénios</Text>
            </ScrollView>
          </View>
        );
      }
    }
    const style = StyleSheet.create({
      container: {
        flex: 1,
      },
      imageBackground: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      image: {
        width: 300,
        height: 300,
        marginTop: 80,
        marginLeft: 50
      },
      imageScroll: {
        width: 100,
        height: 100,
        marginTop: 80,
        marginLeft: 50
      },
      title: {
        color: "#000",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "normal",
        top: 50
      },
      batataFritaText: {
       height: 300
      },
      arrow: {
        marginRight: 300,
        marginTop: 45
      },
      shop: {
        marginLeft: 300,
        marginTop: -40,
        color: "white"
      },
      text: {
        color: "#000",
        fontSize: 18,
        fontStyle: "italic",
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
      },
      button: {
        marginLeft: 40,
        width: 320,
        height: 50,
        marginTop: 25,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'black',
        fontStyle: "italic",
        textAlign: 'center',
        fontWeight: 'bold'
      },
      ingredientesText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
      },
      infoText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
      },
      alergeniosText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
      },
      alergenioText: {
        color: "#000",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20
      },
      companhiaText: {
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 50
      },
      direitosText: {
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      redesText: {
        color: "#000",
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
        marginVertical: 50
      },
      final: {
        backgroundColor: "#c6cbef",
        justifyContent: 'center',
        marginTop: 50
      }
    });
export default Nata;