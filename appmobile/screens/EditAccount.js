import * as React from 'react';
import {StyleSheet, View, Text, ImageBackground, ScrollView, AsyncStorage, Picker, TouchableOpacity, Alert} from 'react-native';
import { Input, Header } from 'react-native-elements';
import Animated from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import BottomSheet from 'reanimated-bottom-sheet';
import Constants from 'expo-constants';

class EditAccount extends React.Component {
  constructor(){
      super();
      this.state={
        pageName:"Editar conta",
        name: '',
        email: '',
        contact:'',
        street:'',
        postalCode:'',
        location:'',
        tin:'',
        sex:'',
        chosenDate:'',
        confirmPassword: '',
        password:'',
        image: 'https://i.pinimg.com/564x/f2/d2/35/f2d23548bcb9a62469d78b5411b67c55.jpg',
        email: [],
        password:[],
        confirmPassword:[],
        isValidName: true,
        isValidPassword: true,
        isValidStreet: true,
        isValidTin: true,                 //numero contribuinte (nif)
        isValidPhoto: true,
        isValidContact: true,
        isValidType: true,
        isValidPostalCode: true,
        isValidSex: true,
        isValidLocation: true,
        isValidBirthday: true,
        isValidEmail: true,
        isEmail: false,
        isContact: true,
        isPostalCode: true,
        isLocation: true,
        isTin: true,
        choosenDate: '',
        isVisible: false,
        isValidConfirmPassword: true,
        isConfirmPassword: true
      };
  }

  async componentDidMount(){ 
    console.log("Mounting the screen EditAccount...");
    this.getPermissionAsync();
    try {
      const value = await AsyncStorage.getItem("User");
      if (value !== null) {
        this.setState({ user: JSON.parse(value) });
      }
    } catch (e) {
        console.log("Error rending user: " + e);
    }
  }
   
  validName = (val) => {
    if(val.trim().length<3){
        if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]$/.test(val)) {
          this.setState({
                isValidName: true,
                isName: true,
                name:val
            });
        } else {
          this.setState({
                isValidName: false,
                isName: true,
                name:val
            });
        }
    } else {
      this.setState({
            isValidName: false,
            isName:false,
            name:val
        });
    }
  }
  validPassword = (val) => {
    if( val.trim().length >= 8 ) {
      this.setState({
            isValidPassword: true,
            password: val,
        });
    } else {
      this.setState({
            isValidPassword: false,
            password: val,
        });
      }
  }
  validConfirmPassword = (val) => {
    if( val.trim().length >= 8 ) {
      if( val==this.state.password ) {
        this.setState({
              isValidConfirmPassword: true,
              isConfirmPassword: true,
              confirmPassword: val
          });
      }else {
        this.setState({
              isValidConfirmPassword: false,
              isConfirmPassword: true,
              confirmPassword: val
          });
      }
    } else {
      this.setState({
            isConfirmPassword: false,
            confirmPassword: val
        });
      }
  }
  validStreet = (val) => {
    if(val.trim().length < 8){
        if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]$/.test(val)){
          this.setState({
                isValidStreet: true,
                isStreet: true,
                street: val
            });
        } else {
          this.setState({
                isValidStreet: false,
                isStreet: true,
                street: val
            });
          }
    } else {
      this.setState({
            isValidStreet: false,
            isStreet: false,
            street: val
        });
      }
  }
  validTin
   = (val) => {
      if(/^[0-9]*$/.test(val)) {
        if( val.trim().length >= 9 ) {
        this.setState({
              isValidTin: true,
              isTin: true,
              tin: val
          });
      }else {
        this.setState({
              isValidTin: false,
              isTin: true,
              tin: val
          });
      }
    } else {
      this.setState({
            isTin: false,
            tin: val
        });
      }
  }
  validPostalCode = (val) => {
    if( val.trim().length >= 8 ) {
      if(/^[0-9-]*$/.test(val)) {
        this.setState({
              isValidPostalCode: true,
              isPostalCode: true,
              postalCode: val
          });
      }else {
        this.setState({
              isValidPostalCode: false,
              isPostalCode: true,
              postalCode: val
          });
      }
    } else {
      this.setState({
            isValidPostalCode: false,
            isPostalCode: false,
            postalCode: val
        });
      }
  }

  validEmail = (val) => {
    if( val.trim().length > 6 ){
      if(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) {
        this.setState({
              isValidEmail: true,
              isEmail: true,
              email: val
          });
      }else {
        this.setState({
              isValidEmail: false,
              isEmail: true,
              email: val
          });
      }
    }else {
      this.setState({
              isValidEmail: false,
              isEmail: false,
              email: val
        });
      }
  }

  validContact = (val) => {
    if( val.trim().length > 8 || val.trim().length < 14 ) {
      if(/^[0-9+]*$/.test(val)) {
        this.setState({
              isValidContact: true,
              isContact: true,
              contact: val
          });
      }else {
        this.setState({
              isValidContact: false,
              isContact: true,
              contact: val
          });
      }
    } else {
      this.setState({
            isValidContact: false,
            isContact: false,
            contact: val
        });
      }
  }

  validLocation = (val) => {                         
    if( val.trim().length >= 4 ) {
      if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]*$/.test(val)) {
        this.setState({
              isValidLocation: true,
              isLocation: true,
              location: val
          });
      }else {
        this.setState({
              isValidLocation: false,
              isLocation: true,
              location: val
          });
      }
    } else {
      this.setState({
            isValidLocation: false,
            isLocation: false,
            location: val
        });
      }
  }

  handlePicked = (date) => {
    this.setState({ 
      isVisible: false,
      choosenDate: moment(date).format('DD/MM/YYYY')
    })
    this.hidePicker();
  }

  showPicked = () => {
    this.setState({ isVisible: true });
  }

  hidePicker = () => {
    this.setState({ isVisible: false });
  }

  bs = React.createRef();
  fall = new Animated.Value (1);

  getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Desculpe, precisamos das permissões da camera para continuar!');
      }
    }
  }

  _pickImage = async () => {
    this.bs.current.snapTo(1);
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  }

  _openCamera = async () => {
    this.bs.current.snapTo(1);

    try {
      let result = await ImagePicker.launchCameraAsync()({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
      console.log(result);
    } catch (E) {
      console.log(E);
    }
  }
  
  renderInner = () => {
    return (
    <View style={style.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.panelTitle}>Selecionar Foto</Text>
        <Text style={style.panelSubtitle}>Escolha a sua foto de perfil</Text>
      </View>
      <TouchableOpacity style={style.panelButton} onPress={this._pickImage}>
        <Text style={style.panelButtonTitle}>Selecionar uma foto da galeria</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.panelButton} onPress={this._openCamera}>
        <Text style={style.panelButtonTitle}>Tirar foto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={style.panelButtonTitle}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );}

  renderHeader = () => {
    return(
    <View style={style.header}>
      <View style={style.panelHeader}>
        <View style={style.panelHandle} />
      </View>
    </View>
  );}
  

  render()
    { 
      const { image, name, email, isValidName, isEmail, isValidEmail, isContact, contact, isValidContact, street, isValidStreet, postalCode, isPostalCode, isValidPostalCode, location, isLocation, isValidLocation, tin, isValidTin, isTin, sex, password, isValidPassword, isConfirmPassword, isValidConfirmPassword, confirmPassword, chosenDate, isVisible, check } = this.state;  
 
    return (
      <View style={style.container}>
       <Header
                centerComponent={<Text style={{fontSize: 24, fontWeight: 'bold', color:"white", marginTop: -20}}>{this.state.pageName}</Text>}
                containerStyle={{
                    backgroundColor:"#556b2f",
                    justifyContent: 'space-around',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderColor: "white",
                    height: 80,
                }}
            />
          <BottomSheet
            ref={this.bs}
            snapPoints={[430, 0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
          />
          <Animated.View style={{margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
          }}>
          <View style={{alignItems: 'center'}}>
      
        <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
        <View
                style={{
                  height: 200,
                  width: 200,
                  
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={{
                    uri: image,
                  }}
                  style={{height: 200, width: 200}}
                  imageStyle={{borderRadius: 100}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="camera"
                      size={55}
                      color="white"
                      style={{
                        opacity: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 2,
                        borderColor: 'red',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            </View>
            </Animated.View>     

      <ScrollView style={style.formText}>
          <View style={style.formText}>
            <Text style={style.text}>Nome Completo:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Nome Completo"
            leftIcon={{ type: 'font-awesome', name: 'user', color: 'black' }} 
            onChangeText={(val)=>this.validName(val)} 
            values = {name} 
            onEndEditing={(e)=>this.validName(e.nativeEvent.text)} />
              { isValidName ? true : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={style.errorMsg}>O nome completo tem de ter no mínimo 3 caráteres!</Text>
                </Animatable.View>
              }
            <Text style={style.text}>Email:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'black' }} 
            onChangeText={(val)=>this.validEmail(val)} 
            values = {email} 
            onEndEditing={(e)=>this.validEmail(e.nativeEvent.text)} />
              { isEmail ? 
              true:   
              <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={style.errorMsg}>O email tem de ter mais de 6 carateres!</Text>
              </Animatable.View>
              }
              { isValidEmail ? true : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={style.errorMsg}>O email não está correto!</Text>
                </Animatable.View>
              }
            <Text style={style.text}>Telefone:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Telefone"
            leftIcon={{ type: 'font-awesome', name: 'phone', color:'black' }} 
            onChangeText={(val)=>this.validContact(val)} 
            values = {contact} 
            onEndEditing={(e)=>this.validContact(e.nativeEvent.text)}
            />
              { isContact ? true :
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>O contacto tem de ter no mínimo 9 números!</Text>
              </Animatable.View>
              }
              { isValidContact ? true : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={style.errorMsg}>O contacto não pode conter letras e caráteres especiais!</Text>
                </Animatable.View>
              }
            <Text style={style.text}>Rua:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Rua"
            leftIcon={{ type: 'font-awesome', name: 'home', color:'black' }}
            onChangeText={(val)=>this.validStreet(val)} 
            values = {street} 
            onEndEditing={(e)=>this.validStreet(e.nativeEvent.text)}
            />
              { isValidStreet ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>A morada tem de ter no mínimo 14 caráteres!</Text>
              </Animatable.View>
              }
            <Text style={style.text}>Código Postal:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Código Postal"
            leftIcon={{ type: 'font-awesome', name: 'home', color:'black' }}
            onChangeText={(val)=>this.validPostalCode(val)} 
            values = {postalCode} 
            onEndEditing={(e)=>this.validPostalCode(e.nativeEvent.text)}
            />
              { isPostalCode ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>O código postal tem de ter no mínimo 8 caráteres!</Text>
              </Animatable.View>
              }
              { isValidPostalCode ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>O código postal não pode conter letras e caráteres especiais!</Text>
              </Animatable.View>
              }
            <Text style={style.text}>Localização:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Localização"
            leftIcon={{ type: 'font-awesome', name: 'home', color:'black' }}
            onChangeText={(val)=>this.validLocation(val)} 
            values = {location} 
            onEndEditing={(e)=>this.validLocation(e.nativeEvent.text)}
            />
              { isLocation ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>A localização tem de ter no mínimo 4 caráteres!</Text>
              </Animatable.View>
              }
              { isValidLocation ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>A localização não pode conter números e caráteres especiais!</Text>
              </Animatable.View>
              }
            <Text style={style.text}>Nif:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Nif"
            leftIcon={{ type: 'font-awesome', name: 'user', color:'black' }} 
            onChangeText={(val)=>this.validTin(val)} 
            values = {tin} 
            onEndEditing={(e)=>this.validTin(e.nativeEvent.text)} 
            />
              { isValidTin ? true :
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>O número de contribuinte tem de ter no mínimo 9 números!</Text>
              </Animatable.View>
              }
              { isTin ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>O número de contribuinte não pode conter letras e caráteres especiais!</Text>
              </Animatable.View>
              }
              <Text style={style.text}>Género:</Text>
              <Picker
                style={{ height: 60, width: 140, top: -42, left: 95}}
                selectedValue={sex}
                placeholder="Género"
                onValueChange={(value, index) => this.getSex(value)}
                mode='dropdown'
              >
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Indefinido" value="Indefinido" />
              </Picker>
            <Text style={style.text}>Password:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'key', color:'black' }}
            onChangeText={(val)=>this.validPassword(val)} 
            secureTextEntry={true}
            values = {password} 
            onEndEditing={(e)=>this.validPassword(e.nativeEvent.text)}
            />
              { isValidPassword ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>A password tem de conter no mínimo 8 caráteres!</Text>
              </Animatable.View>
              }  
            <Text style={style.text}>Confirmar Password:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Confirmar Password"
            leftIcon={{ type: 'font-awesome', name: 'key', color:'black' }}
            onChangeText={(val)=>this.validConfirmPassword(val)} 
            secureTextEntry={true}
            values = {confirmPassword} 
            onEndEditing={(e)=>this.validConfirmPassword(e.nativeEvent.text)}
            />
              { isConfirmPassword ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>A password tem de conter no mínimo 8 caráteres!</Text>
              </Animatable.View>
              }  
              { isValidConfirmPassword ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>As passwords não correspondem!</Text>
              </Animatable.View>
              }  
              <Text style={style.text}>Data Nascimento: {chosenDate}</Text>
          <DateTimePicker
                  isVisible={isVisible}
                  mode={'date'}
                  onConfirm={this.handlePicked}
                  onCancel={this.hidePicker}
          />
          <TouchableOpacity style={style.getHour} onPress={this.showPicked}>
            <Icon name="calendar" size={35} color={'black'} style={{left:20}}> </Icon>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={this._onPress}>
            <Text style={style.btnText}>Guardar as alterações</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
      </View>
    );
  }

_onPress = async() => {
  console.log(this.state.tin);
  console.log(this.state.userName);
  console.log(this.state.choosenDate);
  console.log(this.state.sex);
  console.log(this.state.contact);
  console.log(this.state.street);
  console.log(this.state.postalCode);
  console.log(this.state.location);
  console.log(this.state.email);
  console.log(this.state.password);

  if(this.state.tin.trim().length==0||this.state.userName.trim().length==0||this.state.choosenDate.trim().length==0||this.state.sex.trim().length==0||this.state.contact.trim().length==0||this.state.street.trim().length==0||this.state.postalCode.trim().length==0||this.state.location.trim().length==0||this.state.email.trim().length==0||this.state.password.trim().length==0||this.state.confirmPassword.trim().length==0)
  {
    Alert.alert('Atenção!', ' Preenchimento de todos os dados obrigatório.', [
    {text: 'Voltar a tentar'}
  ]);
  return;
  }
  if(this.state.isValidName==true && isValidPassword==true && isValidStreet==true && isValidTin==true && isValidPhoto==true && isValidContact==true && isValidType==true && isValidPostalCode==true && isValidSex==true && isValidLocation==true && isValidBirthday==true && isValidEmail==true && isNullEmail==true && isContact==true && isPostalCode==true && isLocation==true && isTin==true && isVisible==false && isValidConfirmPassword==true && isConfirmPassword==true)
  {
    Alert.alert('Atenção!', 'Algum(s) do(s) dado(s) fornecido(s) está incorreto(s).', [
    {text: 'Voltar a tentar'}
  ]);
  return;
  }

  try{
      await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Utilizador', {  
      method: 'POST', 
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        nif: this.state.tin,
        nome: this.state.userName,
        data_nascimento: this.state.choosenDate,
        sexo: this.state.sex,
        telefone: this.state.contact,
        rua: this.state.street,
        codigo_postal: this.state.postalCode,
        localizacao: this.state.location,
        foto: this.state.photo,
        email: this.state.email,
        password: this.password,
        tipo:'Cliente'
      })
    });
      this.props.navigation.navigate("Account");
    } catch(e){
      console.log(e);
    }      
}
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },

  panelHeader: {
    alignItems: 'center',
  },

  panelHandle: {
    width: 70,
    height: 8,
    borderRadius: 7,
    backgroundColor: '#000',
    marginBottom: 6,
    left: -75,
    top: 60,
  },

  panelTitle: {
    fontSize: 30,
    height: 35,
    color: 'tomato',
    fontWeight: 'bold',
  },

  panelSubtitle: {
    fontSize: 14,
    color: 'black',
    height: 30,
    marginBottom: 10,
  },

  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    marginVertical: 7,
  },

  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },

  inputcolor:{
    color: "black",
  },

  form:{
    width: "100%",
    height:"100%",
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
    color: "#000",
    fontSize: 15,
    fontStyle: "normal",
    marginLeft: 30,
    left: 10,
    marginTop: -10,
    padding:10,
  },
  
  title1:{
    color: "#000",
    fontSize: 15,
    fontStyle: "normal",
    marginLeft: 30,
    left: -10,
    marginTop: -10,
    padding:10,
  },

  title3:{
    color: "#000",
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
    color: '#000',
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
    backgroundColor:'black',
    marginTop: 50,
    width:230,
    left: 100,
    marginVertical:20,
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
    alignItems: 'center',
  },

  text:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    left: 20,
  },
});

export default EditAccount;
