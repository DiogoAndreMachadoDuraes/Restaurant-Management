import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image } from "react-native";
import {Header, Icon} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class BebidasFrias extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Bebidas Frias",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã BebidasFrias...");
      }
      render(){
        return (
          <View style={style.container}>
            <StatusBar hidden={false} backgroundColor={'#c6cbef'}></StatusBar>
            <ScrollView>
              <View style={style.bebidasFriasText}>
                <ImageBackground source={require('../assets/fundodrawer.jpg')} style={style.imageBackgound} opacity={0.8}>
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Extras")} size={45} color={"#fff"}></Icon>
                  </View>
                  <Text style={style.title}>{this.state.name}</Text>
                  <Text style={style.text}>Sempre aptos para matar-mos a sua sede. Venha beber connosco!</Text>
                </ImageBackground>
              </View>
              <View style={style.bebidasFrias}>
                <TouchableOpacity style={style.bebidasFriasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("VinhoTinto")}>
                  <Image style={style.bebidasFriasExpFoto} source={require('../src/vinhoTinto.jpg')} ></Image>
                  <Text style={style.titlebebidasFrias}>Vinho Tinto</Text>
                  <Text style={style.textbebidasFrias}>Caseiro</Text>
                </TouchableOpacity>
                <View style={style.bebidasFriasExp}>
                <Image style={style.bebidasFriasExpFoto} source={require('../src/agua.jpg')}></Image>
                  <Text style={style.titlebebidasFrias}>Água</Text>
                  <Text style={style.textbebidasFrias}>Penacova</Text>
                </View>
                <View style={style.bebidasFriasExp}>
                  <Image style={style.bebidasFriasExpFoto} source={require('../src/vinhoBranco.jpg')}></Image>
                  <Text style={style.titlebebidasFrias}>Vinho Branco</Text>
                  <Text style={style.textbebidasFrias}>Caseiro</Text>
                </View>
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
      bebidasFriasText: {
        width: 400,
        height: 320
      },
      bebidasFrias: {
        width: "100%",
        height: 1000,
      },
      bebidasFriasExp: {
        marginTop: 30,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      bebidasFriasExpFoto: {
        width: 180,
        height: 180,
        marginTop: 0
      },
      arrow: {
        marginTop: 45,
        marginLeft: -320
      },
      bebidasFriasExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      titlebebidasFrias: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 12
      },
      textbebidasFrias: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      },
    });

export default BebidasFrias;