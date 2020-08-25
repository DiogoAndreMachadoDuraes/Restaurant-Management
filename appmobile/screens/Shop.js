import * as React from 'react';
import { Alert, StyleSheet, View, Text, Image, ImageBackground, ScrollView, Button, TouchableOpacity } from 'react-native';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import {Icon} from "react-native-elements";

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
          name:"Carrinho de compras",
          buyMenu: [],
          buyProduct: [],
          menu: [],
          product: []
        };
      }
     async componentDidMount(){ 
        console.log("Mounting the screen Shop...");
        let token = await AsyncStorage.getItem("token");
        await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Menu', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.setState({ menu: json, isLoading:false });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

        await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Produto', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.setState({ product: json, isLoading:false });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

        await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Compra_menu', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            this.setState({ buyMenu: json, isLoading:false });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
        
          await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Compra_produto', {  headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
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
     
    render()
    {
      const { navigation, route } = this.props;
      const { name, foto, description } = route.params;
      const {
        menu, product, buyMenu , buyProduct 
      } = this.state;
      const dataMenu=menu.map (a=>a.id_menu);
      const dataProduct=product.map (a=>a.id_produto);
      const dataBuyMenu=buyMenu.filter (a=>a.id_menu==dataMenu);
      const dataBuyProduct=buyProduct.filter (a=>a.nome==name).map (a=>a.id_produto);
      console.log (dataBuyMenu);
      console.log (dataBuyProduct);
      return (
          <View style={style.container}>
            <OwnStatusBar />
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>

              <ScrollView>
              <View>
              <ImageBackground source={require("../assets/imageBackground.jpg")}  style={style.imageBackgound} opacity={1}>
                  
                  <View style={style.shop}>
                      <Icon name="local-grocery-store" color={'red'} size={28}/>
                  </View>

                  <View style={style.button2}>
                      <Button title="Esvaziar Carrinho" color="red" onPress={this.threeOptionAlertHandler}/>
                  </View>

                  {
                      buyMenu.map((item)=>{
                        return (
                          <View style={style.menuExp}>
                          <Text style={style.title}>{menu.nome}</Text>
                          <Text style={style.title1}>{menu.preco}</Text>
                            <Image style={style.menuExpFoto} source={item.imagem} ></Image>
                            <Text style={style.titleMenu}>{item.name}</Text>
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
                      buyProduct.map((item)=>{
                        return (
                          <View style={style.menuExp}>
                          <Text style={style.title}>{product.nome}</Text>
                          <Text style={style.title1}>{product.preco}</Text>
                            <Image style={style.menuExpFoto} source={item.imagem} ></Image>
                            <Text style={style.titleMenu}>{item.name}</Text>
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
      top:-119,
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
        top: -22,
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
        top: -140,
        left: 120
    },
      
    plus:{
        top:-100,
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
        width: 100,
        height: 80,
        marginTop: 20,
        top: 20,
        left: -130
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
        top: 300,
    },

    button1:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        marginTop: 140,
        width:100,
        left: 230,
        top: 114,
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