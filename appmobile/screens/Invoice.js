import * as React from 'react';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import BarraEstados from "./shared/BarraEstados.js";
import { OwnHeader } from './shared/OwnHeader';

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

            <OwnHeader nome={this.state.name} navigation={this.props.navigation}/>

            <View style={style.container}>
            <BarraEstados />
            <ScrollView style={style.form}>
            <View style={style.form}>

                <Text style={style.header}>A minha fatura</Text>
                <Text style={style.header0}>Isabela Martins                   Fatura 100</Text>
                <Text style={style.header1}>Rua dos Jerónimos, porta 30                                                       4356-777 Portimão</Text>
                <Text style={style.header2}>Nif: 000000009                              Data: 23/06/2020</Text>
                <Text style={style.text}>Descrição</Text>
                <Text style={style.text1}>Quantidade</Text>
                <Text style={style.text2}>Preço</Text>
                <Text style={style.text3}>Subtotal</Text>
                <Text style={style.text3}>Taxa</Text>            
                <Text style={style.text3}>Total</Text> 
                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.goBack()}>
                    <Text style={style.btnText}>Voltar</Text>
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

    form:{
      width: "100%",
        height:"100%"

    },

    header:{
        fontSize: 25,
        color: '#000',
        marginLeft: 100,
        top: 60,
        paddingBottom:60,
        marginBottom:60
    },

    header0:{
        fontSize: 20,
        color: 'brown',
        marginLeft: 30,
        top: 0,
        paddingBottom:60,
        marginBottom:60,
        fontWeight: 'bold'
    },

    header1:{
        fontSize: 12,
        color: 'black',
        marginLeft: 30,
        top: -120,
        paddingBottom:60,
        marginBottom:60
    },
    header2:{
        fontSize: 15,
        color: 'black',
        marginLeft: 30,
        top: -230,
        paddingBottom:60,
        marginBottom:60
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

    btnText:{
        color:'red',
        fontWeight:'bold',
        fontSize: 20,
    },


   imageBackground: {
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
