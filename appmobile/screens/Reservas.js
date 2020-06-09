import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

import {NossoHeader} from './shared/NossoHeader.js';
import NossoFinal from './shared/NossoFinal.js';
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Reservas extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Reservas",
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  componentDidMount(){ 
    console.log("Montando o ecrã Reservas...");
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

    return (
      <View style={style.container}>
        <BarraEstados />
        <NossoHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={0.7}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding" style={style.calendario}>
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
              <View style={style.reserva}>
                <Text style={style.data}>Data Selecionada: </Text>
                <Text style={{ top: -35, marginLeft: 200 }}>{ startDate }</Text>
                <Text style={style.data}>Quantidade de Pessoas: </Text>
                <TextInput style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, top: -40, marginLeft: 200 }}/>
                <Text style={style.data}>Telemóvel associado: </Text>
                <Text style={{ top: -35, marginLeft: 200 }}>965844022</Text>
                <Text style={style.data}>Email associado: </Text>
                <Text style={{ top: -35, marginLeft: 200 }}>diogo.machado.duraes@gmail.com</Text>
              </View>
            </KeyboardAvoidingView>
            <View style={style.butao}>
              <Button
                style={style.butao}
                title="Reservar"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
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
  calendario: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  reserva: {
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
  butao: {
    width: 100,
    height: 100,
    left: 240,
    top: 30
  }
});

export default Reservas;