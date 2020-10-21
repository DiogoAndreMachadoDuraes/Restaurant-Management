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
  AsyncStorage,
  Picker,
  Alert
} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as Animatable from 'react-native-animatable';

class Reservation extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Fazer Reserva",
      user: [],
      isVisible: false,
      validCode: false,
      validQuantity: true,
      number: true,
      quantity: "",
      code: "",
      restaurant: "",
      pontos: 10,
      chosenDate: ''
    };
  }

  async componentDidMount(){ 
    console.log("Mounting the screen Reservation...");
    try {
      const value = await AsyncStorage.getItem("User");
      if (value !== null) {
        this.setState({ user: JSON.parse(value) });
      }
    } catch (e) {
      console.log("Error rending user: " + e);
    }
  }

  handlePicked = (datetime) => {
    this.setState({ 
      isVisible: false,
      chosenDate: moment(datetime).format('YYYY/MM/DD'),
      chosenHour: moment(datetime).format('hh:mm')
    });
    this.hidePicker();
  }

  showPicked = () => {
    this.setState({ isVisible: true });
  }

  hidePicker = () => {
    this.setState({ isVisible: false });
  }

  validQuantity = (val) => {
    if(!isNaN(val)){
      if(val.trim().length<=3){
        this.setState({
          validQuantity: true,
          number: true,
          quantity: val
        });
      } else {
        this.setState({
          validQuantity: false,
          quantity: val
        });
      }
    } else {
      this.setState({
        number: false,
        quantity: val
      });
    }
  }

  validCode = (val) => {
    if(val == "Avó2020Restaurantes"){
      this.setState({
        validCode: true,
        code: val
      });
    } else {
      this.setState({
        validCode: false,
        code: val
      });
    }
  }

  render(){
    const { validCode, validQuantity, number, chosenDate, name, isVisible, quantity, restaurant, user, chosenHour, code} = this.state;
    const telephone=user.map(a=>a.telefone);
    const email=user.map(a=>a.email);
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding" style={style.calendar}>
              <View style={style.reservation}>
                <Text style={style.data}>
                  <Text style={{fontWeight: 'bold'}}>Escolher data e hora: </Text>
                  <Text>{chosenDate} {chosenHour}</Text>
                </Text>
                <DateTimePicker
                  isVisible={isVisible}
                  mode={'datetime'}
                  onConfirm={this.handlePicked}
                  onCancel={this.hidePicker}
                  locale="pt"
                  is24Hour={true}
                />
                <TouchableOpacity style={style.getHour} onPress={this.showPicked}>
                  <Icon name="calendar" size={45}></Icon>
                </TouchableOpacity>
                <Text style={style.data}>
                  <Text style={{fontWeight: 'bold'}}>Quantidade de Pessoas: </Text>
                </Text>
                <TextInput style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, top: -40, marginLeft: 200 }}
                  onChangeText={(val) => this.validQuantity(val)}
                  values={quantity}
                  onSubmitEditing={(val) => this.validQuantity(val)}
                  onEndEditing={(e)=>this.validQuantity(e.nativeEvent.text)}
                />
                <Text style={style.validCode}>* Se desejar Take Away marcar a Quantidade de Pessoas como 0.</Text>
                { 
                  number ? true : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={style.invalidQuantity}>A quantidade de pessoas tem de ser um número!</Text>
                    </Animatable.View>
                }
                { 
                  validQuantity ? true : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={style.invalidQuantity}>A quantidade tem de ser menor do que 1000!</Text>
                    </Animatable.View>
                }
                <Text style={style.data}>
                  <Text style={{fontWeight: 'bold'}}>Restaurante: </Text>
                </Text>
                <Picker
                  style={{ height: 50, width: 190, top: -45, left: 120}}
                  selectedValue={restaurant}
                  onValueChange={(value, index) => this.setState({ restaurant: value})}
                  mode='dropdown'
                >
                  <Picker.Item label="Viana do Castelo" value="Sabor da Avó - Viana do Castelo" />
                  <Picker.Item label="Bragança" value="Sabor da Avó - Bragança" />
                  <Picker.Item label="Felgueiras" value="Sabor da Avó - Felgueiras" />
                </Picker>
                <Text style={style.telephone}>
                  <Text style={{fontWeight: 'bold'}}>Telemóvel associado:  </Text>
                  <Text>{telephone}</Text>
                </Text>
                <Text style={style.email}>
                  <Text style={{fontWeight: 'bold'}}>Email: </Text>
                  <Text>{email}</Text>
                </Text>
                <Text style={style.data}>
                  <Text style={{fontWeight: 'bold'}}>Código de desconto: </Text>
                </Text>
                <TextInput style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, top: -40, marginLeft: 200 }}
                  onChangeText={(val) => this.validCode(val)}
                  values={code}
                  onSubmitEditing={(val) => this.validCode(val)}
                  onEndEditing={(e)=>this.validCode(e.nativeEvent.text)}
                />
                { 
                  validCode ? true : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                      <Text style={style.invalidCode}>O código não é válido!</Text>
                    </Animatable.View>
                }
              </View>
            </KeyboardAvoidingView>
            <View style={style.button}>
              <Button
                style={style.button}
                title="Reservar"
                color="tomato"
                onPress={() => this._onPress(chosenDate, chosenHour)}
              />
            </View>
            <FinalHeader />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }

  _onPress = async(chosenDate, chosenHour) => {
    if(this.state.validQuantity!=true){
      Alert.alert('Valores incorretos', '    A quantidade não está correta', [
        {text: 'Voltar a tentar'}
      ]);
    }else{
      let token = await AsyncStorage.getItem("token");
      try {
        let response = await fetch('http://194.210.89.189/Ementas-de-Restauracao/index.php/Cliente', { 
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        });
        let json = await response.json();
        this.setState({
          data: json
        });
      } catch(e){
        console.log("Error to get data: " + e);
      }

      const { data, quantity, user } = this.state;
      const userID=user.map(a=>a.id_utilizador);
      const cliente=data.filter(a=>a.id_utilizador==userID).map(a=>a.id_cliente);

      moment.locale('pt');
      try{
        let response = await fetch('http://194.210.89.189/Ementas-de-Restauracao/index.php/Reserva', { 
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "data": moment().format('YYYY/MM/DD'),
            "hora": moment().format('HH:mm:ss'),
            "quantidade_pessoas": quantity,
            "data_marcada": chosenDate,
            "hora_marcada": chosenHour,
            "estado": "Em análise",
            "id_cliente": cliente[0]
          })
        });
        let reserveId = await response.json();
        Alert.alert(
          "Take Away",
          'Deseja requer um take away?',
          [
            {
              text: "Sim",
              onPress: () => this.checkoutTakeAway(chosenDate, chosenHour, reserveId)
            },
            {
              text: "Não",
              onPress: () => this.checkout(chosenDate, chosenHour)
            }
          ]
        );
      } catch(e){
        console.log("Error to Post Reserva: " + e);
        Alert.alert('Erro', 'Aconteceu um erro ao tentar fazer a sua reserva, contacte o Restaurante!', [
          {text: 'Ok'}
        ]);
      }
    }
  }

  checkoutTakeAway(chosenDate, chosenHour, reserveId){
    console.log(chosenDate);
    this.props.navigation.navigate("CreateTakeAway", { 
      date: chosenDate,
      hour: chosenHour,
      reserveID: reserveId
    });
  }

  checkout(chosenDate, chosenHour){
    console.log(chosenDate);
    this.props.navigation.navigate("AfterShop", { 
      date: chosenDate,
      hour: chosenHour 
    });
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
  reservation: {
    height: 480,
    width: 360,
    marginTop: 50,
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
  telephone: {
    marginTop: -10,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 15,
  },
  email: {
    marginTop: 40,
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 15,
    marginBottom: 40
  },
  button: {
    width: 100,
    height: 100,
    left: 270,
    top: 50,
    marginBottom: -50,
    color:"tomato"
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

export default Reservation;