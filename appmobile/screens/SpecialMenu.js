import * as React from "react";
import {StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, ImageBackground, Image, TouchableOpacity } from "react-native";
import NossoFinal from './shared/NossoFinal.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { OwnHeader } from './shared/OwnHeader';


const imageBackgound = { uri: "https://assets.tivolihotels.com/image/upload/q_auto,f_auto/media/minor/tivoli/images/hotels/tmpo/dinning/top-images/tivoli_marina_portimao_restaurants_top_image_1920x1000.jpg" };

const Dia = require('../assets/dia.jpg');
const Aniversario = require('../assets/aniversario.jpg');
const Batizado = require('../assets/batizado.jpg');
const Baby = require('../assets/baby.jpg');
const Casamento = require('../assets/casamento.jpg');

const dataFromApi = [
  {
    id: 1,
    tipo: "Prato do Dia",
    imagem: Dia
  },
  {
    id: 2,
    tipo: "Baby Shower",
    imagem: Baby
  },
  {
    id: 3,
    tipo: "Batizados",
    imagem: Batizado
  },
  {
    id: 4,
    tipo: "Aniversários",
    imagem: Aniversario
  },

  {
    id: 5,
    tipo: "Casamentos",
    imagem: Casamento
  }

]

class SpecialMenu extends React.Component{
    constructor(){
        super();
        this.state={
          tipo:"Ementa",
          data:[],
          isLoading: true
        };
      }
      async componentDidMount(){ 
        console.log("Mounting the screen SpecialMenu...");

        await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Ementa', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
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
        const { isLoading } = this.state;
        return (
          <View style={style.container}>
            <OwnStatusBar />
            <OwnHeader nome={this.state.tipo} navigation={this.props.navigation} />
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>
              <ScrollView>
              <View style={style.menu}>
              {
                isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={this.state.data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={style.menuExp} activeOpacity={0.3} onPress={()=>this.props.navigation.navigate("Home", {item})}>
                          <Image style={style.menuExpFoto} source={item.imagem} ></Image>
                          <Text style={style.titleMenu}>{item.tipo}</Text>
                          <Text style={style.textMenu}>{item.subtitle}</Text>
                        </TouchableOpacity>
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