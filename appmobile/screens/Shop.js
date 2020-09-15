import * as React from 'react';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { Alert, AsyncStorage, StyleSheet, View, Text, Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';

class Shop extends React.Component {
  constructor(){
      super();
      this.state={
        title:"Carrinho",
        buyMenu: [],
        buyProduct: [],
        menu: [],
        product:[],
        client:[],
        reservation:[],
        user:[],
        name:[],
        photo: [],
        price: [],
        quantity: 1,
        total: [],
        description: []
      };
    }
  async componentDidMount(){ 
    console.log("Mounting the screen Shop...");
    let token = await AsyncStorage.getItem("token");
/*     await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Menu', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => {
      this.setState({ menu: json, isLoading:false });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
    await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Produto', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => {
      this.setState({ product: json, isLoading:false });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
    await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Cliente', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => {
      this.setState({ client: json, isLoading:false });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
    await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Reserva', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => {
      this.setState({ reservation: json, isLoading:false });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
    await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Compra_menu', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
      .then((response) => response.json())
      .then((json) => {
        this.setState({ buyMenu: json, isLoading:false });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
      await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Compra_produto', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
      .then((response) => response.json())
      .then((json) => {
        this.setState({ buyProduct: json, isLoading:false });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      }); */
      try {
        const value = await AsyncStorage.getItem("User");
        if (value !== null) {
          this.setState({ user: JSON.parse(value) });
        }
      } catch (e) {
        console.log("Error rending user: " + e);
      }
      const name=await AsyncStorage.getItem("productName", name);
      const description=await AsyncStorage.getItem("description", description);
      const photo=await AsyncStorage.getItem("photo", photo);
      const price=await AsyncStorage.getItem("price", price);
      this.setState({ name, price, photo, total: price, description });
  }
  threeOptionAlertHandler = () => {
    Alert.alert(
      //title
      'Atenção',
      //body
      'Estás prestes a eliminar os produtos do teu carrinho de compras. Tens a certeza?',
      [
        { text: 'ESVAZIAR CARRINHO', onPress: () => console.log('Yes Pressed') },
        { text: 'CANCELAR', onPress: () => console.log('Cancel Pressed') },
      ],
        { cancelable: true }
    );
  }
  quantity(type){
    let { quantity, name, photo, price, total } = this.state;
    let i= quantity;
    if(type){
      i++;
      let totalValue=i*price;
      this.setState({ quantity: i, total: totalValue });
    }else if(type==false && i>=2){
      let totalValue=total-price;
      i--;
      this.setState({ quantity: i, total: totalValue });
    }else if(type==false && i==1)
    {
      this.setState({ quantity: 0 });
    }
  }
  render()
  {
    const { name, photo, price, quantity, total, description } = this.state;
    return (
      <View style={style.container}>
        <OwnStatusBar />
        <HeaderWihoutShop nome={this.state.title} navigation={this.props.navigation}/>
          <ScrollView>
          <View>
          <ImageBackground source={require("../assets/imageBackground.jpg")}  style={style.imageBackgound} opacity={1}>
            { 
              quantity>=1 ?
                <View style={style.menuExp}>
                  <Image style={style.menuExpFoto} source={{uri: ''+photo+''}} ></Image>
                  <Text style={style.title}>{name}</Text>
                  <Text style={style.title1}>{description}</Text>
                  <Text style={style.price}>Preço: {total}€</Text>
                  <TouchableOpacity style={style.plus} onPress={()=>this.quantity(true)}>
                    <Icon2 name="plus-box-outline" color={'red'} size={20}/>
                  </TouchableOpacity>
                  <Text style={style.i}>{quantity}</Text>
                  <TouchableOpacity style={style.minus} onPress={()=>this.quantity(false)}>
                    <Icon2 name="minus-box-outline" color={'red'} size={20}/>
                  </TouchableOpacity>
                </View>
              : 
                <View style={style.nothing}>
                  <Text style={style.textNothing}>Não contém nada no carrinho!</Text>
                </View>
            }
            <TouchableOpacity style={style.button} onPress={() => this.props.navigation.goBack()}>
                <Text style={style.btnText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button1} onPress={() => this._onPress()}>
                <Text style={style.btnText}>Comprar</Text>
            </TouchableOpacity>
          </ImageBackground>    
          </View>
        </ScrollView>
      </View>
    );
  }
  _onPress = () => {
    Alert.alert(
      "Continuar a comprar?",
      'Deseja continuar a fazer as suas compras?',
      [
        {
          text: "Sim",
          onPress: () => this.props.navigation.navigate("Home")
        },
        {
          text: "Finalizar compra",
          onPress: () => this.props.navigation.navigate("Reservation")
        }
      ]
    );
    /* try
    {
      await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Compra_produto', { 
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "email":this.state.email,
              "password":this.state.password
          })
      });
      this.props.navigation.navigate ("Reserva" , {
        itemId= item.id,
        name=item.nome,
        description=item.descricao,
        foto=item.foto
      });
      this.props.navigation.navigate("Reserva");
    } catch(e){
        console.log(e);
    }
    try
    {
      await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Compra_menu', { 
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },     
          body: JSON.stringify({
              "email":this.state.email,
              "password":this.state.password
          })
        });
      this.props.navigation.navigate ("Reserva" , {
        item
      });
    } catch(e){
      console.log(e);
    }  */  
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  menuExp: {
    marginTop: 120,
    width: 400,
    height: 220,
    backgroundColor: '#fff',
  },
  
  menuExpFoto: {
    width: 150,
    height: 150,
    left: 10,
    marginTop: 20,
  },
  
  title:{
    top: -150,
    marginLeft: 200,
    color: "green",
    fontWeight: 'bold',
    fontSize: 30,
  },
  
  title1:{
    top: -20,
    left: 10,
    color: "black",
    fontSize: 13,
  },
  
  price:{
    top: -120,
    left: 200,
    color: "black",
    fontSize: 15,
  },
 
  minus:{
    marginTop: -40,
    width: 20,
    height: 20,
    left: 290,
  },
  plus:{
    marginTop: -139,
    width: 20,
    height: 20,
    left: 340,
  },

  i:{
    top:-21,
    width: 20,
    height: 20,
    left:320,
  },
  
  nothing:{
    marginTop: 120,
    width: 400,
    height: 200,
    backgroundColor: '#fff',
  },
  
  textNothing:{
    marginTop: 80,
    marginLeft: 20,
    color: "green",
    fontWeight: 'bold',
    fontSize: 26,
  },
  
  image:{
    width: 130,
    height: 130,
    marginTop: 150,
    left: 30,
  },
  
  imageBackgound: {                         //foto por tras do titulo
    width: 420,
    height: 800,
    opacity: 0.9,
    },
  
  menu: {                           //scrollview
    width: "100%",
    height: 1000,
  },
  
  button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:10,
    backgroundColor:'white',
    marginTop: 140,
    width:100,
    left: 60,
  },
  
  button1:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:10,
    backgroundColor:'white',
    marginTop: -50,
    width:100,
    left: 230,
  },

  btnText:{
    color:'red',
    fontWeight:'bold',
    fontSize: 20,
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    left: 20,
  }
});

export default Shop;