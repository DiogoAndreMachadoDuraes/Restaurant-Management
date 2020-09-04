import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList, AsyncStorage} from 'react-native';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon from "react-native-vector-icons/FontAwesome";
import {useTheme, Avatar} from 'react-native-paper';
import { ListItem } from 'react-native-elements';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Account extends React.Component {
    constructor(){
        super();
        this.state={
          name:"A minha conta",
          user: [],
          data:[]
        };
      }
  async componentDidMount(){ 
        console.log("Mounting the screen Account...");
        let token = await AsyncStorage.getItem("token");
    try {
      let response = await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Cliente', { 
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
      console.log("Error to get Product: " + e);
    }
      }
      getUser = async () => {
        try {
          const value = await AsyncStorage.getItem("User");
          if (value !== null) {
            this.setState({ user: JSON.parse(value) });
            console.log(value);
          }
        } catch (e) {
            console.log("Error rending user: " + e);
        }  
      }

    render()
    { 
      const { user, data } = this.state;
      {
        this.getUser();
      }
      const userId=user.map(a=>a.id_utilizador);
      const clientUser=data.filter(a=>a.id_utilizador==userId).map(a=>a);
        return (

            <View style={style.container}>
            <OwnStatusBar />
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>
            <ScrollView>            
            <ImageBackground source={imageBackgound} style={style.imageOut} opacity={0.8}>
                  <View style={style.menu}>
                    
                        <FlatList
                          data={user}
                          keyExtractor={({ id }, index) => id}
                          renderItem={({ item }) => (
                              <View style={style.view}>
                                <Image style={style.image} source={require('../assets/utilizador1.jpg')} ></Image>

                                  <Text style={style.text}>Nome Completo:</Text>
                                  <Icon name='user' style={style.icon} size= {30} color='white' />
                                  <Text style={style.item}>
                                  <Text> {item.nome}
                                  </Text>
                                  </Text>

                                  <Text style={style.text}>Sexo:</Text>
                                  <Icon name='venus-mars' style={style.icon} size= {25} color='white' />
                                  <Text style={style.item}>
                                  <Text> {item.sexo}
                                  </Text>
                                  </Text>

                                  <Text style={style.text}>Data de nascimento:</Text>
                                  <Icon name='calendar-o' style={style.icon} size= {25} color='white' />
                                  <Text style={style.item}>
                                  <Text> {item.data_nascimento}
                                  </Text>
                                  </Text>
                                  
                                  <Text style={style.text}>Telefone:</Text>
                                  <Icon name='phone' style={style.icon} size= {25} color='white'/>
                                  <Text style={style.item}>
                                  <Text> {item.telefone}
                                  </Text>
                                  </Text>

                                  <Text style={style.text}>Número de contribuinte:</Text>
                                  <Icon name='vcard' style={style.icon} size= {25} color='white' />
                                  <Text style={style.item}>
                                  <Text> {item.nif}
                                  </Text>
                                  </Text>

                                  <Text style={style.text}>Rua:</Text>
                                  <Icon name='street-view' style={style.icon} size= {25} color='white'  />
                                  <Text style={style.item}>
                                  <Text> {item.rua}
                                  </Text>
                                  </Text>

                                  <Text style={style.text}>Código Postal:</Text>
                                  <Icon name='street-view' style={style.icon} size= {25} color='white'  />
                                  <Text style={style.item}>
                                  <Text> {item.codigo_postal}
                                  </Text>
                                  </Text>

                                  <Text style={style.text}>Localização:</Text>
                                  <Icon name='street-view' style={style.icon} size= {25} color='white'  />
                                  <Text style={style.item}>
                                  <Text> {item.localizacao}
                                  </Text>
                                  </Text>

                                  <Text style={style.text}>Email:</Text>
                                  <Icon name='at' style={style.icon} size= {25} color='white'  />
                                  <Text style={style.item}>
                                  <Text> {item.email}
                                  </Text>
                                  </Text>
                                  {
                                    clientUser.map((item)=>{
                                      return(
                                        <View>
                                        <Text style={style.item}>
                                          <Text> {item.numero_compras}
                                          </Text>
                                          </Text>
                                          <Text style={style.item}>
                                          <Text> {item.numero_cartao}
                                          </Text>
                                          </Text>
                                        </View>
                                      );
                                    })
                                  }
                              </View>
                          )}
                          />
                        
                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("EditAccount")}> 
                    <Text style={style.btnText}>Editar Conta</Text>
                      <Icon style={style.pencil} name="pencil" color={'red'} size={28}/>
                </TouchableOpacity>
                </View>
            </ImageBackground>  
            </ScrollView>
            </View>
          );
          }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  view:{
    width: "100%",
    height: 1200,
  },

  icon:{
    top:45,
    left:10,
  },

  inputcolor:{
    color: "white",
  },

  imageOut: {
    flex: 1,
    backgroundColor: 'black',
  },

  item:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    top: 15,
    left: 40
  },

  pencil: {
    top: -30,
    left: -60
  },

  menu: {                           //scrollview
    width: "100%",
    height: "100%",
  },

  button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:4,
    backgroundColor:'white',
    marginTop: 130,
    width:150,
    left: 130,
    height: 30,
    top: -30,
  },

  btnText:{
    color:'red',
    fontWeight:'bold',
    fontSize: 20,
    top: -3,
    left: 10
  },

  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width:200,
    left: 110,
    height: 200,
    top: 20,
    borderRadius: 95,
  },

  text:{
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 20,
    left: 50,
    top: 40,
  }

});

  export default Account;