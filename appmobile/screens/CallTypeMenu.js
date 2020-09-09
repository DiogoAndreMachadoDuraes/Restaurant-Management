import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, Image, TouchableOpacity, ActivityIndicator, AsyncStorage } from "react-native";
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { OwnHeader } from './shared/OwnHeader';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class CallTypeMenu extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Tipo de Menu",
          data:[],
          isLoading: true
        };
      }
      async componentDidMount(){ 
        console.log("Mounting the screen Call Type Menu...");
        let token = await AsyncStorage.getItem("token");
        try {
          let response = await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Menu', { 
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
    }

      render(){
        const { isLoading, data } = this.state;
        const { navigation, route } = this.props;
        const { name } = route.params;
        const typeMenu = data.filter(a=>a.tipo==name).map(a=>a);

        return (
          <View style={style.container}>
            <OwnStatusBar />
            <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>
              <ScrollView>
              <View style={style.menu}>
              {
                typeMenu.map((item)=>{
                  return ( <TouchableOpacity style={style.menuExp} activeOpacity={0.5} onPress={()=>this._onPress(item)}>
                          <Image style={style.menuExpFoto} source={item.foto} ></Image>
                          <Text style={style.titleMenu}>{item.nome}</Text>
                          <Text style={style.textMenu}>{item.descricao}</Text>
                        </TouchableOpacity>);
                })
                       
                }
                  <FinalHeader />
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
        );
      }
    

    _onPress (item) {
     
      this.props.navigation.navigate("ProductDetail",{
          idProduct:item.menu,
          name:item.nome,
          photo:item.foto,
          description:item.descricao,
          price:item.preco
      });        
    }
  }
    const style = StyleSheet.create({
      container: {
        flex: 1,
      },

      imageBackgound: {                         //foto por tras do titulo
        flex:1,
      },

      image: {                         //foto por tras do titulo
        width: 420,
        height: 250,
      },

      text: {                       
        color: "white",
        fontSize: 20,
        fontStyle: "italic",
        textAlign: 'center',
        fontWeight: 'bold',
        top: 30,
        opacity: 1,
      },

      menuText: {
        width: 400,
        height: 320
      },

      menu: {                           //scrollview
        width: "100%",
        height: 1690,
      },

      menuExp: {
        marginTop: 25,
        top: 40,
        marginLeft: 55,
        padding: 20,
        width: 290,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },

      menuExpFoto: {
        width: 100,
        height: 100,
        marginTop: -10
      },

      

      menuExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },

      titleMenu: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "normal",
        top: 12
      },

      textMenu: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      }
    });
export default CallTypeMenu;