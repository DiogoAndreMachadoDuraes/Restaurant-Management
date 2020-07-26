import * as React from 'react';
import { Alert, StyleSheet, View, Text, Image, TextInput, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, FlatList, Button, TouchableOpacity } from 'react-native';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
import { Input } from 'react-native-elements';
import BarraEstados from "./shared/BarraEstados.js";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import {Icon} from "react-native-elements";


const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

const Coco = require('../assets/coco.jpg');

const dataFromApi = [
    {
      id: 1,
      imagem: Coco,
      quantidade:1
    }
]

class Carrinho extends React.Component {
    constructor(){
        super();
        this.state={
          name:"Carrinho de compras"
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
      quantidade = (type) => {
        let i = dataFromApi.map[a=>a.quantidade];
        console.log(i);
        if (type==true) {
          i = i + 1
          return i;
         }
         else if (type==false){
          i = i - 1
          return i;
         }else if (type==1){
          return i;
         }
      }
     
    render()
    {
        return (
        <View style={style.container}>
           <BarraEstados />

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

                {
                    dataFromApi.map((item)=>{
                      return (
                        <View style={style.menuExp}>
                        <Text style={style.title}>Côco do Brasil</Text>
                        <Text style={style.title1}>Total: €2.39 </Text>
                          <Image style={style.menuExpFoto} source={item.imagem} ></Image>
                          <Text style={style.titleMenu}>{item.name}</Text>
                          <TouchableOpacity style={style.trash}>
                            <Icon2 name="delete" color={'red'} size={20}/>
                            <Text style={style.trashtext}>Remover</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={style.plus} onPress={()=>this.quantidade(true)}>
                            <Icon2 name="plus-box-outline" color={'red'} size={20}/>
                          </TouchableOpacity>
                          <Text style={style.i}>{1}</Text>
                          <TouchableOpacity style={style.minus} onPress={()=>this.quantidade(false)}>
                            <Icon2 name="minus-box-outline" color={'red'} size={20}/>
                          </TouchableOpacity>
                        </View>
                      );
                    })
                  }
                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.goBack()}>
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

    i:{
      top:-119,
      left:140
    },

    title:{
      top: 83,
      left: 0,
      color: "green",
      fontWeight: 'bold',
      fontSize: 20
    },

    title1:{
      top: 120,
      left: -20,
      color: "black",
      fontSize: 15
    },

    trash: {
        top: -22,
        left: 120
    },

    trashtext: {
      top:-20,
      left: 20,
      color: "red",
      fontWeight: 'bold',
      fontSize: 15
  },

    minus:{
        top: -140,
        left: 120
    },
      
    plus:{
        top:-100,
        left:160
    },

    menuExp: {
        marginTop: 25,
        top: 95,
        marginLeft: 0,
        padding: 20,
        width: 400,
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
      },

      menuExpFoto: {
        width: 100,
        height: 80,
        marginTop: 20,
        top: 20,
        left: -130
      },

    img:{
        width: 130,
        height: 130,
        marginTop: 150,
        left: 30
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