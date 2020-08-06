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
  },
  {
    title: 'Hora Maracada',
    content: '12h:30min',
  },
  {
    title: 'Número de Pessoas',
    content: '7 pessoas',
  },
  {
    title: 'Nome da Resrva',
    content: 'José Leite',
  },
  {
    title: 'Valor Total',
    content: '€21.40',
  },
  {
    title: 'Estado da encomenda',
    content: 'Em preparação ',
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
            <Text>{section.content}</Text>
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
            style={{ backgroundColor: (isActive ? 'black' : 'black') }}>
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
          <ImageBackground style={style.imageBackground} opacity={0.4}>
          <View style={style.containerCollapsible}>
          <ScrollView>
          <View style={style.menu}>
          <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>  
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={style.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
            <Accordion
              sections={SECTIONS}
              activeSections={this.state.activeSections}
              renderSectionTitle={this._renderSectionTitle}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              onChange={this._updateSections}
            />
            
            
            </View>
            </ScrollView>
          </View>
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
        flex: 1
      },

      imageBackgound: {                         //foto por tras do titulo
        width: 395,
        height: 200,
        marginLeft: 0,
        top: 200,
        opacity: 1,
      },

      menu: {                           //scrollview
        width: "100%",
        height: 1690,
      },

      containerCollapsible: {
        flex: 1,
        backgroundColor: "black"
      },

      title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
      },

      header: {
        backgroundColor: '#fff',         //boxtext with title
        padding: 10,
      },

      headerText: {                              //titles
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
      },

      content: {                            //o que esta a verde
        padding: 20,
        backgroundColor: 'green',
      }

    });
export default TakeAway;