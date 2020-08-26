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
  FlatList ,
  AsyncStorage,
  Picker,
} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import NossoFinal from './shared/NossoFinal.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as Animatable from 'react-native-animatable';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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
      take: "nao",
      type: "Restaurante",
      price: 5,
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

  setTake = () => {
    if(this.state.take=="sim"){
      return(
        <View>
          <FlatList
            data={this.state.user}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback>
                <Text style={style.data}>Telemóvel associado:  {item.telefone}</Text>
                <Text style={style.data}>Morada: {item.rua}, {item.codigo_postal}, {item.localizacao}</Text>
                <Text style={style.data}>Email: {item.email}</Text>
              </TouchableWithoutFeedback>
            )}
          />
          <Text style={style.data}>Tipo de entrega: </Text>
          <Picker
            style={{ height: 50, width: 190, top: -45, left: 140}}
            selectedValue={this.state.type}
            onValueChange={(value, index) => this.setState({ type: value })}
            mode='dropdown'
          >
            <Picker.Item label="Restaurante" value="Restaurante" />
            <Picker.Item label="Domicílio" value="Domicílio" />
          </Picker>
          <Text style={style.data}>Preço: </Text>
          {
            this.price()
          }
        </View>
      );
    }else{
      return;
    }
  }

  price = () => {
    if(this.state.type=="Restaurante"){
      this.setState({ price: 5 });
      return(
        <Text style={{marginTop: -30, left: 80}}>5€</Text>
      );
    }else{
      this.setState({ price: 10 });
      return(
        <Text style={{marginTop: -30, left: 80}}>15€</Text>
      );
    }
  }

  render(){
    {
      this.getData();
    }

    const { validCode, validQuantity, number} = this.state;
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
                <TextInput style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, top: -40, marginLeft: 200 }}
                  onChangeText={(val) => this.validQuantity(val)}
                  values={this.state.quantity}
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
                <Text style={style.data}>Restaurante: </Text>
                <Picker
                  style={{ height: 50, width: 190, top: -45, left: 120}}
                  selectedValue={this.state.restaurant}
                  onValueChange={(value, index) => this.setState({ restaurant: value})}
                  mode='dropdown'
                >
                  <Picker.Item label="Viana do Castelo" value="Sabor da Avó - Viana do Castelo" />
                  <Picker.Item label="Bragança" value="Sabor da Avó - Bragança" />
                  <Picker.Item label="Felgueiras" value="Sabor da Avó - Felgueiras" />
                </Picker>
                <Text style={style.data}>Take Away: </Text>
                <Picker
                  style={{ height: 50, width: 100, top: -45, left: 120}}
                  selectedValue={this.state.take}
                  onValueChange={(value, itemIndex) => this.setState({take: value})}
                  mode='dropdown'
                >
                  <Picker.Item label="Não" value="nao" />
                  <Picker.Item label="Sim" value="sim" />
                </Picker>
                { 
                  this.setTake()
                }
                
              </View>
            </KeyboardAvoidingView>
            <View style={style.button}>
              <Button
                style={style.button}
                title="Reservar"
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
  reservation: {
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

export default Reservation;