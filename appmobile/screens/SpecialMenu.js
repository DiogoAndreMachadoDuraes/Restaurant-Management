import * as React from "react";
import {StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity } from "react-native";
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { OwnHeader } from './shared/OwnHeader';

const dataFromApi = [
  {
    id: 1,
    tipo: "Prato do Dia",
    imagem:  require('../assets/dia.jpg')
  },

  {
    id: 2,
    tipo: "Baby Shower",
    imagem: require('../assets/baby.jpg')
  },

  {
    id: 3,
    tipo: "Batizados",
    imagem: require('../assets/batizado.jpg')
  },

  {
    id: 4,
    tipo: "Aniversários",
    imagem: require('../assets/aniversario.jpg')
  },

  {
    id: 5,
    tipo: "Casamentos",
    imagem: require('../assets/casamento.jpg')
  }

]

class SpecialMenu extends React.Component{
  constructor(){
      super();
      this.state={
        type:"Ementa"
      };
    }
  componentDidMount(){ 
    console.log("Mounting the screen SpecialMenu...");  
  }

  onPress(item){
    this.props.navigation.navigate("CallTypeSpecialMenu", {type:item.tipo});
  }
    
  render(){
      return (
        <View style={style.container}>
          <OwnStatusBar />
          <OwnHeader nome={this.state.type} navigation={this.props.navigation} />
          <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} opacity={1}>
            <ScrollView>
            <View style={style.menu}>
            { dataFromApi.map((item)=>{
                return(<TouchableOpacity style={style.menuExp} activeOpacity={0.3} onPress={()=>this.onPress(item)}>
                  <Image style={style.menuExpFoto} source={item.imagem} ></Image>
                  <Text style={style.titleMenu}>{item.tipo}</Text>
                  <Text style={style.textMenu}></Text>
                </TouchableOpacity>);
              })
            }
                <FinalHeader />
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

  imageBackgound: {                         //foto por tras do titulo
    flex:1,
  },

  image: {                         //foto por tras do titulo
    width: 420,
    height: 250,
  },

  text: {                       
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: 'center',
    fontWeight: 'bold',
    top: 30,
    opacity: 1,
  },

  menuText: {
    width: 400,
    height: 320
  },

  menu: {                           //scrollview
    width: "100%",
    height: "100%",
  },

  menuExp: {
    marginTop: 25,
    top: 20,
    marginLeft: 80,
    width: 260,
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  menuExpFoto: {
    width: 240,
    height: 130,
    marginTop: 30
  },

  boxText2:{
    width: 40,
    height: 40,
    backgroundColor: '#000',
    opacity: 1,
    top: 40,
    marginLeft: 31,
    borderRadius: 5,
},
  titleMenu: {
    color: "#556b2f",
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: "normal",
    top: -3
  },

  textMenu: {
    color: "#000",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: 'center',
    top: 20
  }
});
export default SpecialMenu;