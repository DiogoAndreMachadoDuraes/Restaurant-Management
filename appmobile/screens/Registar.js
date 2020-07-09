import * as React from 'react';
import { Alert, StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
//import Icon1 from 'native-base';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import BarraEstados from "./shared/BarraEstados.js";
import NossoFinal from './shared/NossoFinal.js';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Registar extends React.Component {
    constructor(){
        super();
        this.state={
          name:"Registar",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Registar...");
      }
    render()
    {
        return (
            <View style={style.container}>
            <BarraEstados />
            <ScrollView>
            <View style={style.regform}>
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>

                <Text style={style.header}>Registar</Text>

                <Text style={style.text}>Nome Completo:</Text>
                <Input
                placeholder="Nome Completo"
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }} />

                <Text style={style.text}>Email:</Text>
                <Input
                placeholder="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }} />
                
                <Text style={style.text}>Telefone:</Text>
                <Input
                placeholder="Telefone"
                leftIcon={{ type: 'font-awesome', name: 'phone', color:'white' }} />

                <Text style={style.text}>Morada:</Text>
                <Input
                placeholder="Morada"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} />


                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("Login") }>
                    <Text style={style.btntext}>Sign up</Text>
                </TouchableOpacity>
            </ImageBackground>    
            </View>
            <NossoFinal></NossoFinal>
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
        height: 1160,
    },

    regform:{
       alignSelf:'stretch',
    },

    header:{
        fontSize: 25,
        color: '#fff',
        marginLeft: 150,
        top: 60,
        paddingBottom:60,
        marginBottom:60,
        borderBottomColor: 'black',
        borderBottomWidth:1,

    },

    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        marginTop: 140,
        width:100,
        left: 150,
    },

    btntext:{
        color:'red',
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

  export default Registar;
