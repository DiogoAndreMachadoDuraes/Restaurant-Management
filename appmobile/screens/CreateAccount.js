import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ImageBackground, CheckBox, Picker } from 'react-native';
import { Input, Header } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from 'react-native-modal-datetime-picker';


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
        check: false,
        checked: false,
        image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
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
    this.getPermissionAsync();
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

  checkedbox(){
    this.setState({
      check:!this.state.check
    })
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
        alert('Sorry, we need camera roll permissions to make this work!');
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
    const { image } = this.state;  
      return (
        <View style={style.container}>
          <Header
                centerComponent={<Text style={{fontSize: 24, fontWeight: 'bold', fontStyle: 'italic', color:"white", marginTop: -20}}> {this.state.name}r</Text>}
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
            </View>
            </Animated.View>     
            <ScrollView style={style.formText}>
           
          <View style={style.formText}>
            <Text style={style.text}>Nome Completo:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Nome Completo"
            leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }} value = {this.nome} />
            { this.state.isValidName ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>O nome completo tem de ter no mínimo 5 caráteres.</Text>
              </Animatable.View>
            }

            <Text style={style.text}>Email:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'white' }} value = {this.email} />
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
            leftIcon={{ type: 'font-awesome', name: 'phone', color:'white' }} value = {this.telefone} />
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
            
            <Text style={style.text}>Rua:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Rua"
            leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.rua} />
              { this.state.isValidStreet ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>A morada tem de ter no mínimo 14 caráteres.</Text>
              </Animatable.View>
              }
            
            <Text style={style.text}>Código Postal:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Código Postal"
            leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.codigo_postal} />
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
            leftIcon={{ type: 'font-awesome', name: 'home', color:'white' }} value = {this.localizacao} />
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
            leftIcon={{ type: 'font-awesome', name: 'user', color:'white' }} value = {this.nif} />
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
            
              <Text style={style.text}>Género:</Text>
          <Picker
            style={{ height: 60, width: 140, top: -42, left: 95}}
            selectedValue={this.state.sex}
            placeholder="Género"
            onValueChange={(value, index) => this.setState({ sexo: value })}
            mode='dropdown'
          >
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Indefinido" value="Indefinido" />
          </Picker>
            
            <Text style={style.text}>Password:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'key', color:'white' }} value = {this.password} />
              { this.state.isValidPassword ? true : 
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={style.errorMsg}>A password tem de conter no mínimo 8 caráteres.</Text>
              </Animatable.View>
              }  
            
            <Text style={style.text}>Confirmar Password:</Text>
            <Input inputStyle={style.inputcolor}
            placeholder="Confirmar Password"
            leftIcon={{ type: 'font-awesome', name: 'key', color:'white' }} value = {this.password} />
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
                  placeholder="Data de nascimento"
          />
          <TouchableOpacity style={style.getHour} onPress={this.showPicked}>
            <Icon name="calendar" size={35} color={'white'} style={{left:20}}> </Icon>
          </TouchableOpacity>
            
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
  if(this.state.tin.trim().length==0||this.state.userName.trim().length==0||this.state.choosenDate.trim().length==0||this.state.sex.trim().length==0||this.state.contact.trim().length==0||this.state.street.trim().length==0||this.state.postalCode.trim().length==0||this.state.location.trim().length==0||this.state.email.trim().length==0||this.state.password.trim().length==0||this.state.confirmPassword.trim().length==0)
  {
    Alert.alert('Atenção!', ' Preenchimento de todos os dados obrigatório.', [
    {text: 'Voltar a tentar'}
  ]);
  return;
  }
  if(this.state.isValidName!=true && isValidPassword!=true && isValidStreet!=true && isValidTin!=true && isValidPhoto!=true && isValidContact!=true && isValidType!=true && isValidPostalCode!=true && isValidSex!=true && isValidLocation!=true && isValidBirthday!=true && isValidEmail!=true && isNullEmail!=true && isContact!=true && isPostalCode!=true && isLocation!=true && isTin!=true && isVisible!=false && isValidConfirmPassword!=true && isConfirmPassword!=true)
  {
    Alert.alert('Atenção!', 'Algum(s) do(s) dado(s) fornecido(s) está incorreto(s).', [
    {text: 'Voltar a tentar'}
  ]);
  return;
  }
  else{
  try
    {
      await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Utilizador', {  
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
    backgroundColor: '#ff8c00',
    marginBottom: 6,
    left: -75,
    top: 60,
  },

  panelTitle: {
    fontSize: 30,
    height: 35,
    color: '#556b2f',
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
    backgroundColor: 'tomato',
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

  form: {                           
    width: "100%",
    height:"100%"
  },

  formText:{
    width: "100%",
    height:"100%",
    marginTop: 20,
  },

  title:{
    color: "#fff",
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: "normal",
    marginLeft: 30,
    left: -10,
    marginTop: 30,
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
export default CreateAccount;