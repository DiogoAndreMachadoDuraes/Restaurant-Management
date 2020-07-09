import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TouchableOpacity, Image, ActivityIndicator, FlatList } from "react-native";
import { Icon } from "react-native-elements";

import NossoFinal from "./shared/NossoFinal";
import BarraEstados from "./shared/BarraEstados.js";
//import { StackedBarChart } from 'react-native-svg-charts';

const VinhoTinto = require('../assets/vinhoTinto.jpg');
const VinhoBranco = require('../assets/vinhoBranco.jpg');
const Agua = require('../assets/agua.jpg');

class Produto extends React.Component{
    constructor(){
        super();
        this.state = {
          data: [],
          isLoading: true
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Produto...");
        fetch('localhost/Ementas-de-Restauracao/index.php/Utilizador').then((response) => response.json())
        .then((json) => {
          this.setState({ data: json.movies });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });;
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

const { data, isLoading } = this.state;
        return (
          <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
          /*<View style={style.container}>
            <BarraEstados />
            <ScrollView>
                <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Extras")} size={45}/>
                </View>
                <View style={style.shop}>
                    <Icon name="local-grocery-store" onPress={()=>this.props.navigation.navigate("Carrinho")} size={40}/>
                </View>
                { /*
                  dataFromApi.map((item) => {
                    return (
                        <Text style={style.title}>{item.nome}</Text>
                        <Image source={item.imagem} style={style.image} opacity={0.8}/>
                        <Text style={style.text}>{item.subtitle}</Text>
                        <TouchableOpacity style={style.button} /*onPress={() => this.props.navigation.navigate("Register")}>
                            <Text style={style.buttonText}>Adicionar ao carrinho</Text>
                        </TouchableOpacity>
                        <Text style={style.infoText}>Informação Nutricional</Text>
                        <Text style={style.alergeniosText}>Alergenios</Text>
                        <Text style={style.alergenioText}>Não contém alergenios.</Text>
                    );
                  })
                
                <NossoFinal />
            </ScrollView>
          </View>
          */
        
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
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
      },
      ProdutoText: {
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
      }
    });

export default Produto;