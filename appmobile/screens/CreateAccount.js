import * as React from 'react';
import { Alert, StyleSheet, View, Picker, Text, CheckBox, Image, TouchableOpacity, ScrollView, AsyncStorage, Button } from 'react-native';
import { Input, Header } from 'react-native-elements';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import {useTheme, Avatar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/EvilIcons';
//import ImagePicker from 'react-native-image-crop-picker';


class CreateAccount extends React.Component {
  constructor(){
      super();
      this.state={
        name:"Registar",
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
        avatarSource: null,
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
    console.log("Mounting the screen CreateAccount...");
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
  /*selectImage=async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }*/
  render()
  { 
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
      <View style={style.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.panelTitle}>Upload Photo</Text>
        <Text style={style.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={style.panelButton}>
        <Text style={style.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.panelButton}>
        <Text style={style.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={style.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
      <View style={style.header}>
      <View style={style.panelHeader}>
        <View style={style.panelHandle} />
        
      </View>
    </View>
    </View>
      <TouchableOpacity
          style={{left: 90, marginTop: 20}}
          onPress={() => { navigation.navigate('Account'); }}>
          <Avatar.Image
          source={{ uri:'https://www.hiper.fm/wp-content/uploads/2019/12/isabela-valadeiro.jpg',}}
          size={200}
        />
      </TouchableOpacity>
          {/*<Text style={style.text}>Foto:</Text>
          {
            this.state.avatarSource && <Image style= {style.picker} />
          }
          <Button  title="selecionar imagem" onPress={this.selectImage}/>*/}
          
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
    if(this.state.isValidName!=true && this.state.isValidPassword!=true && this.state.isValidStreet!=true && this.state.isValidTin!=true && this.state.isValidPhoto!=true && this.state.isValidContact!=true && this.state.isValidType!=true && this.state.isValidPostalCode!=true && this.state.isValidSex!=true && this.state.isValidLocation!=true && this.state.isValidBirthday!=true && this.state.isValidEmail!=true && this.state.isNullEmail!=true && this.state.isContact!=true && this.state.isPostalCode!=true && this.state.isLocation!=true && this.state.isTin!=true && this.state.isVisible!=false && this.state.isValidConfirmPassword!=true && this.state.isConfirmPassword!=true)
    {
      Alert.alert('Atenção!', 'Algum(s) do(s) dado(s) fornecido(s) está incorreto(s).', [
        {text: 'Voltar a tentar'}
    ]);
    return;
    }
    if(this.state.check== false)  
    {
      Alert.alert('Atenção!', 'Obrigatório o preenchimento dos Termos e Condições Gerais.', [
        {text: 'Voltar a tentar'}
    ]);
    return;
    }
  try
    {
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
      this.props.navigation.navigate("Login");
  } catch(e){
      console.log(e);
    }      
}
}
const style = StyleSheet.create({
    checkBox: {
      alignSelf: "center",
      top: 265,
      left: 20
    },

    errorMsg: {
      color: '#FF0000',
      fontSize: 12,
      top:-25,
      left: 15,
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
      width: '80%',
      height: 200,
      resizeMode: 'contain'
    }*/
});
export default CreateAccount;
