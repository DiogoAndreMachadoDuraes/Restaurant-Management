import * as React from 'react';
import { Alert, StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, FlatList, Button } from 'react-native';
import NossoFinal from './shared/NossoFinal.js';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import {Header, Icon, withTheme} from "react-native-elements";
import { Input } from 'react-native-elements';
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Carrinho extends React.Component {
    constructor(){
        super();
        this.state={
          name:"Carrinho de compras",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Carrinho de Compras...");
      }

      threeOptionAlertHandler = () => {
        Alert.alert(
          //title
          'Atenção',
          //body
          'Estás prestes a eliminar os produtos do teu carrinho de compras. Tens a certeza?',
          [
            { text: 'ESVAZIAR CARRINHO', onPress: () => console.log('Yes Pressed') },
            { text: 'CANCELAR', onPress: () => console.log('Cancel Pressed') },
          ],
          { cancelable: true }
        );
      }
    render()
    {
        return (
        <View style={style.container}>
           <BarraEstados />
           <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>    
    
            </ScrollView>
            <ScrollView>
            <View>
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>
                
                <Text style={style.header}>Carrinho de compras</Text>

                <View style={style.shop}>
                    <Icon name="local-grocery-store" color={'red'} size={28}/>
                </View>

                <View style={style.button2}>
                    <Button title="Esvaziar Carrinho" color="red" onPress={this.threeOptionAlertHandler}/>
                </View>
            

                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("Home") }>
                    <Text style={style.btntext}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button1} onPress={() => this.props.navigation.navigate("Agradecimento") }>
                    <Text style={style.btntext}>Comprar</Text>
                </TouchableOpacity>
            </ImageBackground>    
            </View>
            </ScrollView>
          </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    imageBackgound: {                         //foto por tras do titulo
        width: 420,
        height: 800,
        opacity: 0.9,
      },

    menu: {                           //scrollview
        width: "100%",
        height: 1000,
    },

    shop: {
        marginLeft: 300,
        marginTop: -40,
        top: 140,
        left: -330,
      },

    header:{
        fontSize: 25,
        color: '#fff',
        marginLeft: 90,
        top: 132,
        left: -45,
    },

    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        marginTop: 140,
        width:100,
        left: 60,
        top: 300,
    },

    button1:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        marginTop: 140,
        width:100,
        left: 230,
        top: 114,
    },

    button2:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:0,
        width:200,
        left: 200,
        top: 40,
    },

    btntext:{
        color:'red',
        fontWeight:'bold',
        fontSize: 20,
    },

    btntext1:{
        color:'white',
        fontWeight:'bold',
        fontSize: 20,
    },

    textinput:{
        alignSelf:'stretch',
        height:40,
        color: 'white',
        marginBottom: 10,
        borderBottomColor:'white',
        borderBottomWidth:1,
    },

    email:{
        color: 'white',
    },

   imagemFundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        left: 20,
    }

  });

  export default Carrinho;