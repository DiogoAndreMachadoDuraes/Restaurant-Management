import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Button, 
  ImageBackground, 
  TextInput, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  ActivityIndicator, 
  FlatList ,
  AsyncStorage
} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import NossoFinal from './shared/NossoFinal.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';

class Reservation extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Reserva",
      user: [],
      isVisible: false,
      quantity: 0,
      pontos: 10
    };
  }

  componentDidMount(){ 
    console.log("Mounting the screen Reservation...");
  }

  getData = async () => {
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

  handlePicked = (datetime) => {
    this.setState({ 
      isVisible: false,
      chosenDate: moment(datetime).format('DD/MM/YYYY HH:mm')
    })
    this.hidePicker();
  }

  showPicked = () => {
    this.setState({ isVisible: true });
  }

  hidePicker = () => {
    this.setState({ isVisible: false });
  }

  _onPress = async(user) => {
    /*if (this.state.quantity.trim().length == 0) {
      Alert.alert('Introdução de valores nulos', '   A quantidade de pessoas não pode ser nula.', [
          {text: 'Voltar a tentar'}
      ]);
      return;
    }

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
          "data_marcada": this.state.chosenDate,
          "hora_marcada": this.state.chosenDate,
          "estado": "Em análise",
          "id_cliente": cliente[0]
        })
      });
    } catch(e){
      console.log(e);
    }

    try
    {
      await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Take_away', { 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "tipo": moment(datetime).format('YYYY/MM/DD'),
          "preco": moment(datetime).format('HH:mm:ss'),
          "estado": "Em análise",
          "id_funcionario": null,
          "id_reserva": null,
        })
      });
    } catch(e){
      console.log(e);
    }
*/
    this.props.navigation.navigate("AfterShop", {
      user
    });
  }

  render(){
    {
      //this.getData();
    }

    /* const { navigation, route } = this.props;
    const { item } = route.params; */
    
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} opacity={0.7}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding" style={style.calendar}>
              <View style={style.reservation}>
                <Text style={style.data}>Escolher data e hora:    {this.state.chosenDate}</Text>
                <TouchableOpacity style={style.getHour} onPress={this.showPicked}>
                  <Icon name="calendar" size={45}></Icon>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isVisible}
                  mode={'datetime'}
                  onConfirm={this.handlePicked}
                  onCancel={this.hidePicker}
                  is24Hour={true}
                />
                <Text style={style.data}>Quantidade de Pessoas: </Text>
                <TextInput style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, top: -40, marginLeft: 200 }}/>
                <FlatList
                  data={this.state.user}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <TouchableOpacity>
                      <Text style={style.data}>Telemóvel associado: </Text>
                      <Text style={{ top: -35, marginLeft: 200 }}>{item.telefone}</Text>
                      <Text style={style.data}>Email associado: </Text>
                      <Text style={{ top: -35, marginLeft: 200 }}>{item.email}</Text>
                    </TouchableOpacity>
                  )}
                />
                <Text style={style.data}>Restaurante: </Text>
                <Text style={style.data}>Take Away: </Text>
                <Text style={style.data}>Código de desconto: </Text>
                <Text style={style.data}>Com esta reserva estas a ganhar {this.state.pontos} pontos em cartão de cliente!</Text>
              </View>
            </KeyboardAvoidingView>
            <View style={style.button}>
              <Button
                style={style.button}
                title="Reservar"
                color="black"
                onPress={()=>this._onPress(this.state.user)}
              />
            </View>
            <NossoFinal />
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
  imageBackgound: {
    flex: 1
  },
  calendar: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  reservation: {
    height: 300,
    width: 350,
    marginTop: 50,
    backgroundColor: "lightgray",
    opacity: 1
  },
  data: {
    marginTop: 20,
    marginLeft: 20,
    marginVertical: 10
  },
  getHour: {
    marginTop: -35,
    marginLeft: 280,
    marginVertical: 10
  },
  button: {
    width: 100,
    height: 100,
    left: 240,
    top: 30
  }
});

export default Reservation;