import * as React from "react";
import {
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  ImageBackground, 
  Image, 
  ActivityIndicator, 
  FlatList 
} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import BarraEstados from "./shared/BarraEstados.js";
import Categoria from "./shared/Categoria.js";

class ProductCategory extends React.Component{
  constructor(){
    super();
    this.state={
        name:"Bebidas Quentes",
        data: [],
        isLoading: true,
    };
  }

  async componentDidMount(){ 
    console.log("Mounting the screen ProductCategory...");

    try {
      let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Produto', { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      console.log(json);
      this.setState({
        isLoading: false,
        data: json,
      });
    } catch(e){
      console.log("Error to get data: " + e);
    }
  }

  _onPress(item) {
    this.props.navigation.navigate("ProductDetail", {item});
  }
  
  render(){
    const { data, isLoading } = this.state;
    return (
      <View style={style.container}>
        <BarraEstados />
        <ScrollView>
          <View style={style.productCategoryText}>
            <ImageBackground source={require('../assets/fundodrawer.jpg')} style={style.imageBackgound} opacity={0.8}>
              <View style={style.arrow}>
                <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Product")} size={45} color={"#fff"}></Icon>
              </View>
              <Text style={style.title}>{this.state.name}</Text>
              <Text style={style.text}>Venha tomar algo quente connosco!</Text>
            </ImageBackground>
          </View>
          <View style={style.productCategory}>
          {
            isLoading ? <ActivityIndicator/> : (
              <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <TouchableOpacity style={style.productCategoryExp} activeOpacity={0.5} onPress={() => this._onPress(item)}>
                    <Image style={style.productCategoryExpFoto} source={{ uri: '' + item.foto + '' }} ></Image>
                    <Text style={style.titleProductCategory}>{item.nome}</Text>
                    <Text style={style.textProductCategory}>{item.descricao}</Text>
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
  productCategoryText: {
    width: 400,
    height: 320
  },
  productCategory: {
    width: "100%",
    height: 1000,
  },
  productCategoryExp: {
    marginTop: 30,
    marginLeft: 40,
    padding: 30,
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productCategoryExpFoto: {
    width: 180,
    height: 180,
    marginTop: 0
  },
  arrow: {
    marginTop: 45,
    marginLeft: -320
  },
  productCategoryExpText: {
    width: 180,
    height: 180,
    marginTop: -150,
  },
  titleProductCategory: {
    color: "#000",
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: "italic",
    top: 12
  },
  textProductCategory: {
    color: "#000",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: 'center',
    top: 20
  },
});

export default ProductCategory;