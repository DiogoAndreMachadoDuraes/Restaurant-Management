import * as React from "react";
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const restaurante1 = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg" };

class Agradecimento extends React.Component{
  constructor(){
      super();
      this.state={
        data: [],
        isLoading: true,
        name:"Obrigado pela sua reserva",
      };
    }
    async componentDidMount(){ 
      console.log("Montando o ecrã Agradecimento...");
  
      await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Reserva', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
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
          <StatusBar hidden={false}></StatusBar>
          <View style={style.parteCima}>
            <Image source={require("../assets/logo.png")}></Image>
          </View>
          <View style={style.parteBaixo}>
            <Text style={style.title}>{this.state.name}</Text>
            {
              isLoading ? <ActivityIndicator/> : (
                <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={1}>
                      <Text style={style.text}> Reserva número: {item.id_reserva} </Text>
                      <Text style={style.text}> Data Marcada: {item.data_marcada} </Text>
                      <Text style={style.text}> Hora Marcada: {item.hora_marcada} </Text>
                      <Image style={style.image} source={restaurante1/*{uri:''+item.foto+''}*/}></Image>
                    </TouchableOpacity>
                  )}
                />
              )
            }
            <TouchableOpacity style={style.avancar} /*onPress={() => this.props.navigation.navigate("Home")}*/>
                <Text style={style.avancarText}>Guardar reserva</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}
    
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  parteCima: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  parteBaixo:{
    flex: 1.5,
    backgroundColor: "grey",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBackgound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: "red",
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: "italic",
    top: -40
  },
  text: {
    color: "yellow",
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: "italic",
    top: 10
  },
  image: {
    width: 100,
    height: 100,
    top: 20
  },
  avancar: {
      width: 100,
      height: 42,
      backgroundColor: 'red',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      left: 100,
      top: 60
  },
  avancarText:{
      fontSize: 16,
      fontWeight: 'bold',
      color: 'yellow',
      textAlign: "center"
  },
});

export default Agradecimento;