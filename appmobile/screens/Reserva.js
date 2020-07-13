import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

import {NossoHeader} from './shared/NossoHeader.js';
import NossoFinal from './shared/NossoFinal.js';
import BarraEstados from "./shared/BarraEstados.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Reserva extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Reserva",
      selectedStartDate: null,
      data: [],
      isLoading: true,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  async componentDidMount(){ 
    console.log("Montando o ecrã Reserva...");

    await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Utilizador', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
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
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render(){
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const minDate = new Date();
    const { data, isLoading } = this.state;
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
                {
                  isLoading ? <ActivityIndicator/> : (
                    <FlatList
                      data={data}
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
                  )
                }
              </View>
            </KeyboardAvoidingView>
            <View style={style.butao}>
              <Button
                style={style.butao}
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

export default Reserva;