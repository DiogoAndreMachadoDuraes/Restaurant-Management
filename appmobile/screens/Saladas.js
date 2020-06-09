import * as React from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import NossoFinal from "./shared/NossoFinal.js";
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const SaladaTropical = { uri: "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-3453-871ff3a4e3844b0fe17f8bc6e192b71b.jpg" };
const SaladaAtum = { uri: "https://www.teleculinaria.pt/wp-content/uploads/2017/07/salada-de-atum-com-feijao-frade.jpg" };
const SaladaFrango = { uri: "https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/bdm/salada-ceasar-mc-donalds.png" };

const dataFromApi = [
  {
    id: 1,
    name: "Salada Tropical",
    subtitle: "Salada com alface, cenoura, azeitonas, tomate, manga e ananás",
    imagem: SaladaTropical
  },
  {
    id: 2,
    name: "Salada de Atum",
    subtitle: "Salada com alface, ovo, atum, salsa, pimento, cebola, tomate e feijão frade",
    imagem: SaladaAtum
  },
  {
    id: 3,
    name: "Salada de Frango",
    subtitle: "Salada com alface, frango, cebola, tomate e couve roxa",
    imagem: SaladaFrango
  }
]

class Saladas extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Saladas",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Saladas...");
      }
      render(){
        return (
          <View style={style.container}>
            <BarraEstados />
            <ScrollView>
              <View style={style.saladasText}>
                <ImageBackground source={require('../assets/fundodrawer.jpg')} style={style.imageBackgound} opacity={0.8}>
                  <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Extras")} size={45} color={"#fff"}></Icon>
                  </View>
                  <Text style={style.title}>{this.state.name}</Text>
                  <Text style={style.text}>Frescura e muito deliciosas, venha provar!</Text>
                </ImageBackground>
              </View>
              <View style={style.saladas}>
                {
                  dataFromApi.map((item)=>{
                    return (
                      <TouchableOpacity style={style.saladasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Produto", {item})}>
                        <Image style={style.saladasExpFoto} source={item.imagem} ></Image>
                        <Text style={style.titleSaladas}>{item.name}</Text>
                        <Text style={style.textSaladas}>{item.subtitle}</Text>
                      </TouchableOpacity>
                    );
                  })
                }
                <NossoFinal/>
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
      saladasText: {
        width: 400,
        height: 320
      },
      saladas: {
        width: "100%",
        height: "100%",
      },
      saladasExp: {
        marginTop: 30,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      saladasExpFoto: {
        width: 180,
        height: 180,
        marginTop: 0
      },
      arrow: {
        marginTop: 45,
        marginLeft: -320
      },
      saladasExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      titleSaladas: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 12
      },
      textSaladas: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      },
    });

export default Saladas;