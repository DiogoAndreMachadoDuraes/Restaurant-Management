import * as React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  Image, 
  TouchableOpacity, 
  ActivityIndicator, 
  FlatList 
} from "react-native";

const restaurante1 = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg" };

class AfterShop extends React.Component{
  constructor(){
      super();
      this.state={
        data: [],
        isLoading: true,
        name: "Obrigado pela sua reserva",
      };
    }
    async componentDidMount(){ 
      console.log("Mounting the screen AfterShop...");
  
      try {
        let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Reserva', { 
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        });
        let data = await response.json();
        console.log(data);
        this.setState({
          isLoading: false,
          dataSource: data,
        });
      } catch(e){
        console.log("Error to get data: "+e);
      }
    }

    render(){
      const { data, isLoading } = this.state;
      return (
        <View style={style.container}>
          <StatusBar hidden={false}></StatusBar>
          <View style={style.uperside}>
            <Image source={require("../assets/logo.png")}></Image>
          </View>
          <View style={style.bottom}>
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
            <TouchableOpacity style={style.progress} /*onPress={() => this.props.navigation.navigate("Home")}*/>
                <Text style={style.progressText}>Guardar reserva</Text>
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
  uperside: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom:{
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
  progress: {
      width: 100,
      height: 42,
      backgroundColor: 'red',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      left: 100,
      top: 60
  },
  progressText:{
      fontSize: 16,
      fontWeight: 'bold',
      color: 'yellow',
      textAlign: "center"
  },
});

export default AfterShop;