import * as React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';

  class Invoice extends React.Component {
      constructor(){
          super();
          this.state={ 
              name:'A minha fatura',
              isLoading: true,
              user: [],
              invoice:[],
              reservation:[]    
          }; 
  }

  async componentDidMount(){ 
    console.log("Mounting the screen Invoice...");
    let token = await AsyncStorage.getItem("token");
    try {
      let response = await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Fatura', { 
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    });
    let json = await response.json();
    this.setState({
      isLoading: false,
      invoice: json,
    });
    } catch(e){
      console.log("Error to get product: " + e);
    }
    try {
      let response = await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Reserva', { 
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    });
    let json = await response.json();
    this.setState({
      isLoading: false,
      reservation: json,
    });
      } catch(e){
        console.log("Error to get product: " + e);
      }
      try {
        let response = await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Compra_produto', { 
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
      });
      let json = await response.json();
      this.setState({
        isLoading: false,
        reservation: json,
      });
        } catch(e){
          console.log("Error to get product: " + e);
        }
        try {
          let response = await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Compra_menu', { 
            headers: {
              Authorization: 'Bearer ' + token,
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
        });
        let json = await response.json();
        this.setState({
          isLoading: false,
          reservation: json,
        });
          } catch(e){
            console.log("Error to get product: " + e);
          }
        }
    

    getUser = async () => {
      try {
        const value = await AsyncStorage.getItem("User");
        if (value !== null) {
          this.setState({ user: JSON.parse(value) });
        }
      } catch (e) {
          console.log("Error rending user: " + e);
      }
    }

    render()
    { 
        const { user, invoice , reservation } = this.state;
      {
        this.getUser();
      }
      const userName=user.map(a=>a.nome);
      const userStreet=user.map(a=>a.rua);
      const userPostalCode=user.map(a=>a.codigo_postal);
      const userLocalization=user.map(a=>a.localizacao);
      const userTin=user.map(a=>a.nif);
      const invoiceReservation=invoice.filter(a=>a.nif_cliente==userTin).map(a=>a.id_reserva);
      const invoiceData=reservation.filter(a=>a.id_reserva==invoiceReservation).map(a=>a.data_marcada);
      const allInvoice=invoice.filter(a=>a.nif_cliente==userTin).map(a=>a);

      console.log(invoice);

        return (
        <View style={style.container}>
            <OwnStatusBar />
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>
            <ImageBackground source={require("../assets/logo.png")}  style={style.imageBackgound} opacity={0.1}>
            <ScrollView style={style.form}>
            <View style={style.form}>
            {
                allInvoice.map((item)=>{
                  return (
                  <View>
                    <Text style={style.header}>Sabor da Avó</Text>
                    <Text style={style.header0}>{userName}          Fatura nº{item.id_fatura}</Text>
                    <Text style={style.header1}> {userStreet} , {userPostalCode} {userLocalization}</Text>
                    <Text style={style.header2}>Nif: {item.nif_cliente}                              Data:{invoiceData}</Text>
                    <View style={style.line} />
                    <Text style={style.text}>Descrição</Text>
                    <Text style={style.text1}>Quantidade</Text>
                    <Text style={style.text2}>Preço</Text>
                    <View style={style.line1} />
                    <Text style={style.textTax}>Taxa: </Text>
                    <Text style={style.tax}>{item.taxa}</Text>
                    <Text style={style.textIva}>Iva: </Text> 
                    <Text style={style.iva}>{item.iva}</Text> 
                    <Text style={style.text3}>Total: € {item.valor_total}</Text>
                    <Text style={style.textEmployee}>Funcionário : José Leite Machado</Text> 
                    <View style={style.lineFinal} />
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
          );
    }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  form:{
    width: "100%",
    height: "100%",
  },

  header:{
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 120,
    top: 60,
    paddingBottom:60,
    marginBottom:60
  },

  header0:{
    fontSize: 20,
    color: 'brown',
    marginLeft: 30,
    top: -10,
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
    top: -220,
    paddingBottom:60,
    marginBottom:60,
    fontWeight:'bold',
  },

  button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:10,
    backgroundColor:'white',
    marginTop: 0,
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

  lineFinal:{
    borderWidth: 5,
    borderColor: "#191970",
    margin: 10,
    top: -20,
    width: 380,
    left: -5,
  },

  text:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    left: 50,
    top: -335,
  },

  text1:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    left: 170,
    top: -356,
  },

  textTax:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    left: 217,
    top: -260,
  },

  textIva:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    left: 230,
    top: -280,
  },

  tax:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    left: 270,
    top: -283,
  },

  iva:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    left: 270,
    top: -303,
  },

  text2:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    left: 310,
    top: -375,
  },

  text3:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    left: 200,
    top: -300,
  },

  textEmployee:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 30,
    top: -270,
    marginBottom:-200
  },
});
export default Invoice;
