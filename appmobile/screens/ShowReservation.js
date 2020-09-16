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
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native-gesture-handler";

class ShowReservation extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Minhas Reservas",
      user: [],
      reservation: [],
      client: [],
      isLoading: true,
      existReservation: false,
      allReservation: [],
      now: moment().format("YYYY-MM-DD")
    };
  }

  async componentDidMount(){ 
    console.log("Mounting the screen ShowReservation...");

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

    try {
      const value = await AsyncStorage.getItem("User");
      if (value !== null) {
        this.setState({ user: JSON.parse(value) });
      }
    } catch (e) {
      console.log("Error rending user: " + e);
    }

    const { user, reservation, client} = this.state;
    const getId=user.map(a=>a.id_utilizador);
    const clientId=client.filter(a=>a.id_utilizador==getId).map(a=>a.id_cliente);
    const allReservation=reservation.filter(a=>a.id_cliente==clientId[0]).map(a=>a);
    
    if(allReservation!=null){
      this.setState({
        existReservation: true,
        allReservation: allReservation
      });
    }else{
      this.setState({
        existReservation: false
      });
    }
  }

  render(){
    const { existReservation, allReservation } = this.state;

    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} >
          <ScrollView>
            <View style={style.showReservation}>
              {
                existReservation ?
                  <FlatList
                    data={allReservation}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                      <View style={style.reservationExp}>
                        <Text style={style.textReservation}>Reserva nº{item.id_reserva}</Text>
                        <Text style={style.dataReservation}>Data da reserva: {item.data_marcada}</Text>
                        <Text style={style.dataReservation}>Hora da reserva: {item.hora_marcada}</Text>
                        <Text style={style.dataReservation}>Quantidade de Pessoas: {item.quantidade_pessoas}</Text>
                        <Text style={style.dataReservation}>Estado da Reserva: {item.estado}</Text>
                        <View style={style.button}>
                          <Button
                            style={style.button}
                            title="Editar"
                            color="black"
                            onPress={()=>this.onPressEdit(item.id_reserva, item.data_marcada, item.hora_marcada, item.quantidade_pessoas, item.estado, item.id_cliente)}
                          />
                        </View>
                        <View style={style.buttonDelete}>
                          <Button
                            style={style.button}
                            title="Eliminar"
                            color="maroon"
                            onPress={()=>this.onPressDelete(item.data_marcada, item.id_reserva)}
                          />
                        </View>
                      </View>  
                    )}
                  />
                :
                  <View style={style.reservationExp}>
                    <Text style={style.textReservation}>Não existe reserva!</Text>
                  </View>
              }
            <FinalHeader />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
  
  onPressEdit = async (reservationId, date, hour, quantity, state, clientId) => {
    if(moment.duration(moment(date,"YYYY-MM-DD").diff(moment(this.state.now, "YYYY-MM-DD"))).asDays()>2){
      this.props.navigation.navigate("EditReservation", {reservationId, date, hour, quantity, state, clientId});
    }
    else{
      Alert.alert("A sua reserva não pode ser eliminada 2 dias antes da data pretendida!");
    }
  }

  onPressDelete = async (date, reservationId) => {
    let token = await AsyncStorage.getItem("token");
    if(moment.duration(moment(date,"YYYY-MM-DD").diff(moment(this.state.now, "YYYY-MM-DD"))).asDays()>2){
      try
      {
        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Reserva', { 
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + token,
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
      Alert.alert("Tem a certeza que pretende eliminar a reserva?");
      this.props.navigation.navigate("Home");
    } else{
      Alert.alert("A sua reserva não pode ser eliminada 2 dias antes da data pretendida ou já passou o prazo!");
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
    width: "100%",
    height: "100%",
  },
  reservationExp: {
    marginTop: 25,
    top: 40,
    marginLeft: 30,
    padding: 20,
    width: 340,
    height: 360,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  dataReservation: {
    marginTop: 40,
    marginLeft: 20,
    marginVertical: -10,
    fontSize: 15,
  },
  textReservation: {
    textAlign: 'center',
    marginLeft: 20,
    fontSize: 30,
    color: "tomato"
  },
  button: {
    width: 100,
    height: 100,
    left: 20,
    top: 40
  },
  buttonDelete: {
    width: 100,
    height: 100,
    left: 190,
    top: -60,
    color: "red"
  }
});

export default ShowReservation;