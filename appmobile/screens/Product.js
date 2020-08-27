import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TouchableOpacity, Image, ActivityIndicator, FlatList, AsyncStorage} from "react-native";
import NossoFinal from "./shared/NossoFinal";
import { OwnHeader } from "./shared/OwnHeader.js";
import OwnStatusBar from "./shared/OwnStatusBar.js";

const product = [
  {
    type: "Hambúrgueres",
    subtitle: "À moda da Avó",
    foto: require('../assets/hamburguer.jpg')
  },
  {
    type: "Francesinhas",
    subtitle: "À moda da Avó",
    foto: require('../assets/francesinha.jpg')
  },
  {
    type: "Pizzas",
    subtitle: "À moda da Avó",
    foto: require('../assets/pizza.jpg')
  },
  {
    type: "Pratos de carne",
    subtitle: "À moda da Avó",
    foto: require('../assets/pratoFrango.jpg')
  },
  {
    type: "Pratos de peixe",
    subtitle: "À moda da Avó",
    foto: require('../assets/salmao.jpg')
  },
  {
    type: "Pratos sem glúten",
    subtitle: "À moda da Avó",
    foto: require('../assets/estrogonofe.jpg')
  },
  {
    type: "Pratos Vegan",
    subtitle: "À moda da Avó",
    foto: require('../assets/legumesAssados.jpg')
  },
  {
    type: "Batata Frita",
    subtitle: "À moda da Avó",
    foto: require('../assets/batataFrita.jpg')
  },
  {
    type: "Saladas",
    subtitle: "À moda da Avó",
    foto: require('../assets/saladaTropical.jpg')
  },
  {
    type: "Sopas",
    subtitle: "À moda da Avó",
    foto: require('../assets/caldoVerde.jpg')
  },
  {
    type: "Bebidas",
    subtitle: "À moda da Avó",
    foto: require('../assets/agua.jpg')
  },
  {
    type: "Sobremesas",
    subtitle: "À moda da Avó",
    foto: require('../assets/geladoMorango.jpg')
  },
  {
    type: "Bebidas Quentes",
    subtitle: "À moda da Avó",
    foto: require('../assets/cafe.jpg')
  }
]

class Product extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoading: true,
      name: "Produtos"
    };
  }

  componentDidMount(){ 
    console.log("Mounting the screen Product...");
  }

  _onPress(item) {
    this.props.navigation.navigate("ProductCategory", {
      type: item.type,
      photo: item.foto,
      subtitle: item.subtitle
    });
  }

  render(){
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackground} >
          <ScrollView>
            <View style={style.product}>
              {
                product.map((item)=>{
                  return (
                    <TouchableOpacity style={style.productExp} activeOpacity={0.5} onPress={()=>this._onPress(item)}>
                      <Image style={style.fotoProduct} source={item.foto} ></Image>
                      <Text style={style.titleProduct}>{item.type}</Text>
                      <Text style={style.textProduct}>{item.subtitle}</Text>
                    </TouchableOpacity>
                  );
                })
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