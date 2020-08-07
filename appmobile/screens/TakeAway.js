import * as React from "react";
import { StyleSheet, FlatList, Text, View, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import {Header, Icon} from "react-native-elements";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const SECTIONS = [
  {
    title: 'Data Marcada',
    content: '10/09/2020',
    icon: 'calendar-month',
  },
  {
    title: 'Hora Maracada',
    content: '12h:30min',
    icon:'clock'
  },
  {
    title: 'Número de Pessoas',
    content: '7 pessoas',
    icon:'human',
  },
  {
    title: 'Nome da Resrva',
    content: 'José Leite',
    icon:'library',
  },
  {
    title: 'Valor Total',
    content: '€21.40',
    icon:'cash',
  },
  {
    title: 'Estado da encomenda',
    content: 'Em preparação ',
    icon:'truck',
  },
];
class TakeAway extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Take Away",
          activeSections: [],
        };
      }
      componentDidMount(){ 
        console.log("Mounting the screen TakeAway...");
      }

      
      _renderSectionTitle = section => {
        return (
          <View style={style.content}>
            <Text>{section.content}</Text>
          </View>
        );
      };
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
              name={section.icon} style={style.icon} color={'#cd5c5c'} size={28}
            ></Icon2>
             <Text style={style.headerText2}>{section.content}</Text>
          </View>
        );
      };
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
      renderHeader(section, index, isActive, sections) {
        return (
          <Animatable.View
            duration={300}
            transition="backgroundColor"
            style={{ backgroundColor: (isActive ? 'green' : 'green') }}>
            <Text style={style.headerText}>{section.title}</Text>
          </Animatable.View>
        );
      }
      _renderContent(section, i, isActive, sections) {
        return (
          <Animatable.View
            duration={300}
            transition="backgroundColor"
            style={{ backgroundColor: (isActive ? 'black' : 'black') }}>
            <Animatable.Text
              duration={300}
              easing="ease-out"
              animation={isActive ? 'zoomIn' : false}>
              {section.content}
            </Animatable.Text>
          </Animatable.View>
        );
      }
      render(){
        return (
          <View style={style.container}>
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>  
            <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackground} opacity={0.6}> 
              <ImageBackground source={require('../assets/take.jpg')} style={style.imageBackgound} opacity={1}>             
              </ImageBackground>
              <ScrollView>
                <View style={style.menu}>
                <Collapsible collapsed={this.state.collapsed} align="center">
                  <View style={style.content}>
                  </View>
                </Collapsible>
                <View style={style.accordion}>
                  <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                    sectionContainerStyle={{paddingVertical: 0.7}}
                  />
                </View>
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
        fontWeight: '500',
      },

      headerText2: {                              //titles
        textAlign: 'center',
        fontSize: 20,
        left: -100,
        top:-30,
      },

      content: {                            //o que esta a verde
        padding: 15,
        backgroundColor: '#f5fffa',
        opacity: 0.8,
      },

      icon:{
        top:0,
        left: 0,
      },
    });
export default TakeAway;