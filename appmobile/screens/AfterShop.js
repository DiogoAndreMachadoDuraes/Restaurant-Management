import * as React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  Image, 
  TouchableOpacity
} from "react-native";

class AfterShop extends React.Component{
  constructor(){
      super();
      this.state={
        name: "Obrigado pela sua reserva",
      };
    }
    
    componentDidMount(){ 
      console.log("Mounting the screen AfterShop...");
    }

    render(){
      const { navigation, route } = this.props;
      const { item } = route.params;
      return (
        <View style={style.container}>
          <StatusBar hidden={false}></StatusBar>
          <View style={style.uperside}>
            <Image source={require("../assets/logo.png")}></Image>
          </View>
          <View style={style.bottom}>
            <Text style={style.title}>{this.state.name}</Text>
            <TouchableOpacity>
              <Text style={style.text}>Reserva número: {item.id_reserva}</Text>
              <Text style={style.text}>Data Marcada: {item.data_marcada}</Text>
              <Text style={style.text}>Hora Marcada: {item.hora_marcada}</Text>
              <Image style={style.image} source={{uri:''+item.foto+''}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={style.progress} onPress={() => this.props.navigation.navigate("Home")}>
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