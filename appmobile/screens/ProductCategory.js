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
import { TouchableOpacity } from "react-native-gesture-handler";
import FinalHeader from "./shared/FinalHeader";
import { OwnHeader } from "./shared/OwnHeader.js";
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
    const { type } = route.params;
    const typeData=data.filter(a=>a.tipo==type).map(a=>a);
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={type} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackground} >
          <ScrollView>
            <View style={style.product}>
              {
                isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={typeData}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={style.productExp} activeOpacity={0.5} onPress={() => this._onPress(item)}>
                        <Image style={style.photoProduct} source={{ uri: '' + item.foto + '' }} ></Image>
                        <Text style={style.titleProduct}>{item.nome}</Text>
                        <Text style={style.textProduct}>
                          <Text style={{fontWeight:"bold"}}>Preço: </Text> 
                          <Text>{item.preco}€</Text>
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                )
              }
              <FinalHeader />
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
  },
  imageBackground: {
    flex: 1
  },
  product: {
    width: "100%",
    height: "100%",
  },
  productExp: {
    marginTop: 30,
    marginLeft: 40,
    padding: 30,
    width: 320,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoProduct: {
    width: 180,
    height: 180
  },
  titleProduct: {
    color: "#000",
    fontSize: 20,
    fontWeight: 'bold',
    top: 12,
    textAlign: 'center'
  },
  textProduct: {
    color: "#000",
    fontSize: 15,
    textAlign: 'center',
    top: 20
  }
});

export default ProductCategory;