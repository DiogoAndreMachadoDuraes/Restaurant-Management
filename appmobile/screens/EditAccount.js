import * as React from 'react';
import {StyleSheet, View, Text, Picker, ScrollView, AsyncStorage, ActivityIndicator, TouchableOpacity, CheckBox } from 'react-native';
import { Input, Header } from 'react-native-elements';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import * as Animatable from 'react-native-animatable';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';

class EditAccount extends React.Component {
  constructor(){
      super();
      this.state={
        name:"Editar Conta",
        tin:'',
        userName: '',
        birthday:'',
        sex:'',
        contact:'',
        street:'',
        postalCode:'',
        location:'',
        photo:'',
        email: '',
        password:'',
        confirmPassword:'',
        check: false,              //box check
        checked: false,
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
        isNullEmail: true,
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

  componentDidMount(){ 
    console.log("Mounting the screen EditAccount...");
  }
   
  validName = (val) => {
    if( val.trim().length >= 5 ) {
      this.setState({
            isValidName: true,
            userName:val
        });
    } else {
      this.setState({
            isValidName: false,
            userName:val
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
    if( val.trim().length >= 14 ) {
      this.setState({
            isValidStreet: true,
            street: val
        });
    } else {
      this.setState({
            isValidStreet: false,
            street: val
        });
      }
  }

  validTin = (val) => {
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
            isPostalCode: false,
            postalCode: val
        });
      }
  }

  validEmail = (val) => {
    if( val.trim().length != 0 ){
      if(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) {
        this.setState({
              isValidEmail: true,
              isNullEmail: false,
              email: val
          });
      }else {
        this.setState({
              isValidEmail: false,
              isNullEmail: false,
              email: val
          });
      }
    }else {
      this.setState({
              isNullEmail: true,
              email: val
        });
      }
  }

  validContact = (val) => {
    if( val.trim().length > 8 ) {
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

  checkedBox(){
    this.setState({
      check: true
    })
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
      <Header 
          centerComponent={<Text style={{fontSize: 24, fontWeight: 'bold', fontStyle: 'italic', color: '#fff', marginTop: -20}}>{this.state.name}</Text>} 
          containerStyle={{
          backgroundColor: '#556b2f',
          justifyContent: 'space-around',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderColor: "white",
          height: 80,
          }}
      />

      <ScrollView style={style.form}>
      <View style={style.form}>

          <Text style={style.text}>Nome Completo:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Nome Completo"
          autoCapitalize={"sentences"}
          leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }} onChangeText={(val)=>this.validName(val)} values = {this.state.userName} onEndEditing={(e)=>this.validName(e.nativeEvent.text)} />
          
          { this.state.isValidName ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O nome completo tem de ter no mínimo 5 caráteres.</Text>
            </Animatable.View>
          }

          <Text style={style.text}>Email:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Email"
          keyboardType= "email-address"
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }} onChangeText={(val)=>this.validEmail(val)} values = {this.state.email} onEndEditing={(e)=>this.validEmail(e.nativeEvent.text)} />
          
          { this.state.isNullEmail ? 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O email não pode ser nulo.</Text>
            </Animatable.View>
            : false
          }

          { this.state.isValidEmail ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O email não está correto.</Text>
            </Animatable.View>
          }

          <Text style={style.text}>Telefone:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Telefone"
          keyboardType="phone-pad"
          leftIcon={{ type: 'font-awesome', name: 'phone', color:'white' }} onChangeText={(val)=>this.validContact(val)} values = {this.state.contact} onEndEditing={(e)=>this.validContact(e.nativeEvent.text)} />
          
          { this.state.isContact ? true :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O contacto tem de ter no mínimo 9 números.</Text>
            </Animatable.View>
          }

          { this.state.isValidContact ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O contacto não pode conter letras e caráteres especiais.</Text>
            </Animatable.View>
          }

          <Text style={style.text}>Morada:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Rua e Porta"
          autoCapitalize={"sentences"}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} onChangeText={(val)=>this.validStreet(val)} values = {this.state.street} onEndEditing={(e)=>this.validStreet(e.nativeEvent.text)} />
          
          { this.state.isValidStreet ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>A morada tem de ter no mínimo 14 caráteres.</Text>
            </Animatable.View>
          }
          
          <Text style={style.text}>Código Postal:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Código Postal"
          keyboardType='number-pad'
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} onChangeText={(val)=>this.validPostalCode(val)} values = {this.state.postalCode} onEndEditing={(e)=>this.validPostalCode(e.nativeEvent.text)} />

          { this.state.isPostalCode ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O código postal tem de ter no mínimo 8 caráteres.</Text>
            </Animatable.View>
          }

          { this.state.isValidPostalCode ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O código postal não pode conter letras e caráteres especiais.</Text>
            </Animatable.View>
          }

          <Text style={style.text}>Localização:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Localização"
          autoCapitalize={"sentences"}
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} onChangeText={(val)=>this.validLocation(val)} values = {this.state.location} onEndEditing={(e)=>this.validLocation(e.nativeEvent.text)} />

          { this.state.isLocation ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>A localização tem de ter no mínimo 4 caráteres.</Text>
            </Animatable.View>
          }

          { this.state.isValidLocation ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>A localização não pode conter números e caráteres especiais.</Text>
            </Animatable.View>
          }

          <Text style={style.text}>Nif:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Nif"
          keyboardType="numeric"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} onChangeText={(val)=>this.validTin(val)} values = {this.state.tin} onEndEditing={(e)=>this.validTin(e.nativeEvent.text)} />

          { this.state.isValidTin ? true :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O número de contribuinte tem de ter no mínimo 9 números.</Text>
            </Animatable.View>
          }

          { this.state.isTin ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>O número de contribuinte não pode conter letras e caráteres especiais.</Text>
            </Animatable.View>
          }

          {/*<Text style={style.text}>Foto:</Text>
          {
            this.state.avatarSource && <Image style= {style.picker} />
          }

          <Button  title="selecionar imagem" onPress={this.selectImage}/> */}

          <Text style={style.text}>Sexo:</Text>
          <Picker
            style={{ height: 60, width: 140, top: -42, left: 80}}
            selectedValue={this.state.sex}
            onValueChange={(value, index) => this.setState({ sex: value })}
            mode='dropdown'
          >
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Indefinido" value="Indefinido" />
          </Picker>

          <Text style={style.text}>Password:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Password"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} onChangeText={(val)=>this.validPassword(val)} values = {this.state.password} onEndEditing={(e)=>this.validPassword(e.nativeEvent.text)} />
          
          { this.state.isValidPassword ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>A password tem de conter no mínimo 8 caráteres.</Text>
            </Animatable.View>
          }  
          
          <Text style={style.text}>Confirmar Password:</Text>
          <Input inputStyle={style.inputcolor}
          placeholder="Confirmar Password"
          leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} onChangeText={(val)=>this.validConfirmPassword(val)} values = {this.state.confirmPassword} onEndEditing={(e)=>this.validConfirmPassword(e.nativeEvent.text)} />
         
          { this.state.isConfirmPassword ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>A password tem de conter no mínimo 8 caráteres.</Text>
            </Animatable.View>
          }  
          { this.state.isValidConfirmPassword ? true : 
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={style.errorMsg}>As passwords não correspondem.</Text>
            </Animatable.View>
          }  
          <Text style={style.text}>Data Nascimento: {this.state.choosenDate}</Text>
          <DateTimePicker
                  isVisible={this.state.isVisible}
                  mode={'date'}
                  onConfirm={this.handlePicked}
                  onCancel={this.hidePicker}
          />
          <TouchableOpacity style={style.getHour} onPress={this.showPicked}>
            <Icon name="calendar" size={45}> </Icon>
          </TouchableOpacity>

          <View style={style.checkBoxContainer}>
            <CheckBox
              value={this.state.check}
              onChange={this.checkedBox}
              style={style.checkBox}
            />
          </View>  
      </View>
      </ScrollView>
      </View>
    );
  }
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
  //console.log(this.state.photo);
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
      await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Utilizador', {  
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#556b2f"
  },

  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
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
