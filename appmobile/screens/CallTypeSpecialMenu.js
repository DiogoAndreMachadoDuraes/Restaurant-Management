import * as React from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity, ActivityIndicator, AsyncStorage } from "react-native";
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { OwnHeader } from './shared/OwnHeader';

class CallTypeSpecialMenu extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      isLoading: true
    };
  }
  async componentDidMount(){ 
    console.log("Mounting the screen Call Type Special Menu...");
    let token = await AsyncStorage.getItem("token");
    try {
      let response = await fetch('http://194.210.89.189/Ementas-de-Restauracao/index.php/Ementa', { 
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
    const { type } = route.params;
    const typeSpecialMenu = data.filter(a=>a.tipo==type).map(a=>a);
    const photo = data.filter(a=>a.tipo==type).map(a=>a.foto);

    console.log(photo);

    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={type} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} opacity={1}>
          <ScrollView>
            <View style={style.menu}>
              {
                typeSpecialMenu.map((item)=>{
                  return ( 
                    <TouchableOpacity style={style.menuExp} activeOpacity={0.5} onPress={()=>this._onPress(item)}>
                      <Image style={style.menuExpFoto} source={{uri:item.foto}} ></Image>
                      <Text style={style.titleMenu}>{item.nome}</Text>
                      <Text style={style.textMenu}>
                        <Text style={{fontWeight:"bold"}}>Preço: </Text> 
                        <Text>{item.preco}€</Text>
                      </Text>
                    </TouchableOpacity>
                  );
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
    
    this.props.navigation.navigate("MenuDetail",{
        idMenu:item.id_ementa,
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

  menu: {                           //scrollview
    width: "100%",
    height: "100%",
  },

  menuExp: {
    marginTop: 30,
    marginLeft: 40,
    padding: 30,
    width: 320,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuExpFoto: {
    width: 180,
    height: 180
  },

  titleMenu: {
    color: "#000",
    fontSize: 20,
    fontWeight: 'bold',
    top: 12,
    textAlign: 'center'
  },

  textMenu: {
    color: "#000",
    fontSize: 15,
    textAlign: 'center',
    top: 20
  }
});

export default CallTypeSpecialMenu;