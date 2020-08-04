import * as React from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground } from "react-native";
import {Header, Icon} from "react-native-elements";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class TakeAway extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Take Away",
        };
      }
      componentDidMount(){ 
        console.log("Mounting the screen TakeAway...");
      }
      render(){
        return (
          <View style={style.container}>
          <ImageBackground style={style.imageBackground} opacity={0.4}>

            <ScrollView>
            <View style={style.menu}>
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>

              <View style={style.menuText}>
                <ImageBackground source={require('../assets/take.jpg')} style={style.imageBackgound} opacity={0.8}>             
                <View>
                <Text style={style.text}>Data marcada : José Leite Machado</Text> 
                <Text style={style.text}>Hora marcada : José Leite Machado</Text> 
                <Text style={style.text}>Quantidade de pessoas : José Leite Machado</Text> 
                <Text style={style.text}>Nome da reserva : José Leite Machado</Text> 
                <Text style={style.text}>Valor total : José Leite Machado</Text> 
                <Text style={style.text}>Estado da reserva : José Leite Machado</Text> 
                </View>
                </ImageBackground>
              </View>
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
        flex: 1,
        color: "white",
      },

      menu: {                           //scrollview
        width: "100%",
        height: 1690,
      },

      imageBackgound: {                         //foto por tras do titulo
        width: 395,
        height: 200,
        marginLeft: 0,
        top: 0,
        opacity: 1,
      },

      text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 30,
        top: 250,
    }
     
    });
export default TakeAway;