import * as React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';

class Invoice extends React.Component {
    constructor(){
        super();
        this.state={ 
            name:'A minha fatura',
            isLoading: true,
            user: [],
            data:[]
         }; 
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

    getUser = async () => {
        try {
          const value = await AsyncStorage.getItem("User");
          if (value !== null) {
            this.setState({ user: JSON.parse(value) });
            console.log(this.state.user);
          }
        } catch (e) {
            console.log("Error rending user: " + e);
        }
      }

    

    render()
    { 
        const { user, data, isLoading } = this.state;
      {
        this.getUser();
      }
        return (
        <View style={style.container}>
            <OwnStatusBar />

            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>

            <View style={style.container}>
            <OwnStatusBar />
            <ImageBackground source={require("../assets/logo.png")}  style={style.imageBackgound} opacity={0.1}>
            <ScrollView style={style.form}>
            <View style={style.form}>
                    {
                    data.filter(item=>item.nif_cliente==user.nif).map((item)=>{
                      return (
                        <View>
                <Text style={style.header}>A minha fatura</Text>
                <Text style={style.header0}>Isabela Martins                    Fatura {item.id_fatura}</Text>
                <Text style={style.header1}>Rua dos Jerónimos, porta 30                                                       4356-777 Portimão</Text>
                <Text style={style.header2}>Nif: {item.nif_cliente}                              Data: 23/06/2020</Text>
                <View style={style.line} />
                <Text style={style.text}>Descrição</Text>
                <Text style={style.text1}>Quantidade</Text>
                <Text style={style.text2}>Preço</Text>
                <Text style={style.textTax}>Taxa </Text>
                <Text style={style.tax}>{item.taxa}</Text>
                <Text style={style.textIva}>Iva </Text> 
                <Text style={style.iva}>{item.iva}</Text> 
                <View style={style.line1} />
                <Text style={style.text3}>Total:{item.valor_total}</Text>
                <Text style={style.textEmployee}>Funcionário : José Leite Machado</Text> 
                </View>
                      );
                    })
                  }
                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.goBack()}>
                    <Text style={style.btnText}>Voltar</Text>
                </TouchableOpacity>

            </View>
            </ScrollView>
            </ImageBackground>
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
        marginLeft: 120,
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
        marginTop: -300,
        width:130,
        left: 130,
        marginVertical:20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#dc143c',
    
    },

    btnText:{
        color:'#556b2f',
        fontWeight:'bold',
        fontSize: 20,
    },


   imageBackgound: {
        flex:1,
    },

    line:{
        borderWidth: 1,
        borderColor: "tomato",
        margin: 10,
        top: -330,
        width: 340,
        left: 20
    },

    line1:{
        borderWidth: 1,
        borderColor: "tomato",
        margin: 10,
        top: -250,
        width: 340,
        left: 20
    },

    text:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        left: 30,
        top: -335,
    },

    text1:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        left: 120,
        top: -356,
    },

    textTax:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        left: 217,
        top: -397,
    },

    textIva:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        left: 270,
        top: -438,
    },

    tax:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        left: 217,
        top: -390,
    },

    iva:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        left: 270,
        top: -430,
    },

    text2:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        left: 325,
        top: -375,
    },

    text3:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        left: 240,
        top: -250,
    },

    textEmployee:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 30,
        top: -230,
        paddingBottom:60,
        marginBottom:60
    },

  });

  export default Invoice;
