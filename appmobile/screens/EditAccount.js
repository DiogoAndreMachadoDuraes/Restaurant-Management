import * as React from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView, AsyncStorage, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import {useTheme, Avatar} from 'react-native-paper';

class EditAccount extends React.Component {
  constructor(){
      super();
      this.state={
        name:"Registar",
        nif:'',
        nome: '',
        data_nascimento:'',
        sexo:'',
        foto:'',
        email: '',
        telefone:'',
        morada:'',
        password:'',
        tipo:''
        //avatarSource: null
      };
    }
  componentDidMount(){ 
    console.log("Mounting the screen EditAccount...");
  }
  checkedbox(){
    this.setState({
      check:!this.state.check
    })
  }
  /*selectImage=async () => {
    await ImagePicker.showImagePicker({noData:true,mediaType:'photo'}, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
  
        this.setState({
          avatarSource: source,
        });
      }
    });  
  }*/
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

        <ScrollView style={style.form}>
        <View style={style.form}>
            {
                isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={user}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
            <View>

        <Text style={style.text}>Nome Completo:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.nome}
          leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }} value = {this.nome} />

        <Text style={style.text}>Email:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.email}
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }} value = {this.email} />
          
        <Text style={style.text}>Telefone:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.telefone}
          leftIcon={{ type: 'font-awesome', name: 'phone', color:'white' }} value = {this.telefone} />

        <Text style={style.text}>Rua:</Text>
        <Input inputStyle={style.inputcolor}
         placeholder={item.rua}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.rua} />

        <Text style={style.text}>Código Postal:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.codigo_postal}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.codigo_postal} />

        <Text style={style.text}>Localização:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.localizacao}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.localizacao} />

        <Text style={style.text}>Nif:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.nif}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.nif} />

        <Text style={style.text}>Sexo:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.sexo}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.sexo} />

        <Text style={style.text}>Password:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.password}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.password} />

        <Text style={style.text}>Confirmar Password:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.confirmar_password}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.password} />

        <Text style={style.text}>Data Nascimento:</Text>
        <Input inputStyle={style.inputcolor}
          placeholder={item.data_nascimento}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.data_nascimento} />
        </View>  
    
             )}
            />
        )
        }

          {/*<Text style={style.text}>Foto:</Text>
          {
            this.state.avatarSource && <Image style= {style.picker} />
          }

          <Button  title="selecionar imagem" onPress={this.selectImage}/> */}
          
            <TouchableOpacity style={style.button} onPress={this._onPress}>
                    <Text style={style.btnText}>Guardar alterações</Text>
                </TouchableOpacity>

      </View>
      </ScrollView>
      </View>
    );
  }
}

_onPress = async() => {
  try
    {
      await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Utilizador', {  
        method: 'POST', 
        headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({
          nif: this.nif,
          nome: this.nome,
          data_nascimento: this.data_nascimento,
          sexo: this.sexo,
          telefone: this.telefone,
          morada: this.morada,
          foto: this.foto,
          email: this.email,
          password: this.password,
          tipo:'Cliente'
        })
    });
      this.props.navigation.navigate("Account");
  } catch(e){
      console.log(e);
    }      
}

const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#556b2f"
   },

    inputcolor:{
        color: "white",
     },

    menu: {                           
        width: "100%",
        height:"100%"
    },

    form:{
      width: "100%",
        height:"100%"

    },

    title:{
      color: "#fff",
      fontSize: 15,
      fontWeight: 'bold',
      fontStyle: "normal",
      marginLeft: 30,
      left: -10,
      marginTop: 20,
      padding:10,
    },

    title2:{
      color: "#fff",
      fontSize: 15,
      fontStyle: "normal",
      marginLeft: 30,
      left: 10,
      marginTop: -10,
      padding:10,
    },
    
    title1:{
      color: "#fff",
      fontSize: 15,
      fontStyle: "normal",
      marginLeft: 30,
      left: -10,
      marginTop: -10,
      padding:10,
    },

    title3:{
      color: "#fff",
      fontSize: 10,
      fontWeight: 'bold',
      fontStyle: "normal",
      marginLeft: 30,
      left: 100,
      top: -30,
      padding:10,
    },

    header:{
        fontSize: 25,
        color: '#fff',
        marginLeft: 130,
        top: 60,
        paddingBottom:60,
        marginBottom:60,
        borderBottomColor: 'black',
    },

    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        marginTop: 50,
        width:130,
        left: 130,
        marginVertical:20
    },

    btnText:{
        color:'red',
        fontWeight:'bold',
        fontSize: 20,
    },
    
    textInput:{
        alignSelf:'stretch',
        height: 40,
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
    },

    /*picker:{
      with: '80%',
      height: 200,
      resizeMode: 'contain'
    }*/

  });

  export default EditAccount;
