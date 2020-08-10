import * as React from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList, AsyncStorage} from 'react-native';
import { Input } from 'react-native-elements';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };


class Account extends React.Component {
    constructor(){
        super();
        this.state={
          name:"Editar Conta",
          user: [],
          isLoading: true,
        };
      }
    componentDidMount(){ 
        console.log("Mounting the screen Account...");

      }
      getUser = async () => {
        try {
          const value = await AsyncStorage.getItem("User");
          if (value !== null) {
            this.setState({ user: JSON.parse(value) });
            console.log(this.state.user);
          }
        } catch (e) {
            console.log("Error rending user: " + e);
        }
      }
    

    render()
    { 
      const { user, isLoading } = this.state;
      {
        this.getUser();
      }
        return (

            <View style={style.container}>
            <OwnStatusBar />
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>

            <ScrollView>
            <View style={style.form}>
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>
                  <View style={style.CategoriaProduto}>
                    {
                      isLoading ? <ActivityIndicator/> : (
                        <FlatList
                          data={user}
                          keyExtractor={({ id }, index) => id}
                          renderItem={({ item }) => (
                              <View style={style.ContaExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Account", {item})}>
                                <Image style={style.ContaExpFoto} source={{uri:''+item.foto+''}} ></Image>
                              
                                <Text style={style.header}>A minha conta</Text>

                                  <Text style={style.text}>Nome Completo:</Text>
                                  <Text style={style.text}>{item.nome}</Text>
                                  <Input inputStyle={style.inputcolor}
                                  leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }} value = {this.nome} />

                                  <Text style={style.text}>Email:</Text>
                                  <Text style={style.text}>{item.email}</Text>
                                  <Input inputStyle={style.inputcolor}
                                  leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }} value = {this.email} />


                                  <Text style={style.text}>Telefone:</Text>
                                  <Text style={style.text}>{item.telefone}</Text>
                                  <Input inputStyle={style.inputcolor}
                                  leftIcon={{ type: 'font-awesome', name: 'phone', color:'white' }} value = {this.telefone} />
                                  
                                  <Text style={style.text}>Morada:</Text>
                                  <Text style={style.text}>{item.morada}</Text>
                                  <View inputStyle={style.inputcolor}
                                  leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.localizacao} />
          
                              </View>
                          )}
                          />
                      )
                }
                
            </View>
            <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("EditAccount")}>
                    <Text style={style.btnText}>Editar Conta</Text>
                      <Icon style={style.pencil} name="pencil" color={'red'} size={28}/>
                </TouchableOpacity>
            </ImageBackground>  
            </View>
            </ScrollView>
            </View>
          );
          }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    inputcolor:{
      color: "white",
   },

    imageBackgound: {                         //foto por tras do titulo
        width: 420,
        height: 800,
        opacity: 0.9,
      },

    pencil: {
        top: -30,
        left: -60
    },

    inputcolor:{
        color: "white",
      },

    menu: {                           //scrollview
        width: "800%",
        height: 1000,
    },

    form:{
       alignSelf:'stretch',
    },

    header:{
        fontSize: 25,
        color: '#fff',
        marginLeft: 110,
        top: 60,
        paddingBottom:60,
        marginBottom:60,
        borderBottomColor: 'black',
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
        top: 20,
    },

    btnText:{
        color:'red',
        fontWeight:'bold',
        fontSize: 20,
        top: -3,
        left: 10
    },
    
    textInput:{
        alignSelf:'stretch',
        height:40,
        color: 'white',
        marginBottom: 40,
    },

    email:{
        color: 'white',
    },

   image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        left: 40
    }

  });

  export default Account;