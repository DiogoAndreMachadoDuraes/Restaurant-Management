import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList, AsyncStorage} from 'react-native';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon from "react-native-vector-icons/FontAwesome";

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
          }
        } catch (e) {
            console.log("Error rending user: " + e);
        }  
      }
      onPress(){
        console.log("deu");
      }

    render()
    { 
      const { user, data } = this.state;
      {
        this.getUser();
      }
      const userId=user.map(a=>a.id_utilizador);
      const clientUser=data.filter(a=>a.id_utilizador==userId).map(a=>a);
      console.log(clientUser);
        return (

            <View style={style.container}>
            <OwnStatusBar />
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>
            <ScrollView>            
            <ImageBackground source={imageBackgound} style={style.imageOut} opacity={0.5}>
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

                                  <Text style={style.text}>Género:</Text>
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
                                  <Text style={style.text1}>O seu cartão</Text>
                                    {
                                    clientUser.map((item)=>{
                                      if(item.numero_compras>=10){
                                        return(
                                          <View>
                                          <Card style={style.card} onPress={this.onPress}>
                                    <Card.Title title="Sabor da Avó" subtitle="Cartão do restaurante" />
                                    <Card.Cover source={{ uri: 'https://travelandleisureindia.in/wp-content/uploads/2019/03/Feature-image-Paella-Seafood.jpg' }} opacity={0.5} />
                                    <Card.Actions>
                                      <Button>Refeição grátis</Button>
                                    </Card.Actions>
                                    <Text style={style.textCardTitle}>Obrigado pela sua preferência!</Text>
                                            <Text style={style.itemCard}>
                                            <Text style={style.textCard}>Número de Compras:</Text>
                                              <Text> {item.numero_compras}
                                            </Text>
                                            </Text>
                                            <Text style={style.itemCard}>
                                            <Text style={style.textCard}>Número cartão de cliente:</Text>
                                              <Text> {item.numero_cartao}
                                            </Text>
                                            </Text>
                                            </Card>
                                          </View>
                                          
                                        );
                                      } else{
                                        return(
                                        <View>
                                        <Card style={style.card} onPress={this.onPress}>
                                    <Card.Title title="Sabor da Avó" subtitle="Cartão do restaurante" />
                                    <Card.Cover source={{ uri: 'https://i.pinimg.com/originals/f1/15/5a/f1155a4cce73af17fd2e22880fa59b4a.jpg' }} opacity={0.5} />
                                    <Text style={style.textCardTitle}>Obrigado pela sua preferência!</Text>
                                        <Text style={style.itemCard}>
                                        <Text style={style.textCard}>Número de Compras:</Text>
                                          <Text> {item.numero_compras}
                                          </Text>
                                          </Text>
                                          <Text style={style.textCard}>Número cartão de cliente:</Text>
                                          <Text style={style.itemCard}>
                                          <Text> {item.numero_cartao}
                                          </Text>
                                          </Text>
                                          </Card>
                                        </View>
                                        
                                      );
                                      }
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
    height: 1380,
  },

  card:{
    width: 380,
    height: 320,
    top: 70,
    left: 7,
    backgroundColor: '#e0ffff',
    borderRadius: 10,
  },

  itemCard:{
    color: 'black',
    fontWeight: 'bold',
    top: -160,
    left: 110,
    fontSize: 20,
  },

  textCardTitle:{
    color: 'black',
    fontWeight: 'bold',
    top: -230,
    left: 10,
    fontSize: 25,
  },

  textCard:{
    color: 'black',
    fontWeight: 'bold',
    top: -160,
    left: 110,
    fontSize: 20,
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
    top: -80,
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
  },

  text1:{
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 25,
    left: 20,
    top: 60,
  }

});

  export default Account;