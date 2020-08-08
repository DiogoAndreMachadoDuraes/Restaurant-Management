import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TouchableOpacity, Image, ActivityIndicator, FlatList, AsyncStorage} from "react-native";
import NossoFinal from "./shared/NossoFinal";
import { OwnHeader } from "./shared/OwnHeader.js";
import OwnStatusBar from "./shared/OwnStatusBar.js";

class Product extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoading: true,
      name: "Produtos"
    };
    {
      this.storeData();
    }
  }

  async componentDidMount(){ 
    console.log("Mounting the screen Product...");

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
        dataSource: json,
      });
    } catch(e){
      console.log("Error to get data: " + e);
    }
  }

  storeData = async () => {
    try {
      AsyncStorage.setItem("Product", this.state.dataSource);
    } catch (e) {
      console.log("Error to do AsyncStorage: " + e);
    }
  };

  _onPress(item) {
    this.props.navigation.navigate("ProductCategory", {
      itemId: item.id,
      name: item.nome,
      description: item.descricao,
      foto: item.foto
    });
  }

  render(){
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <View style={style.container}>
          <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackground} >
            <ActivityIndicator size="large" color="#556b2f" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 80 }}/>
            <Text>Carregando a informação...</Text>
          </ImageBackground>
        </View>
      );
    }
    
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackground} >
          <ScrollView>
            <View style={style.product}>
              <FlatList
                data={this.state.dataSource}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <TouchableOpacity style={style.productExp} activeOpacity={0.5} onPress={()=>this._onPress(item)}>
                    <Image style={style.fotoProduct} source={{uri:''+item.foto+''}} ></Image>
                    <Text style={style.titleProduct}>{item.nome}</Text>
                    <Text style={style.textProduct}>{item.descricao}</Text>
                  </TouchableOpacity>
                )}
              />
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
    flex: 1
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
  fotoProduct: {
    width: 180,
    height: 180,
    marginTop: 0
  },
  titleProduct: {
    color: "#000",
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: "italic",
    top: 12,
    textAlign: 'center'
  },
  textProduct: {
    color: "#000",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: 'center',
    top: 20
  }
});

export default Product;