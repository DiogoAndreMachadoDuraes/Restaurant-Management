import * as React from "react";
import {
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  ImageBackground, 
  Image, 
  ActivityIndicator, 
  FlatList ,
  AsyncStorage
} from "react-native";
import { Icon, PricingCard } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import OwnStatusBar from "./shared/OwnStatusBar.js";

class ProductCategory extends React.Component{
  constructor(){
    super();
    this.state={
      name:"",
      data: [],
      isLoading: true,
    };
  }

  async componentDidMount(){ 
    console.log("Mounting the screen ProductCategory...");

    let token = await AsyncStorage.getItem("token");
    try {
      let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Produto', { 
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      this.setState({
        isLoading: false,
        data: json,
      });
    } catch(e){
      console.log("Error to get Product: " + e);
    }
  }

  _onPress(item) {
    this.props.navigation.navigate("ProductDetail", {
      idProduct: item.id_produto,
      name: item.nome,
      photo: item.foto,
      description: item.descricao,
      price: item.preco
    });
  }
  
  render(){
    const { data, isLoading } = this.state;
    const { navigation, route } = this.props;
    const { type, photo, subtitle } = route.params;
    const typeData=data.filter(a=>a.tipo==type).map(a=>a);
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <ScrollView>
          <View style={style.productCategoryText}>
            <ImageBackground source={photo} style={style.imageBackgound} opacity={0.8}>
              <View style={style.arrow}>
                <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Product")} size={45} color={"#fff"}></Icon>
              </View>
              <Text style={style.title}>{type}</Text>
              <Text style={style.text}>{subtitle}</Text>
            </ImageBackground>
          </View>
          <View style={style.productCategory}>
          {
            isLoading ? <ActivityIndicator/> : (
              <FlatList
                data={typeData}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <TouchableOpacity style={style.productCategoryExp} activeOpacity={0.5} onPress={() => this._onPress(item)}>
                    <Image style={style.productCategoryExpFoto} source={{ uri: '' + item.foto + '' }} ></Image>
                    <Text style={style.titleProductCategory}>{item.nome}</Text>
                    <Text style={style.textProductCategory}>{item.descricao}</Text>
                    <Text style={style.textProductCategory}>{item.preco}€</Text>
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