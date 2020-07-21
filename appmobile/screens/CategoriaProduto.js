import * as React from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, ActivityIndicator, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import BarraEstados from "./shared/BarraEstados.js";
import Categoria from "./shared/Categoria.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class CategoriaProduto extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Bebidas Quentes",
            data: [],
            isLoading: true,
        };
      }
      async componentDidMount(){ 
        console.log("Montando o ecrã CategoriaProduto...");
    
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
            <ScrollView>
              <View style={style.CategoriaProdutoText}>
                <ImageBackground source={require('../assets/fundodrawer.jpg')} style={style.imageBackgound} opacity={0.8}>
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Produto")} size={45} color={"#fff"}></Icon>
                  </View>
                  <Text style={style.title}>{this.state.name}</Text>
                  <Text style={style.text}>Venha tomar algo quente connosco!</Text>
                </ImageBackground>
              </View>
              <View style={style.CategoriaProduto}>
              {
                isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={style.CategoriaProdutoExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("DetalhesProduto", {item})}>
                        <Image style={style.CategoriaProdutoExpFoto} source={{uri:''+item.foto+''}} ></Image>
                        <Text style={style.titleCategoriaProduto}>{item.nome}</Text>
                        <Text style={style.textCategoriaProduto}>{item.descricao}</Text>
                      </TouchableOpacity>
                    )}
                  />
                )
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
      CategoriaProdutoText: {
        width: 400,
        height: 320
      },
      CategoriaProduto: {
        width: "100%",
        height: 1000,
      },
      CategoriaProdutoExp: {
        marginTop: 30,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      CategoriaProdutoExpFoto: {
        width: 180,
        height: 180,
        marginTop: 0
      },
      arrow: {
        marginTop: 45,
        marginLeft: -320
      },
      CategoriaProdutoExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      titleCategoriaProduto: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 12
      },
      textCategoriaProduto: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      },
    });

export default CategoriaProduto;