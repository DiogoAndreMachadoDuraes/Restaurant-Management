import * as React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  ImageBackground, 
  FlatList, 
  ActivityIndicator,
  Linking,
  Share,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import FinalHeader from "./shared/FinalHeader.js";
import OwnStatusBar from "./shared/OwnStatusBar.js";
import Icon from "react-native-vector-icons/Foundation";
import Email from "react-native-vector-icons/Fontisto";
import Address from "react-native-vector-icons/Entypo";
import ShareIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class Restaurant extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Restaurantes da Avó",
    };
  }

  async componentDidMount(){ 
    console.log("Mounting the screen Restaurant...");

    let token = await AsyncStorage.getItem("token");
    try {
      let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Restaurante', { 
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      console.log(json);
      this.setState({
        isLoading: false,
        dataSource: json,
      });
    } catch(e){
      console.log("Error to get Restaurant: " + e);
    }
  }

  share = async(rua, codigo_postal, localizacao) => {
    let shareOptions = {
      title: "Partilhar Restaurante",
      message: 'Já experimentei e adorei o Restaurante da Avó na '+ rua + ', ' + codigo_postal +', ' + localizacao +'. Venha nos visitar! http://sabordaavo.pt'
    }

    try {
      let ShareResponse = await Share.share(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      Alert.alert('Partilha não concluída', 'Existiu um erro ao tentar partilhar o restaurante', [
        {text: 'Voltar a tentar'}
      ]);
    }
  }
  
  render(){
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={style.container}>
          <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackground} >
            <ActivityIndicator size="large" color="#556b2f" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 80 }}/>
            <Text>Carregando a informação...</Text>
          </ImageBackground>
        </View>
      );
    }
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <OwnHeader nome={this.state.name} navigation={this.props.navigation} />
        <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} >
          <ScrollView>
            <View style={style.restaurant}>
              <FlatList
                data={this.state.dataSource}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <View style={style.restaurantData}>
                    <ImageBackground style={style.restaurantFoto} source={{uri:''+item.foto+''}} >
                      <View style={style.restaurantName}>
                        <Text style={style.title}>{item.nome}</Text>
                      </View>
                      <TouchableOpacity style={style.share} onPress={()=>this.share(item.rua, item.codigo_postal, item.localizacao)}>
                        <ShareIcon name="share-outline" color="dodgerblue" size={30}/>
                      </TouchableOpacity>
                    </ImageBackground>
                    <Address name="address" size={25} style={style.text}>
                      <Text style={style.text}> : {item.rua}, {item.codigo_postal}, {item.localizacao}</Text>
                    </Address>
                    <TouchableOpacity style={style.text} onPress={()=>{Linking.openURL('mailto:'+item.email+'');}}>
                      <Email name="email" size={25} style={style.text}>
                        <Text style={style.text}> : {item.email}</Text>
                      </Email>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.text} onPress={()=>{ Linking.openURL('tel:'+item.telefone+'');} }>
                      <Icon name="telephone" size={25} style={style.text}>
                        <Text> : {item.telefone}</Text>
                      </Icon>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <FinalHeader />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackgound: {
    flex: 1,
    backgroundColor: "azure"
  },
  restaurant: {
    width: "100%",
    height: "100%",
  },
  restaurantData: {
    marginTop: 40,
    marginLeft: 20,
    width: 360,
    height:440,
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  restaurantFoto: {
    top:-10,
    width: 360,
    height: 350
  },
  restaurantName: {
    backgroundColor:"white",
    width:180,
    height:40,
    top: 30,
    left:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  share: {
    marginLeft: 310,
    marginTop: -10,
    width:30,
    height:32,
    backgroundColor:"white",
    borderRadius: 8
  },
  title: {
    color: "dodgerblue",
    fontSize: 15,
    fontStyle: "italic",
    textAlign: 'center',
    marginVertical: 8
  },
  text: {
    color: "dodgerblue",
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 3,
  }
});

export default Restaurant;