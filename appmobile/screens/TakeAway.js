import * as React from "react";
import { StyleSheet, FlatList, Text, View, ScrollView, ImageBackground, AsyncStorage } from "react-native";
import {Header, Icon} from "react-native-elements";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Accordion from 'react-native-collapsible/Accordion';
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
class TakeAway extends React.Component{
  constructor(){
      super();
      this.state={
        name:"Take Away",
        activeSections: [],
        isLoading: true,
        user: [],
        data:[],
        reservation:[],
        client:[]
      };
    }
  async componentDidMount(){ 
      console.log("Mounting the screen Takeaway...");
      let token = await AsyncStorage.getItem("token");
      try {
        let response = await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Take_away', { 
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
      });
        let json = await response.json();
        this.setState({
          isLoading: false,
          data: json,
      });
      } catch(e){
        console.log("Error to get product: " + e);
      }
      try {
      let response = await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Reserva', { 
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    });
      let json = await response.json();
      this.setState({
        isLoading: false,
        reservation: json,
    });
    } catch(e){
      console.log("Error to get product: " + e);
    }
      try {
      let response = await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Cliente', { 
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    });
      let json = await response.json();
      this.setState({
        isLoading: false,
        client: json,
      });
    } catch(e){
      console.log("Error to get product: " + e);
    }
  }
  getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("User");
      if (value !== null) {
        this.setState({ user: JSON.parse(value) });
      }
    } catch (e) {
        console.log("Error rending user: " + e);
    }
  }
  _renderHeader = section => {
    return (
      <View style={style.header}>
        <Text style={style.headerText}>Take Away nº{section.id_take_away}</Text>
      </View>
    );
  };
  _renderContent = section => {
    return (
      <View style={style.content}>
        {/* <Icon2 name={section.icon} style={style.icon} color={'green'} size={25}></Icon2> */}
        <Text style={style.headerText2}>
        <Text style={{fontWeight: 'bold'}}>Tipo de entrega: </Text>
        <Text>{section.tipo_entrega}</Text>
        </Text>
        <Text style={style.headerText2}>
        <Text style={{fontWeight: 'bold'}}>Preço: </Text>
        <Text>{section.preco}€</Text>
        </Text>
        <Text style={style.headerText2}>
        <Text style={{fontWeight: 'bold'}}>Estado da entrega: </Text>
        <Text>{section.estado}</Text>
        </Text>
      </View>
    );
  };
  _updateSections = activeSections => {
    this.setState({ activeSections });
  };
  /* sections(){
    const { user, data , reservation, client } = this.state;
    {
      this.getUser();
    }
    const userId=user.map(a=>a.id_utilizador);
    const userName=user.map(a=>a.nome);
    const clientId=client.filter(a=>a.id_utilizador==userId).map(a=>a.id_cliente);
    const reservationId=reservation.filter(a=>a.id_cliente==clientId).map(a=>a.id_reserva);
    const allTakeAway=data.filter(a=>a.id_reserva==reservationId).map(a=>a);
    /*     
    const allTakeAway=data.map(a=>a.id_reserva);
    const reservationId=reservation.filter(a=>a.id_cliente==clientId).map(a=>a.id_reserva);
    const takeAwayByUser=data.filter(a=>a.id_reserva==reservationId).map(a=>a);
    const checkHour=reservation.filter(a=>a.id_cliente==clientId).map(a=>a.data_marcada);
    const checkDate=reservation.filter(a=>a.id_cliente==clientId).map(a=>a.hora_marcada);
    const price=allTakeAway.map(a=>a.preco);
    const status=allTakeAway.map(a=>a.estado);
    const SECTIONS = [
      {
        title: 'Data Marcada',
        content: checkDate[0],
        icon: 'calendar'
      },
      {
        title: 'Hora Maracada',
        content: checkHour[0],
        icon:'clock'
      },
      {
        title: 'Nome da Reserva',
        content: userName[0],
        icon:'library'
      },
      {
        title: 'Preço do Take Away',
        content: price[0],
        icon:'cash'
      },
      {
        title: 'Estado da encomenda',
        content: status[0],
        icon:'truck'
      },
    ];
    return SECTIONS;
  } */
  render(){
    /* const section=this.sections(); */
    const { user, data , reservation, client } = this.state;
    /* {
      this.getUser();
    }
    const userId=user.map(a=>a.id_utilizador);
    const userName=user.map(a=>a.nome);
    const clientId=client.filter(a=>a.id_utilizador==userId).map(a=>a.id_cliente); */
    /* const allReservation=reservation.filter(a=>a.id_cliente==clientId).map(a=>a); */
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>  
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackground} opacity={0.6}> 
          <ImageBackground source={require('../assets/take.jpg')} style={style.imageBackgound} opacity={1}/>             
          <ScrollView>
            <View style={style.form}>
              <Accordion
                sections={data}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
                sectionContainerStyle={{paddingVertical: 0.7}}
              />
              <FinalHeader />
            </View>
          </ScrollView> 
        </ImageBackground>
      </View>
    );
  };
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  imageBackgound: {                         //foto por tras do titulo
    width: 395,
    height: 200,
    marginLeft: 0,
    top: 0,
    opacity: 1,
  },
  menu: {                           //scrollview
    width: "100%",
    height: 1000,
  },
  containerCollapsible: {
    flex: 1
  },
  accordion: {
    top: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  header: {
    backgroundColor: '#f0e68c',         //boxtext with title
    padding: 10,
    opacity: 0.8
  },
  headerText: {                              //titles
    textAlign: 'center',
    color: '#dc143c',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerText2: {                              //titles
    fontSize: 20,
    left: 30,
    top:0,
  },
  content: {                            //o que esta a verde
    padding: 10,
    backgroundColor: '#f5fffa',
    opacity: 0.8,
  },
  icon:{
    top:0,
    left: 0,
  },
});
export default TakeAway;