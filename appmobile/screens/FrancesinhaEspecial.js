import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TouchableOpacity, Image } from "react-native";
import { Header, Icon } from "react-native-elements";
import { TouchableRipple } from "react-native-paper";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { StackedBarChart } from 'react-native-svg-charts';
import NossoFinal from './NossoFinal.js';

import Categoria from "./Categoria.js";

const alface = { uri: "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=NGNl88jzGknot26JMojOuazXgJK7LxXKMWes/sScQk5fBN0SWv2+xq8Og5AdjwcYXZJl2CwN0AY5Ofv1E2o6thyTdQ==" };
const tomate = { uri: "https://img.freepik.com/fotos-gratis/um-tomate-vermelho-fresco-isolado-no-branco_1205-548.jpg?size=626&ext=jpg" };

class FrancesinhaEspecial extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Francesinha Especial",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Francesinha Especial...");
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
            <StatusBar hidden={false} backgroundColor={'#c6cbef'}></StatusBar>
            <ScrollView>
                <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Francesinha")} size={45}/>
                </View>
                <View style={style.shop}>
                    <Icon name="local-grocery-store" onPress={()=>this.props.navigation.navigate("Carrinho")} size={40}/>
                </View>
                <Text style={style.title}>{this.state.name}</Text>
                <Image source={require('../assets/francesinha.jpg')} style={style.image} opacity={0.8}/>
                <Text style={style.text}> Francesinha Especial com queijo, fiambre, chouriço, bife de vitela e ovo. O segredo desta maravilha está no molho feito pela Avó.</Text>
                <TouchableOpacity style={style.button} /*onPress={() => this.props.navigation.navigate("Register")}*/>
                  <Text style={style.buttonText}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
              <Text style={style.ingredientesText}>Ingredientes</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             
                <Categoria image={require('../assets/chourico.jpg')} name="Chourico"  />
                <Categoria image={require('../assets/queijo.jpg')} name="Queijo"  />
                <Categoria image={require('../assets/fiambre.jpg')} name="Fiambre" />
                <Categoria image={require('../assets/ovo.jpg')} name="Ovo" />
                <Categoria image={require('../assets/molho.jpg')} name="Molho" />
                <Categoria image={require('../assets/bife.jpg')} name="Bife" />
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
    
      title: {
        color: "#000",
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
      },
      salmaoText: {
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

export default FrancesinhaEspecial;