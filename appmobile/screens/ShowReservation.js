import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Button, 
  ImageBackground, 
  KeyboardAvoidingView, 
  FlatList ,
  AsyncStorage,
} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import NossoFinal from './shared/NossoFinal.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import moment from 'moment';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class ShowReservation extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Reservas",
      user: [],
      reservation: [],
      client: [],
      takeAway: [],
      isLoadingReservation: true,
      isLoadingClient: true,
      isLoadingTakeAway: true
    };
  }

  componentDidMount(){ 
    console.log("Mounting the screen ShowReservation...");
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("User");
      if (value !== null) {
        this.setState({ user: JSON.parse(value) });
      }
    } catch (e) {
      console.log("Error rending user: " + e);
    }
  }

  getClient = async () => {
    let token = await AsyncStorage.getItem("token");
    try {
        let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Cliente', { 
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        });
        let json = await response.json();
        this.setState({
          isLoadingClient: false,
          client: json,
        });
    } catch(e){
    console.log("Error to get product: " + e);
    }
  }

  getReservation = async () => {
    let token = await AsyncStorage.getItem("token");
    try {
      let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Reserva', { 
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      this.setState({
        isLoadingReservation: false,
        reservation: json,
      });
    } catch(e){
      console.log("Error to get product: " + e);
    }
  }

  getTakeAway = async () => {
    let token = await AsyncStorage.getItem("token");
    try {
      let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Take_away', { 
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      this.setState({
        isLoadingTakeAway: false,
        takeAway: json,
      });
    } catch(e){
      console.log("Error to get product: " + e);
    }
  }

  render(){
    {
        this.getData()
    }
    {
        this.getClient()
    }
    {
        this.getReservation()
    }
    {
        this.getTakeAway()
    }
    const { user, reservation, client, takeAway } = this.state;
    const getId=user.map(a=>a.id_utilizador);
    const clientId=client.filter(a=>a.id_utilizador==getId).map(a=>a.id_cliente);
    const allReservation=reservation.filter(a=>a.id_cliente==clientId).map(a=>a);
    console.log("as reservas desse cliente aparece: "+allReservation);
    const reservationId=allReservation.map(a=>a.id_reserva);
    /* console.log("o id dessas reservas aparece: "+reservationId); */
    const allTakeAway=takeAway.filter(a=>a.id_reserva==reservationId).map(a=>a);
    /* console.log("o take away do cliente aparece: "+allTakeAway); */
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} opacity={0.7}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding" style={style.calendar}>
              <View style={style.ShowReservation}>
                {
                    allReservation.map((item)=>{
                        return (
                            <View>
                                <Text style={style.data}>Data da reserva: {item.data_marcada}</Text>
                                <Text style={style.data}>Hora da reserva: {item.hora_marcada}</Text>
                                <Text style={style.data}>Quantidade de Pessoas: {item.quantidade_pessoas}</Text>
                                <Text style={style.data}>Estado da Reserva: {item.estado}</Text>
                            </View>
                        );
                    })
                }
                {
                /* {
                    restaurant.map((item)=>{
                        return (
                            <View>
                                <Text style={style.data}>Restaurante: {item.foto}</Text>
                            </View>
                        );
                    })
                } */
                }
                {
                    allTakeAway.map((item)=>{
                        return (
                            <View>
                                <Text style={style.data}>Tipo de entrega: {item.tipo_entrega}</Text>
                                <Text style={style.data}>Estado: {item.estado}</Text>
                            </View>
                        );
                    })
                }
                <FlatList
                    data={user}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                    <TouchableWithoutFeedback>
                        <Text style={style.data}>Nome associado:  {item.nome}</Text>
                        <Text style={style.data}>Morada associada: {item.rua}, {item.codigo_postal}, {item.localizacao}</Text>
                        <Text style={style.data}>Telemóvel associado:  {item.telefone}</Text>
                        <Text style={style.data}>Email associado: {item.email}</Text>
                    </TouchableWithoutFeedback>
                    )}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={style.button}>
              <Button
                style={style.button}
                title="Eliminar"
                color="black"
                onPress={this._onPress}
              />
            </View>
            <NossoFinal />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }

  _onPress = async() => {
    /*
    try {
      let response = await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Cliente', { 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      this.setState({
        isLoading: false,
        data: json
      });
    } catch(e){
        console.log("Error to get data: " + e);
    }

    const { data } = this.state;

    console.log(data);
    
    const cliente=data.filter(a=>a.id_utilizador==user.id_utilizador).map(a=>a.id_cliente);

    try
    {
      await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Reserva', { 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "data": moment(datetime).format('YYYY/MM/DD'),
          "hora": moment(datetime).format('HH:mm:ss'),
          "quantidade_pessoas": this.state.quantity,
          "data_marcada": this.state.chosenDate.format('YYYY/MM/DD'),
          "hora_marcada": this.state.chosenDate.format('HH:mm:ss'),
          "estado": "Em análise",
          "id_cliente": cliente[0]
        })
      });
    } catch(e){
      console.log(e);
    }

    if (this.state.take == "sim") {
      try
      {
        await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Take_away', { 
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "tipo": this.state.type,
            "preco": this.state.price,
            "estado": "Em análise",
            "id_funcionario": null,
            "id_reserva": null,
          })
        });
      } catch(e){
        console.log(e);
      }
      this.props.navigation.navigate("AfterShop", {
        id_reserva: ,
        data_marcada: this.state.chosenDate.format('YYYY/MM/DD'),
        hora_marcada: this.state.chosenDate.format('HH:mm:ss'),
        foto: ,
      });
    }
    else{
      this.props.navigation.navigate("AfterShop", {
        id_reserva: ,
        data_marcada: this.state.chosenDate.format('YYYY/MM/DD'),
        hora_marcada: this.state.chosenDate.format('HH:mm:ss'),
        foto: ,
      });
    }
    */
    //this.props.navigation.navigate("AfterShop");
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgound: {
    flex: 1
  },
  calendar: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ShowReservation: {
    height: 800,
    width: 360,
    marginTop: 10,
    backgroundColor: "lightgray"
  },
  data: {
    marginTop: 20,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 15,
  },
  win: {
    marginTop: 20,
    marginLeft: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  getHour: {
    marginTop: -35,
    marginLeft: 300,
    marginVertical: 10
  },
  button: {
    width: 100,
    height: 100,
    left: 240,
    top: 50
  },
  invalidQuantity: {
    color: '#FF0000',
    fontSize: 10,
    top: -30,
    left: 20
  },
  invalidCode: {
    color: '#FF0000',
    fontSize: 10,
    top: -30,
    left: 20
  },
  validCode: {
    color: 'black',
    fontSize: 10,
    top: -30,
    left: 20
  }
});

export default ShowReservation;