import * as React from 'react';
import { Alert, StyleSheet, View, Text, CheckBox, Image, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Input } from 'react-native-elements';
import BarraEstados from "./shared/BarraEstados.js";
//import ImagePicker from 'react-native-image-crop-picker';
//import ImagePicker from 'react-native-image-picker';

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
        tipo:'',
        check: false
        //avatarSource: null
      };
    }
  async componentDidMount(){ 
    console.log("Mounting the screen EditAccount...");

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
  render()
  { 
    return (
      <View style={style.container}>
      <BarraEstados />
      <ScrollView style={style.regform}>
      <View style={style.regform}>

          <Text style={style.header}>Registar</Text>

          <Text style={style.text}>Nome Completo:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Nome Completo"
          leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }} value = {this.nome} />

          <Text style={style.text}>Email:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }} value = {this.email} />
          
          <Text style={style.text}>Telefone:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Telefone"
          leftIcon={{ type: 'font-awesome', name: 'phone', color:'white' }} value = {this.telefone} />

          <Text style={style.text}>Rua:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Rua"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.rua} />

          <Text style={style.text}>Código Postal:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Código Postal"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.codigo_postal} />

          <Text style={style.text}>Localização:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Localização"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.localizacao} />

          <Text style={style.text}>Nif:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Nif"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.nif} />

          {/*<Text style={style.text}>Foto:</Text>
          {
            this.state.avatarSource && <Image style= {style.picker} />
          }

          <Button  title="selecionar imagem" onPress={this.selectImage}/> */}

          <Text style={style.text}>Sexo:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Sexo"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.sexo} />

          <Text style={style.text}>Password:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Password"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.password} />

          <Text style={style.text}>Confirmar Password:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Confirmar Password"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.password} />

          <Text style={style.text}>Data Nascimento:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Data Nascimento"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.data_nascimento} />

          <View style={style.checkboxContainer}>
            <CheckBox
              value={this.state.check}
              onChange={()=>this.checkedbox()}
              style={style.checkbox}
            />
          </View>  

          <View style={style.caixatexto}>
              <Text style={style.titulo}>Termos e Condições Gerais </Text>
              <Text style={style.titulo1}>O Sabor da Avó compromete-se a tratar os dados pessoais de forma confidencial e responsável, assegurando o seu tratamento em estrito cumprimento. Ao assinalar a opção abaixo, declaro que tomei conhecimento e que concordo com os Termos e Condições Gerais da loja online e com a Política de Privacidade e Proteção de Dados adotada pelo Sabor da Avó.</Text>
              <Text style={style.titulo2}>Declaro que fui informado/a sobre os Termos e Condições Gerais da App Sabor da Avó e que aceito a criação da conta de cliente nos termos acima expostos. * </Text>
          </View>

          <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("Login") }>
              <Text style={style.btntext}>Criar Conta</Text>
          </TouchableOpacity>

          <View style={style.caixatexto}>
              <Text style={style.titulo3}>* Campos Obrigatórios</Text>   
          </View>
          
          <View style={style.caixatexto}>
              <Text style={style.titulo1}>         Se tiver alguma dúvida, não hesite em contactar-nos. Estamos sempre à sua disposição.</Text>   
          </View>

      </View>
      </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
    checkbox: {
      alignSelf: "center",
      top: 265,
      left: 20
    },

    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },

    container: {
    flex: 1,
    backgroundColor: "#556b2f",
   },

    inputcolor:{
        color: "white",
     },

    menu: {                           
        width: "100%",
        height:"100%"
    },

    regform:{
      width: "100%",
        height:"100%"

    },

    titulo:{
      color: "#fff",
      fontSize: 15,
      fontWeight: 'bold',
      fontStyle: "normal",
      marginLeft: 30,
      left: -10,
      marginTop: 20,
      padding:10,
    },

    titulo2:{
      color: "#fff",
      fontSize: 15,
      fontStyle: "normal",
      marginLeft: 30,
      left: 10,
      marginTop: -10,
      padding:10,
    },
    
    titulo1:{
      color: "#fff",
      fontSize: 15,
      fontStyle: "normal",
      marginLeft: 30,
      left: -10,
      marginTop: -10,
      padding:10,
    },

    titulo3:{
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
        marginLeft: 150,
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

    btntext:{
        color:'red',
        fontWeight:'bold',
        fontSize: 20,
    },
    
    textinput:{
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

   imagemFundo: {
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
