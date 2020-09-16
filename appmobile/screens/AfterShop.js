import * as React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  Image, 
  TouchableOpacity
} from "react-native";
import { Button, Card } from 'react-native-paper';

class AfterShop extends React.Component{
  constructor(){
    super();
    this.state={
      name: "Obrigado!",
    };
  }
  
  componentDidMount(){ 
    console.log("Mounting the screen AfterShop...");
  }

  render(){
    const { navigation, route } = this.props;
    const { date, hour } = route.params;

    return (
      <View style={style.container}>
        <StatusBar hidden={false}></StatusBar>
        <View style={style.uperside}>
          <Image source={require("../assets/logo.png")}></Image>
        </View>
        <View style={style.bottom}>
          <Card style={style.card}>
            <Card.Title title="Use este cupão!" subtitle="Cupão: Avó2020Restaurantes" />
            <Card.Cover source={{ uri: 'https://catracalivre.com.br/wp-content/thumbnails/KXbU0w1N4278VvAjHWdsbqTRF0Y=/wp-content/uploads/2020/04/background-910x512.jpeg' }} opacity={1} />
            <Text style={style.itemCard}>
              <Text style={style.textCard}>Data e hora marcada: </Text>
            </Text>
            <Text style={style.itemCard2}>
              <Text style={style.textCard2}>{date} {hour}</Text>
            </Text>
          </Card>
          <TouchableOpacity style={style.progress} onPress={() => this.props.navigation.navigate("Home")}>
            <Text style={style.progressText}>{this.state.name}</Text>
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
    backgroundColor: "#556b2f",
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
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
    top: -100
  },
  text: {
    color: "white",
    fontSize: 18,
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
    width: 120,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 110
  },
  progressText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: "center"
  },
  card:{
    width: 350,
    top: -90,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textCard:{
    color: 'white',
    fontWeight: 'bold',
    top: -160,
    fontSize: 20
  },
  itemCard:{
    color: 'white',
    fontWeight: 'bold',
    top: -160,
    left: 20,
    fontSize: 20
  },
  textCard2:{
    color: 'white',
    top: -140,
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemCard2:{
    top: -90,
    left: 150
  }
});

export default AfterShop;