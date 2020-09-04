import * as React from 'react';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import {Icon} from "react-native-elements";
import { Alert, AsyncStorage, StyleSheet, View, Text, Image, ImageBackground, ScrollView, Button, TouchableOpacity, FlatList } from 'react-native';

const Coco = require('../assets/coco.jpg');

const dataFromApi = [
  {
    id: 1,
    imagem: Coco,
    quantidade:1
  }
]

class Shop extends React.Component {
  constructor(){
      super();
      this.state={
        name:"Carrinho",
        buyMenu: [],
        buyProduct: [],
        menu: [],
        product:[],
        client:[],
        reservation:[],
        user:[]
      };
    }

  async componentDidMount(){ 
    console.log("Mounting the screen Shop...");
    let token = await AsyncStorage.getItem("token");
    await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Menu', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => {
      this.setState({ menu: json, isLoading:false });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });

    await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Produto', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => {
      this.setState({ product: json, isLoading:false });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });

    await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Cliente', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => {
      this.setState({ client: json, isLoading:false });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });

    await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Reserva', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => {
      this.setState({ reservation: json, isLoading:false });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });

    await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Compra_menu', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
      .then((response) => response.json())
      .then((json) => {
        this.setState({ buyMenu: json, isLoading:false });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    
      await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Compra_produto', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
      .then((response) => response.json())
      .then((json) => {
        this.setState({ buyProduct: json, isLoading:false });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
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

  quantidade = (type) => {
    let i = dataFromApi.map[a=>a.quantidade];
    console.log(i);
    if (type==true) {
      i = i + 1
      return i;
      }
      else if (type==false){
      i = i - 1
      return i;
      }else if (type==1){
      return i;
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
     
    render()
    {
      const {menu, product, buyMenu , buyProduct, client, reservation, user } = this.state;
      {
        this.getUser();
      }

      const userId=user.map(a=>a.id_utilizador);
      const clientId=client.filter(a=>a.id_utilizador==userId).map(a=>a.id_cliente);
      const reservationId=reservation.filter(a=>a.id_cliente==clientId).map(a=>a.id_reserva);
      const menuBuyId=buyMenu.filter(a=>a.id_reserva==reservationId).map(a=>a.id_menu);
      const menuBuy=menu.filter(a=>a.id_menu==menuBuyId).map (a=>a);
      const productBuyId=buyProduct.filter(a=>a.id_reserva==reservationId).map(a=>a.id_produto);
      const productBuy=product.filter(a=>a.id_produto==productBuyId).map (a=>a);
      const allBuyMenu=buyMenu.filter(a=>a.id_reserva==reservationId).map (a=>a);
      const allBuyProduct=buyProduct.filter(a=>a.id_reserva==reservationId).map (a=>a);

      console.log(productBuy);

      return (
          <View style={style.container}>
            <OwnStatusBar />
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>

              <ScrollView>
              <View>
              <ImageBackground source={require("../assets/imageBackground.jpg")}  style={style.imageBackgound} opacity={1}>
                  
                  <View style={style.shop}>
                    <Icon name="local-grocery-store" color={'red'} size={28}/>
                    <Text style={style.shopText}>As minhas compras</Text>
                  </View>

                  <View style={style.button2}>
                    <Button title="Esvaziar Carrinho" color="red" onPress={this.threeOptionAlertHandler}/>
                  </View>
                  {
                      allBuyMenu.map((item)=>{
                        return (
                        <View style={style.menuExp}>
                        <FlatList data={menuBuy}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                          <>
                            <Text style={style.title}>{item.nome} </Text>
                            <Image style={style.menuExpFoto} source={item.foto} ></Image>
                          </>
                        )}
                      />
                    <Text style={style.title1}>{item.preco}</Text>
                      <TouchableOpacity style={style.trash}>
                        <Icon2 name="delete" color={'red'} size={20}/>
                        <Text style={style.trashText}>Remover</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={style.plus} onPress={()=>this.quantidade(true)}>
                        <Icon2 name="plus-box-outline" color={'red'} size={20}/>
                      </TouchableOpacity>
                      <Text style={style.i}> {item.quantidade}</Text>
                      <TouchableOpacity style={style.minus} onPress={()=>this.quantidade(false)}>
                        <Icon2 name="minus-box-outline" color={'red'} size={20}/>
                      </TouchableOpacity>
                    </View>
                  );
                })
              }
                  {
                    allBuyProduct.map((item)=>{
                      return (
                      <View style={style.menuExp}>
                      <FlatList data={productBuy}
                      keyExtractor={({ id }, index) => id}
                      renderItem={({ item }) => (
                          <View>
                            <Text style={style.title}>{item.nome} </Text>
                            <Image style={style.menuExpFoto} source={item.foto} ></Image>
                          </View>
                        )}
                    />
                      <Text style={style.title1}>{item.preco}</Text>
                        <TouchableOpacity style={style.trash}>
                          <Icon2 name="delete" color={'red'} size={20}/>
                          <Text style={style.trashText}>Remover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.plus} onPress={()=>this.quantidade(true)}>
                          <Icon2 name="plus-box-outline" color={'red'} size={20}/>
                        </TouchableOpacity>
                        <Text style={style.i}> {item.quantidade}</Text>
                        <TouchableOpacity style={style.minus} onPress={()=>this.quantidade(false)}>
                          <Icon2 name="minus-box-outline" color={'red'} size={20}/>
                        </TouchableOpacity>
                      </View>
                    );
                  })
                }
                  <TouchableOpacity style={style.button} onPress={() => this.props.navigation.goBack()}>
                      <Text style={style.btnText}>Voltar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={style.button1} _onPress={() => this._onPress(item) }>
                      <Text style={style.btnText}>Comprar</Text>
                  </TouchableOpacity>
                </ImageBackground>    
              </View>
            </ScrollView>
          </View>
        );
      }
}

_onPress = async() => {
  /*        try
          {
              await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Compra_produto', { 
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
              await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Compra_menu', { 
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
            } */    
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  i:{
    top:-40,
    left:140
  },

  title:{
    top: 83,
    left: 0,
    color: "green",
    fontWeight: 'bold',
    fontSize: 20
  },

  title1:{
    top: 120,
    left: -20,
    color: "black",
    fontSize: 15
  },

  trash: {
    top: 50,
    left: 120
  },

  trashText: {
    top:-20,
    left: 20,
    color: "red",
    fontWeight: 'bold',
    fontSize: 15
  },

  minus:{
    top: -60,
    left: 120
  },
    
  plus:{
    top:-20,
    left:160
  },

  menuExp: {
    marginTop: 25,
    top: 95,
    marginLeft: 0,
    padding: 20,
    width: 400,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  menuExpFoto: {
    width: 80,
    height: 80,    
  },

  image:{
    width: 130,
    height: 130,
    marginTop: 150,
    left: 30
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

  shop: {
    marginLeft: 300,
    marginTop: -40,
    top: 140,
    left: -330,
    },

  header:{
    fontSize: 25,
    color: '#fff',
    marginLeft: 90,
    top: 132,
    left: -45,
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

  button2:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:0,
    width:200,
    left: 200,
    top: 40,
  },

  btnText:{
    color:'red',
    fontWeight:'bold',
    fontSize: 20,
  },

  btnText1:{
    color:'white',
    fontWeight:'bold',
    fontSize: 20,
  },

  textInput:{
    alignSelf:'stretch',
    height:40,
    color: 'white',
    marginBottom: 10,
    borderBottomColor:'white',
    borderBottomWidth:1,
  },

  email:{
    color: 'white',
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    left: 20,
  }
});
export default Shop;