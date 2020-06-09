import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, Image, TouchableOpacity } from "react-native";

import {NossoHeader} from './shared/NossoHeader.js';
import NossoFinal from "./shared/NossoFinal.js";
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const restaurante1 = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg" };
const restaurante2 = { uri: "https://nit.pt/wp-content/uploads/2018/11/938be5b746b428231a166de642ab8252-754x394.jpg" };
const restaurante3 = { uri: "https://nit.pt/wp-content/uploads/2020/01/d88769cf5a5c7b24dedda74ceb067407-754x394.jpg" };

const dataFromApi = [
  {
    id: 1,
    rua: "Rua dos lagares, porta 34",
    morada: "4860-071, Lagares, Braga",
    email: "sabordaavo@lagares.pt",
    telefone: "253 668 245",
    imagem: restaurante1
  },
  {
    id: 2,
    rua: "Rua do rio, porta 12",
    morada: "1860-129, Oliva, Beja",
    email: "sabordaavo@oliva.pt",
    telefone: "253 668 245",
    imagem: restaurante2
  },
  {
    id: 3,
    rua: "Rua dos Santos, porta 4",
    morada: "2860-560, Santos, Faro",
    email: "sabordaavo@santo.pt",
    telefone: "253 668 245",
    imagem: restaurante3
  }
]

class Restaurantes extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Restaurantes da Avó",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Restaurante...");
      }
      render(){
        return (
          <View style={style.container}>
            <BarraEstados />
            <NossoHeader nome={this.state.name} navigation={this.props.navigation} />
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={0.5}>
                <ScrollView>
                  <View style={style.restaurantes}>
                    {
                      dataFromApi.map((item)=>{
                        return (
                          <TouchableOpacity style={style.restaurantesExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Produto", {item})}>
                            <Image style={style.restaurantesExpFoto} source={item.imagem} ></Image>
                            <Text style={style.textrestaurantes}>Rua: {item.rua}</Text>
                            <Text style={style.textrestaurantes}>Código Postal: {item.morada}</Text>
                            <Text style={style.textrestaurantes}>Email: {item.email}</Text>
                            <Text style={style.textrestaurantes}>Telefone: {item.telefone}</Text>
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
        backgroundColor: "white"
      },
      imageBackgound: {
        flex: 1
      },
      restaurantes: {
        width: "100%",
        height: "100%",
      },
      restaurantesExp: {
        marginTop: 40,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      restaurantesExpFoto: {
        width: 250,
        height: 250,
        marginTop: 0
      },
      restaurantesExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      textrestaurantes: {
        color: "#000",
        fontSize: 15,
        fontStyle: "italic",
        textAlign: 'center',
        top: 17,
        marginVertical: 3
      }
    });

export default Restaurantes;