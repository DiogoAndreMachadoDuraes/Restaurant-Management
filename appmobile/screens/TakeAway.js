import * as React from "react";
import { StyleSheet, FlatList, Text, View, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import {Header, Icon} from "react-native-elements";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Accordion from 'react-native-collapsible/Accordion';
import NossoFinal from './shared/NossoFinal.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const SECTIONS = [
  {
    title: 'Data Marcada',
    content: '10/09/2020',
    icon: 'calendar'
  },
  {
    title: 'Hora Maracada',
    content: '12h:30min',
    icon:'clock'
  },
  {
    title: 'Número de Pessoas',
    content: '7 pessoas',
    icon:'human'
  },
  {
    title: 'Nome da Resrva',
    content: 'José Leite',
    icon:'library'
  },
  {
    title: 'Valor Total',
    content: '€21.40',
    icon:'cash'
  },
  {
    title: 'Estado da encomenda',
    content: 'Em preparação',
    icon:'truck'
  },
];
class TakeAway extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Take Away",
          activeSections: [],
          isLoading: true,
          user: [],
          data:[]
        };
      }
      async componentDidMount(){ 
        console.log("Mounting the screen Takeaway...");

        await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Take_away', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
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

    getUser = async () => {
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

      _renderHeader = section => {
        return (
          <View style={style.header}>
            <Text style={style.headerText}>{section.title}</Text>
          </View>
        );
      };
      _renderContent = section => {
        return (
          <View style={style.content}>
            <Icon2
              name={section.icon} style={style.icon} color={'green'} size={25}
            ></Icon2>
            <Text style={style.headerText2}>{section.content}</Text>
          </View>
        );
      };
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
      render(){
        return (
          <View style={style.container}>
            <OwnStatusBar />
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>  
            <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackground} opacity={0.6}> 
              <ImageBackground source={require('../assets/take.jpg')} style={style.imageBackgound} opacity={1}/>             
              <ScrollView>
                <View style={style.form}>
                    {
                    this.state.data.filter(item=>item.id_funcionario==user.id).map((item)=>{
                      return (
                        <View>
                  <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                    sectionContainerStyle={{paddingVertical: 0.7}}
                  />
                  </View>
                      );
                    })
                  }
                  <NossoFinal />
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
        fontSize: 20,
      },

      headerText2: {                              //titles
        fontSize: 20,
        left: 50,
        top:-30,
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