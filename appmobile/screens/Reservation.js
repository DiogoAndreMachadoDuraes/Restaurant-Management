import * as React from "react";
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
import CalendarPicker from 'react-native-calendar-picker';
import {NossoHeader} from './shared/NossoHeader.js';
import NossoFinal from './shared/NossoFinal.js';
import BarraEstados from "./shared/BarraEstados.js";

class Reservation extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Reserva",
      selectedStartDate: null,
      user: null
    };
    this.onDateChange = this.onDateChange.bind(this);
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

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render(){

    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const minDate = new Date();

    {
      //this.getData();
    }
    return (
      <View style={style.container}>
        <BarraEstados />
        <NossoHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} opacity={0.7}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding" style={style.calendar}>
              <View style={{backgroundColor:"white", opacity: 0.7}}>
                <CalendarPicker
                  onDateChange={this.onDateChange}
                  minDate={minDate}
                  weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                  months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                  previousTitle="Anterior"
                  nextTitle="Próximo"
                  selectedDayColor="#556b2f"
                  todayBackgroundColor={'transparent'}
                />
              </View>
              <View style={style.reservation}>
                <Text style={style.data}>Data Selecionada: </Text>
                <Text style={{ top: -35, marginLeft: 200 }}>{ startDate }</Text>
                <Text style={style.data}>Quantidade de Pessoas: </Text>
                <TextInput style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, top: -40, marginLeft: 200 }}/>
                <FlatList
                  data={this.state.user}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={1}>
                      <Text style={style.data}>Telemóvel associado: </Text>
                      <Text style={{ top: -35, marginLeft: 200 }}>{item.telefone}</Text>
                      <Text style={style.data}>Email associado: </Text>
                      <Text style={{ top: -35, marginLeft: 200 }}>{item.email}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={style.button}>
              <Button
                style={style.button}
                title="Reservar"
                color="black"
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
    backgroundColor: "#fff",
    opacity: 0.9
  },
  data: {
    marginTop: 20,
    marginLeft: 20,
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