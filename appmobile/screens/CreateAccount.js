import * as React from 'react';
import { Alert, StyleSheet, View, Text, CheckBox, Image, TouchableOpacity, ScrollView, AsyncStorage, ImageBackground } from 'react-native';
import { Input } from 'react-native-elements';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import {useTheme, Avatar} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class CreateAccount extends React.Component {
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
  componentDidMount(){ 
    console.log("Mounting the screen CreateAccount...");
  }
  checkedbox(){
    this.setState({
      check:!this.state.check
    })
  }
  bs = React.createRef();
  fall = new Animated.Value(1);
  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }
  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }
  renderInner = () => (
    <View style={style.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.panelTitle}>Upload Photo</Text>
        <Text style={style.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={style.panelButton} onPress={this.takePhotoFromCamera}>
        <Text style={style.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.panelButton} onPress={this.choosePhotoFromLibrary()}>
        <Text style={style.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={style.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  renderHeader = () => (
    <View style={style.header}>
      <View style={style.panelHeader}>
        <View style={style.panelHandle} />
      </View>
    </View>
  );
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
      <OwnStatusBar />
      <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
      }}></Animated.View>
      <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
        <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
      <ScrollView style={style.form}>
      <View style={style.form}>
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
          <View style={style.checkBoxContainer}>
            <CheckBox
              value={this.state.check}
              onChange={()=>this.checkedox()}
              style={style.checkBox}
            />
          </View>  
          <View style={style.caixatexto}>
              <Text style={style.title}>Termos e Condições Gerais </Text>
              <Text style={style.title1}>O Sabor da Avó compromete-se a tratar os dados pessoais de forma confidencial e responsável, assegurando o seu tratamento em estrito cumprimento. Ao assinalar a opção abaixo, declaro que tomei conhecimento e que concordo com os Termos e Condições Gerais da loja online e com a Política de Privacidade e Proteção de Dados adotada pelo Sabor da Avó.</Text>
              <Text style={style.title2}>Declaro que fui informado/a sobre os Termos e Condições Gerais da App Sabor da Avó e que aceito a criação da conta de cliente nos termos acima expostos. * </Text>
          </View>
          <TouchableOpacity style={style.button} onPress={this._onPress}>
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
      this.props.navigation.navigate("Login");
  } catch(e){
      console.log(e);
    }      
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
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
    },
    /*picker:{
      with: '80%',
      height: 200,
      resizeMode: 'contain'
    }*/
  });
  export default CreateAccount;