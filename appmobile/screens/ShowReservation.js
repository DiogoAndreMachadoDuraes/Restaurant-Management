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
  Alert,
} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import FinalHeader from './shared/FinalHeader.js';
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
      isLoadingTakeAway: true,
      existReservation: false,
      existTakeAway: false
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
    console.log("Error to get client: " + e);
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
      console.log("Error to get reservation: " + e);
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
      console.log("Error to get take away: " + e);
    }
  }

  showReservation = () => {
    const { user, reservation, client, takeAway } = this.state;
    const getId=user.map(a=>a.id_utilizador);
    const clientId=client.filter(a=>a.id_utilizador==getId).map(a=>a.id_cliente);
    const allReservation=reservation.filter(a=>a.id_cliente==clientId).map(a=>a);
    if(allReservation!=null){
      this.setState({
        existReservation: true
      });
      return(
        allReservation.map((item)=>{
          return (
            <View>
              <Text style={style.textReservation}>Dados da Reserva</Text>
              <Text style={style.dataReservation}>Data da reserva: {item.data_marcada}</Text>
              <Text style={style.dataReservation}>Hora da reserva: {item.hora_marcada}</Text>
              <Text style={style.dataReservation}>Quantidade de Pessoas: {item.quantidade_pessoas}</Text>
              <Text style={style.dataReservation}>Estado da Reserva: {item.estado}</Text>
            </View>
          );
        })
      );
    }
    else{
      this.setState({
        existReservation: false
      });
      return (
        <View>
          <Text style={style.textReservation}>Dados da Reserva</Text>
          <Text style={style.dataReservation}>Data da reserva: {item.data_marcada}</Text>
          <Text style={style.dataReservation}>Hora da reserva: {item.hora_marcada}</Text>
          <Text style={style.dataReservation}>Quantidade de Pessoas: {item.quantidade_pessoas}</Text>
          <Text style={style.dataReservation}>Estado da Reserva: {item.estado}</Text>
        </View>
      );
    }
  }

  showTakeAway = () => {
    const { user, reservation, client, takeAway } = this.state;
    const getId=user.map(a=>a.id_utilizador);
    const clientId=client.filter(a=>a.id_utilizador==getId).map(a=>a.id_cliente);
    const allReservation=reservation.filter(a=>a.id_cliente==clientId).map(a=>a);
    const reservationId=allReservation.map(a=>a.id_reserva);
    const allTakeAway=takeAway.filter(a=>a.id_reserva==reservationId).map(a=>a);
    if(allTakeAway!=null){
      this.setState({
        existTakeAway: true
      });
      return(
        allTakeAway.map((item)=>{
          return (
            <View>
              <Text style={style.textTakeAway}>Take Away da reserva</Text>
              <Text style={style.dataTakeAway}>Tipo de entrega: {item.tipo_entrega}</Text>
              <Text style={style.dataTakeAway}>Estado: {item.estado}</Text>
            </View>
          );
        })
      );
    }else{
      this.setState({
        existTakeAway: false
      });
      return (
        <View>
          <Text style={style.textTakeAway}>Não existe Take Away nesta reserva!</Text>
        </View>
      );
    }
  }

  showRestaurant = () => {
    /* const { user, reservation, client, takeAway } = this.state;
    const getId=user.map(a=>a.id_utilizador);
    const clientId=client.filter(a=>a.id_utilizador==getId).map(a=>a.id_cliente);
    const allReservation=reservation.filter(a=>a.id_cliente==clientId).map(a=>a);
    const reservationId=allReservation.map(a=>a.id_reserva);
    const typeTakeAway=takeAway.filter(a=>a.id_reserva==reservationId).map(a=>a.tipo);
    if(typeTakeAway=="Restaurante"){

      return(
        restaurant.map((item)=>{
          return (
              <View>
                  <Text style={style.data}>Restaurante: {item.foto}</Text>
              </View>
          );
        })
      );
    } */
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
    const { user, existReservation } = this.state;
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} opacity={0.7}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding" style={style.calendar}>
              <View style={style.showReservation}>
                {
                  this.showReservation()
                }
                {
                  this.showRestaurant()
                }
                {
                  this.showTakeAway()
                }
                {
                  existReservation ?  
                    <FlatList
                      data={user}
                      keyExtractor={({ id }, index) => id}
                      renderItem={({ item }) => (
                      <TouchableWithoutFeedback>
                        <Text style={style.textUser}>Utilizador</Text>
                        <Text style={style.dataUser}>Nome:  {item.nome}</Text>
                        <Text style={style.dataUser}>Morada: {item.rua}, {item.codigo_postal}, {item.localizacao}</Text>
                        <Text style={style.dataUser}>Telemóvel:  {item.telefone}</Text>
                        <Text style={style.dataUser}>Email: {item.email}</Text>
                      </TouchableWithoutFeedback>
                      )}
                    />
                  : false
                }
              </View>
            </KeyboardAvoidingView>
            {
              existReservation ?  
                <View style={style.button}>
                  <Button
                    style={style.button}
                    title="Eliminar"
                    color="black"
                    onPress={this._onPress}
                  />
                </View>
              : 
                <View style={style.button}>
                  <Button
                    style={style.button}
                    title="Criar Nova Reserva"
                    color="black"
                    onPress={()=>this.props.navigation("Reservation")}
                  />
                </View>
            }
            <FinalHeader />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
  _onPress = async () => {
    if (existReservation==true) {
      try
      {
        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Reserva', { 
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "id_reserva": reservationId
          })
        });
      } catch(e){
        console.log(e);
      }
      if(existTakeAway==true){
        try
        {
          await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Reserva', { 
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "id_reserva": reservationId
            })
          });
        } catch(e){
          console.log(e);
        }
      }
      Alert.alert("A sua reserva e take away foram eliminados com sucesso!");
      this.props.navigation.navigate("Home");
    }
    else{
      Alert.alert("A sua reserva não pode ser eliminada 5 dias antes da data pretendida!");
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgound: {
    flex: 1
  },
  showReservation: {
    height: 800,
    width: 340,
    marginTop: 10,
    backgroundColor: "lightgray"
  },
  dataReservation: {
    marginTop: 20,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 15,
  },
  textReservation: {
    marginTop: 30,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 30,
    color: "green"
  },
  dataUser: {
    marginTop: 20,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 15,
  },
  textUser: {
    marginTop: 30,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 30,
    color: "green"
  },
  dataTakeAway: {
    marginTop: 20,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 15,
  },
  textTakeAway: {
    marginTop: 30,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 30,
    color: "green"
  },
  button: {
    width: 100,
    height: 100,
    left: 240,
    top: 50
  }
});

export default ShowReservation;