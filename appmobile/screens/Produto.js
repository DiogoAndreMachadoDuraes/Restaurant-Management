import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TouchableOpacity, Image, ActivityIndicator, FlatList } from "react-native";
import { Icon } from "react-native-elements";

import NossoFinal from "./shared/NossoFinal";
import {NossoHeader} from "./shared/NossoHeader.js";
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Produto extends React.Component{
  constructor(){
      super();
      this.state = {
        data: [],
        isLoading: true,
        name: "Produtos"
      };
  }
  async componentDidMount(){ 
    console.log("Montando o ecrã Produto...");

    await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Produto', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
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
            <View style={style.produto}>
              {
                isLoading ? <ActivityIndicator style={{justifyContent:"center"}}/> : (
                  <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={style.produtoExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("CategoriaProduto", {item})}>
                        <Image style={style.fotoProduto} source={{uri:''+item.foto+''}} ></Image>
                        <Text style={style.titleProduto}>{item.nome}</Text>
                        <Text style={style.textProduto}>{item.descricao}</Text>
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
    )
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
  produto: {
    width: "100%",
    height: "100%",
  },
  produtoExp: {
    marginTop: 30,
    marginLeft: 40,
    padding: 30,
    width: 320,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotoProduto: {
    width: 180,
    height: 180,
    marginTop: 0
  },
  titleProduto: {
    color: "#000",
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: "italic",
    top: 12,
    textAlign: 'center'
  },
  textProduto: {
    color: "#000",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: 'center',
    top: 20
  }
});

export default Produto;