import * as React from 'react';
import {StyleSheet, View, Text, CheckBox, TouchableOpacity, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import BarraEstados from "./shared/BarraEstados.js";

class TakeAway extends React.Component {
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
        };
      }
      async componentDidMount(){ 
        console.log("Mounting the screen TakeAway...");

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
        /*function imagePickerCallback(data) {
          if (data.didCancel) {
            return;
          }
      
          if (data.error) {
            return;
          }
      
          if (data.customButton) {
            return;
          }
      
          if (!data.uri) {
            return;
          }
      
          setAvatar(data);
        }
      
        async function uploadImage() {
          const data = new FormData();
      
          data.append('avatar', {
            fileName: avatar.fileName,
            uri: avatar.uri,
            type: avatar.type,
          });
      
          await Axios.post('http://localhost:3333/files', data);*/
      }
      checkedbox(){
        this.setState({
          check:!this.state.check
        })
      }
    render()
    { 
        return (
             /*<View style={style.container}>
                  <Image
                    source={{
                      uri: avatar
                        ? avatar.uri
                        : 'https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png',
                    }}
                    style={style.avatar}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback)
                    }>
                    <Text style={style.buttonText}>Escolher imagem</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={uploadImage}>
                    <Text style={style.buttonText}>Enviar imagem</Text>
                  </TouchableOpacity>
                </View>*/

            <View style={style.container}>
            <BarraEstados />
            <ScrollView style={style.form}>
            <View style={style.form}>

                <Text style={style.header}>Registar</Text>

                <Text style={style.text}>Nome Completo:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Nome Completo"
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }} value = {this.nome} />

                <Text style={style.text}>Email:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }} value = {this.email} />
                
                <Text style={style.text}>Telefone:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Telefone"
                leftIcon={{ type: 'font-awesome', name: 'phone', color:'white' }} value = {this.telefone} />

                <Text style={style.text}>Rua:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Rua"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.rua} />

                <Text style={style.text}>Código Postal:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Código Postal"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.codigo_postal} />

                <Text style={style.text}>Localização:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Localização"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.localizacao} />

                <Text style={style.text}>Nif:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Nif"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.nif} />

                <Text style={style.text}>Foto:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Foto"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.foto} />

                <Text style={style.text}>Sexo:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Sexo"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.sexo} />

                <Text style={style.text}>Password:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Password"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.password} />

                <Text style={style.text}>Confirmar Password:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Confirmar Password"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.password} />

                <Text style={style.text}>Data Nascimento:</Text>
                <Input inputStyle={style.inputColor}
                placeholder="Data Nascimento"
                leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.data_nascimento} />

                <View style={style.checkBoxContainer}>
                  <CheckBox
                    value={this.state.check}
                    onChange={()=>this.checkedbox()}
                    style={style.checkBox}
                  />
                </View>  

                <View style={style.caixatexto}>
                    <Text style={style.title}>Termos e Condições Gerais </Text>
                    <Text style={style.title1}>O Sabor da Avó compromete-se a tratar os dados pessoais de forma confidencial e responsável, assegurando o seu tratamento em estrito cumprimento. Ao assinalar a opção abaixo, declaro que tomei conhecimento e que concordo com os Termos e Condições Gerais da loja online e com a Política de Privacidade e Proteção de Dados adotada pelo Sabor da Avó.</Text>
                    <Text style={style.title2}>Declaro que fui informado/a sobre os Termos e Condições Gerais da App Sabor da Avó e que aceito a criação da conta de cliente nos termos acima expostos. * </Text>
                </View>

                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("Login") }>
                    <Text style={style.btnText}>Criar Conta</Text>
                </TouchableOpacity>

                <View style={style.caixatexto}>
                    <Text style={style.title3}>* Campos Obrigatórios</Text>   
                </View>
                
                <View style={style.caixatexto}>
                    <Text style={style.title1}>         Se tiver alguma dúvida, não hesite em contactar-nos. Estamos sempre à sua disposição.</Text>   
                </View>

            </View>
            </ScrollView>
            </View>
          );
          }
}

const style = StyleSheet.create({
    checkBox: {
      alignSelf: "center",
      top: 265,
      left: 20
    },

    checkBoxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },

    container: {
    flex: 1,
    backgroundColor: "#556b2f",
   },

    inputColor:{
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
    }

  });

  export default TakeAway;