import * as React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  ImageBackground, 
  Image, 
  FlatList, 
  ActivityIndicator
} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import NossoFinal from "./shared/NossoFinal.js";
import BarraEstados from "./shared/BarraEstados.js";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class Restaurant extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Restaurantes da Avó",
    };
  }

  async componentDidMount(){ 
    console.log("Mounting the screen Restaurant...");

    try {
      let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Restaurante', { 
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
  
  render(){
    const { isLoading } = this.state;
    return (
      <View style={style.container}>
        <BarraEstados />
        <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} >
          <ScrollView>
            <View style={style.restaurantes}>
              {
                isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={this.state.dataSource}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                      <TouchableWithoutFeedback style={style.restaurantesExp}>
                        <Image style={style.restaurantesExpFoto} source={{uri:''+item.foto+''}} ></Image>
                        <Text style={style.textNome}>{item.nome}</Text>
                        <Text style={style.textrestaurantes}>Morada: {item.rua}, {item.codigo_postal}, {item.localizacao}</Text>
                        <Text style={style.textrestaurantes}>Email: {item.email}</Text>
                        <Text style={style.textrestaurantes}>Telefone: {item.telefone}</Text>
                      </TouchableWithoutFeedback>
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
    flex: 1
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

export default Restaurant;