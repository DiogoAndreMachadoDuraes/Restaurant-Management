import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, Image, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";

import {NossoHeader} from './shared/NossoHeader.js';
import NossoFinal from "./shared/NossoFinal.js";
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const restaurante1 = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg" };
const restaurante2 = { uri: "https://nit.pt/wp-content/uploads/2018/11/938be5b746b428231a166de642ab8252-754x394.jpg" };
const restaurante3 = { uri: "https://nit.pt/wp-content/uploads/2020/01/d88769cf5a5c7b24dedda74ceb067407-754x394.jpg" };

class Restaurantes extends React.Component{
  constructor(){
      super();
      this.state={
        name:"Restaurantes da Avó",
      };
    }
  async componentDidMount(){ 
    console.log("Montando o ecrã Restaurante...");

    await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Restaurante', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json, isLoading:false });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
    });
  }
  render(){
    const { data, isLoading } = this.state;
    return (
      <View style={style.container}>
        <BarraEstados />
        <NossoHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={imageBackgound} style={style.imageBackgound} >
          <ScrollView>
            <View style={style.restaurantes}>
              {
                isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={style.restaurantesExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Produto", {item})}>
                        <Image style={style.restaurantesExpFoto} source={item.foto} ></Image>
                        <Text style={style.textNome}>{item.nome}</Text>
                        <Text style={style.textrestaurantes}>Morada: {item.rua}, {item.codigo_postal}, {item.localizacao}</Text>
                        <Text style={style.textrestaurantes}>Email: {item.email}</Text>
                        <Text style={style.textrestaurantes}>Telefone: {item.telefone}</Text>
                      </TouchableOpacity>
                    )}
                  />
                )
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
  textNome: {
    color: "#000",
    fontSize: 28,
    fontStyle: "italic",
    textAlign: 'center',
    top: 17,
    marginVertical: 8
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