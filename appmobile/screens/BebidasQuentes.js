import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image } from "react-native";
import {Header, Icon} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class BebidasQuentes extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Bebidas Quentes",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã BebidasQuentes...");
      }
      render(){
        return (
          <View style={style.container}>
            <StatusBar hidden={false} backgroundColor={'#c6cbef'}></StatusBar>
            <ScrollView>
              <View style={style.bebidasQuentesText}>
                <ImageBackground source={require('../assets/fundodrawer.jpg')} style={style.imageBackgound} opacity={0.8}>
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Extras")} size={45} color={"#fff"}></Icon>
                  </View>
                  <Text style={style.title}>{this.state.name}</Text>
                  <Text style={style.text}>Venha tomar algo quente connosco!</Text>
                </ImageBackground>
              </View>
              <View style={style.bebidasQuentes}>
                <TouchableOpacity style={style.bebidasQuentesExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Cafe")} >
                  <Image style={style.bebidasQuentesExpFoto} source={require('../assets/cafe.jpg')} ></Image>
                  <Text style={style.titlebebidasQuentes}>Café</Text>
                  <Text style={style.textbebidasQuentes}>DolceGusto</Text>
                </TouchableOpacity>
                <View style={style.bebidasQuentesExp}>
                  <Image style={style.bebidasQuentesExpFoto} source={require('../assets/cappuccino.jpg')} ></Image>
                  <Text style={style.titlebebidasQuentes}>Cappuccino</Text>
                  <Text style={style.textbebidasQuentes}>À moda da Avó</Text>
                </View>
                <View style={style.bebidasQuentesExp}>
                  <Image style={style.bebidasQuentesExpFoto} source={require('../assets/pingo.jpg')}></Image>
                  <Text style={style.titlebebidasQuentes}>Café com leite</Text>
                  <Text style={style.textbebidasQuentes}>Café com leite meio gordo</Text>
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
      bebidasQuentesText: {
        width: 400,
        height: 320
      },
      bebidasQuentes: {
        width: "100%",
        height: 1000,
      },
      bebidasQuentesExp: {
        marginTop: 30,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      bebidasQuentesExpFoto: {
        width: 180,
        height: 180,
        marginTop: 0
      },
      arrow: {
        marginTop: 45,
        marginLeft: -320
      },
      bebidasQuentesExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      titlebebidasQuentes: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 12
      },
      textbebidasQuentes: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      },
    });

export default BebidasQuentes;