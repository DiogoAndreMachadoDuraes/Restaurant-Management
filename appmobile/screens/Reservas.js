import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import {Header, Icon} from "react-native-elements";
import CalendarPicker from 'react-native-calendar-picker';
import { SocialIcon } from 'react-native-elements';

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

        return (
          <View style={style.container}>
          <StatusBar hidden={false} barStyle={"dark-content"} backgroundColor={'white'}></StatusBar>
            <Header
                leftComponent={<Icon name="menu" color= '#fff' size={30} onPress={() => this.props.navigation.toggleDrawer()}/>}
                centerComponent={<Text style={{fontSize: 25, fontWeight: 'bold', fontStyle: 'italic', color: '#fff', marginTop: -20}}>Reservas</Text>}
                rightComponent={<Icon name="local-grocery-store" color= '#fff' size={30} onPress={() => this.props.navigation.navigate("Carrinho")}/>}
                containerStyle={{
                  backgroundColor: "green",
                  justifyContent: 'space-around',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderColor: "white",
                  height: 80,
                }}
            />
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={0.5}>
            <ScrollView>
              <KeyboardAvoidingView behavior="padding" style={style.calendario}>
                <CalendarPicker
                  onDateChange={this.onDateChange}
                />
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
              <View style={style.final}>
                    <Text style={style.companhiaText}>@ Sabor da Avó 2020</Text>
                    <Text style={style.direitosText}>Todos os direitos autorais.</Text>
                    <Text style={style.redesText}>Siga-nos em:</Text>
                    <SocialIcon type='facebook' style={style.facebook}/>
                    <SocialIcon type="instagram"style={style.instagram}/>
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
      },
      companhiaText: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      direitosText: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      redesText: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      facebook: {
        marginTop: 20,
        right: -120,
      },
      instagram: {
        marginTop: -59,
        right: -200,
      },
      final: {
        backgroundColor: "green",
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        paddingVertical: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }
    });

export default Reservas;