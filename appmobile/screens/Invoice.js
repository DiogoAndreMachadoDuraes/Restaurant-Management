import * as React from 'react';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import BarraEstados from "./shared/BarraEstados.js";
import { NossoHeader } from './shared/NossoHeader';

class Invoice extends React.Component {
    constructor(){
        super();
        this.state={ name:'A minha fatura' };
    }
      async componentDidMount(){ 
        console.log("Mounting the screen Invoice...");

        await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Fatura', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
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


    render()
    { 
        const { data, isLoading } = this.state;
        return (
        <View style={style.container}>
            <BarraEstados />

            <NossoHeader nome={this.state.name} navigation={this.props.navigation}/>

            <View style={style.container}>
            <BarraEstados />
            <ScrollView style={style.regform}>
            <View style={style.regform}>

                <Text style={style.header}>A minha fatura</Text>
                <Text style={style.text}>Foto:</Text>
                <Text style={style.text}>Sexo:</Text>
                <Text style={style.text}>Password:</Text>
                <Text style={style.text}>Confirmar Password:</Text>
                <Text style={style.text}>Data Nascimento:</Text>            
                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.goBack()}>
                    <Text style={style.btntext}>Voltar</Text>
                </TouchableOpacity>



            </View>
            </ScrollView>
            </View>
            </View>
          );
          }
}

const style = StyleSheet.create({
    container: {
    flex: 1,
   },

    menu: {                           
        width: "100%",
        height:"100%"
    },

    regform:{
      width: "100%",
        height:"100%"

    },

    header:{
        fontSize: 25,
        color: '#000',
        marginLeft: 100,
        top: 60,
        paddingBottom:60,
        marginBottom:60,
        borderBottomColor: 'black',
    },

    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        marginTop: 50,
        width:130,
        left: 130,
        marginVertical:20,
    
    },

    btntext:{
        color:'red',
        fontWeight:'bold',
        fontSize: 20,
    },


   imagemFundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        left: 20,
    }

  });

  export default Invoice;
