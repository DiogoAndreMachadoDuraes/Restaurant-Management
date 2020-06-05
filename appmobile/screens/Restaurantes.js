import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image, TouchableOpacity } from "react-native";
import {Header, Icon} from "react-native-elements";
import { SocialIcon } from 'react-native-elements';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const restaurante1 = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg" };
const restaurante2 = { uri: "https://nit.pt/wp-content/uploads/2018/11/938be5b746b428231a166de642ab8252-754x394.jpg" };
const restaurante3 = { uri: "https://nit.pt/wp-content/uploads/2020/01/d88769cf5a5c7b24dedda74ceb067407-754x394.jpg" };

class Restaurantes extends React.Component{
    constructor(){
        super();
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Restaurante...");
      }
      render(){
        return (
          <View style={style.container}>
          <StatusBar hidden={false} barStyle={"dark-content"} backgroundColor={'white'}></StatusBar>
            <Header
                leftComponent={<Icon name="menu" color= '#fff' size={30} onPress={() => this.props.navigation.toggleDrawer()}/>}
                centerComponent={<Text style={{fontSize: 22, fontWeight: 'bold', fontStyle: 'italic', color: '#fff', marginTop: -20}}>Restaurantes da Avó</Text>}
                rightComponent={<Icon name="local-grocery-store" color= '#fff' size={30} onPress={() => this.props.navigation.navigate("Carrinho")}/>}
                containerStyle={{
                  backgroundColor: "green",
                  justifyContent: 'space-around',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderColor: "white",
                  height: 80,
                }}
            />
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={0.5}>
                <ScrollView>
                  <View style={style.restaurantes}>
                    <View style={style.restaurantesExp}>
                      <Image style={style.restaurantesExpFoto} source={restaurante1}></Image>
                      <Text style={style.textrestaurantes}>Rua dos lagares, porta 34</Text>
                      <Text style={style.textrestaurantes}>4860-071, Lagares, Braga</Text>
                      <Text style={style.textrestaurantes}>Email: sabordaavo@lagares.pt</Text>
                      <Text style={style.textrestaurantes}>Telefone: 253 668 245</Text>
                    </View>
                    <View style={style.restaurantesExp}>
                      <Image style={style.restaurantesExpFoto} source={restaurante2}></Image>
                      <Text style={style.textrestaurantes}>Rua do rio, porta 12</Text>
                      <Text style={style.textrestaurantes}>1860-129, Oliva, Beja</Text>
                      <Text style={style.textrestaurantes}>Email: sabordaavo@oliva.pt</Text>
                      <Text style={style.textrestaurantes}>Telefone: 253 668 245</Text>
                    </View>
                    <View style={style.restaurantesExp}>
                      <Image style={style.restaurantesExpFoto} source={restaurante3}></Image>
                      <Text style={style.textrestaurantes}>Rua dos Santos, porta 4</Text>
                      <Text style={style.textrestaurantes}>2860-560, Santos, Faro</Text>
                      <Text style={style.textrestaurantes}>Email: sabordaavo@santo.pt</Text>
                      <Text style={style.textrestaurantes}>Telefone: 253 668 245</Text>
                    </View>
                  </View>
                  <View style={style.final}>
                    <Text style={style.companhiaText}>@ Sabor da Avó 2020</Text>
                    <Text style={style.direitosText}>Todos os direitos autorais.</Text>
                    <Text style={style.redesText}>Siga-nos em:</Text>
                    <SocialIcon type='facebook' style={style.facebook}/>
                    <SocialIcon type="instagram"style={style.instagram}/>
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
      imageBackgound: {
        flex: 1
      },
      restaurantes: {
        width: "100%",
        height: 1450,
        marginTop: 40
      },
      restaurantesExp: {
        marginTop: 40,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      restaurantesExpFoto: {
        width: 250,
        height: 250,
        marginTop: 0
      },
      restaurantesExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      textrestaurantes: {
        color: "#000",
        fontSize: 15,
        fontStyle: "italic",
        textAlign: 'center',
        top: 17,
        marginVertical: 3
      },
      companhiaText: {
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      direitosText: {
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      redesText: {
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      facebook: {
        marginTop: 20,
        right: -120,
      },
      instagram: {
        marginTop: -59,
        right: -200,
      },
      final: {
        backgroundColor: "#c6cbef",
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        paddingVertical: 40
      }
    });

export default Restaurantes;