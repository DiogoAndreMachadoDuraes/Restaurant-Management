import * as React from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity, AsyncStorage } from "react-native";
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { OwnHeader } from './shared/OwnHeader';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class CallTypeMenu extends React.Component{
    constructor(){
      super();
      this.state={
        data:[],
        isLoading: true
      };
    }
async componentDidMount(){ 
  console.log("Mounting the screen Call Type Menu...");
  let token = await AsyncStorage.getItem("token");
  try {
    let response = await fetch('http://194.210.89.189/Ementas-de-Restauracao/index.php/Menu', { 
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
    const typeMenu = data.filter(a=>a.tipo==type).map(a=>a);

    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={type} navigation={this.props.navigation} />
        <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>
          <ScrollView>
          <View style={style.menu}>
          {
            typeMenu.map((item)=>{
              return ( <TouchableOpacity style={style.menuExp} activeOpacity={0.5} onPress={()=>this._onPress(item)}>
                      <Image style={style.menuExpFoto} source={{uri:item.foto}} ></Image>
                      <Text style={style.titleMenu}>{item.nome}</Text>
                      <Text style={style.textMenu}>{item.descricao}</Text>
                      <Text style={style.textMenu}>
                        <Text style={{fontWeight:"bold"}}>Preço: </Text> 
                        <Text>{item.preco}€</Text>
                      </Text>
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
    
    this.props.navigation.navigate("MenuDetail",{
        idMenu:item.menu,
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

export default CallTypeMenu;