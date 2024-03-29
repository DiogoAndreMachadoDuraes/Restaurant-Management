import * as React from 'react';
import {
    Alert,
    StyleSheet, 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    StatusBar, 
    KeyboardAvoidingView, 
    Keyboard, 
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
/* import {translate, setI18nConfig} from "../src/locales/index"; */

class ForgetPassword extends React.Component {
    constructor(props){
        super(props);
        this.state={
            secureTextEntry: true,
            iconName: "eye-slash",
            email: '',
            password: '',
            isLoading: true,
            validEmail: true,
            validPass: true
        }
        /* setI18nConfig(); */
    }

    onIconPress = () => {
        let iconName=(this.state.secureTextEntry) ? "eye" : "eye-slash";
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            iconName : iconName
        });
    }
    
    componentDidMount(){ 
        console.log("Mounting the screen ForgetPassword...");
        /* RNLocalize.addEventListener("change", this.handleLocalizationChange); */
    }

    /* componentWillUnmount() {
        RNLocalize.removeEventListener("change", this.handleLocalizationChange);
    } */

    handleLocalizationChange = () => {
        setI18nConfig();
        this.forceUpdate();
    };

    handleValidEmail = (val) => {
        if(val.trim().length >= 5){
            this.setState({
                validEmail: true,
                email: val
            });
        } else {
            this.setState({
                validEmail: false,
                email: val
            });
        }
    }

    handleValidPass = (val) => {
        if(val.trim().length >= 6){
            this.setState({
                validPass: true,
                password: val
            });
        } else {
            this.setState({
                validPass: false,
                password: val
            });
        }
    }

    render()
    {
        const { validPass, validEmail } = this.state;
        return (
            <View style={style.container}>
                <StatusBar hidden={true}></StatusBar>
                <View style={style.upside}>
                    <Image source={require("../assets/logo.png")}></Image>
                </View>
                <View style={style.bottom}>
                    <KeyboardAvoidingView behavior="padding">
                        <Text style={style.text}>Email:</Text>
                        <Input 
                            inputStyle={style.email}
                            placeholder='Introduza o seu email'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='white'
                                />
                            }
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onChangeText={(val) => this.handleValidEmail(val)}
                            values={this.state.email}
                            onSubmitEditing={() => this.secondInput.focus()}
                            onEndEditing={(e)=>this.handleValidEmail(e.nativeEvent.text)}
                        />
                        { 
                            validEmail ? true : 

                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={style.invalidEmail}>O email deve conter pelo menos 5 caráteres.</Text>
                            </Animatable.View>
                        }

                        <Text style={style.text}>{/* {translate("Password")} */}Password:</Text>
                        <Input {...this.props}
                            inputStyle={style.pass}
                            placeholder='Introduza a sua palavra-passe'
                            secureTextEntry={this.state.secureTextEntry}
                            autoCapitalize="none"
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={24}
                                    color='white'
                                />
                            }
                            rightIcon={
                                <Icon
                                    name={this.state.iconName}
                                    size={24}
                                    color='white'
                                    onPress={this.onIconPress}
                                />
                            }
                            onSubmitEditing={() => Keyboard.dismiss}
                            autoCapitalize="none"
                            onChangeText={(val) => this.handleValidPass(val)}
                            values={this.state.password}
                            ref={ref => {this.secondInput = ref;}}
                            onEndEditing={(e)=>this.handleValidPass(e.nativeEvent.text)}
                        />

                        { 
                            validPass ? true : 

                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={style.invalidPass}>A password deve conter pelo menos 6 caráteres.</Text>
                            </Animatable.View>
                        }
                    </KeyboardAvoidingView>
                    <TouchableOpacity style={style.register} onPress={() => this.props.navigation.navigate("CreateAccount")}>
                        <Text style={style.registerText}>Enviar Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _ForgetPassword = async() => {
        if (this.state.email.trim().length == 0 || this.state.password.trim().length == 0 ) {
            Alert.alert('Introdução de valores nulos', '   O Email ou a palavra-passe não podem ser nulos.', [
                {text: 'Voltar a tentar'}
            ]);
            return;
        }

        if(this.state.validEmail==true && this.state.validPass==true){
            try
            {
                let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/ForgetPassword', { 
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

                let token = await response.text();

                try {
                    await AsyncStorage.setItem("token", token);
                } catch (error) {
                    console.log('Error to AsyncStorage Token: ' + error.message);
                }
                
                try {
                    let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Utilizador', { 
                      headers: {
                        Authorization: 'Bearer ' + token,
                        Accept: 'application/json',
                        'Content-Type': 'application/json; charset=utf-8'
                      }
                    });
                    let json = await response.json();
                    this.setState({
                      isLoading: false,
                      data: json
                    });
                } catch(e){
                    console.log("Error to get data: " + e);
                }
                const { data } = this.state;
               
                const nome=data.filter(a=>a.email==this.state.email).map(a=>a.nome);
                AsyncStorage.setItem("Name", nome[0]);
                const foto=data.filter(a=>a.email==this.state.email).map(a=>a.foto);
                AsyncStorage.setItem("Foto", foto[0]);
                const user=data.filter(a=>a.email==this.state.email).map(a=>a);
                AsyncStorage.setItem("User", JSON.stringify(user));

                this.props.navigation.navigate("Home");

            } catch(e){
                console.log("Error to get User: " + e);
                /* Alert.alert('Erro', '   Não está a ser possível o acesso à sua conta...', [
                    {text: 'Por favor, tente mais tarde'}
                ]); */
                Alert.alert('Valores incorretos', '    O Email e/ou a palavra-passe estão incorreto(s).', [
                    {text: 'Voltar a tentar'}
                ]);
            }
        } else{
            Alert.alert('Valores inválidos', '    Os valores inseridos não são válidos.', [
                {text: 'Voltar a tentar'}
            ]);
        }
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    upside: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom:{
        flex: 1.2,
        backgroundColor: "#556b2f",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        left: 10,
        marginTop: -12,
        fontSize: 16
    },
    email:{
        color: 'white',
    },
    invalidEmail:{
        color: '#FF0000',
        fontSize: 10,
        top: -20,
        left: 10
    },
    pass:{
        color: 'white',
    },
    invalidPass:{
        color: '#FF0000',
        fontSize: 10,
        top: -20,
        left: 10
    },
    ForgetPassword: {
        width: 100,
        height: 42,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        left: 100,
        top: 25
    },
    ForgetPasswordText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    register:{
        width: 100,
        height: 42,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        left: 225,
        top: -17
    },
    registerText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    forgotPass:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        top: -10,
        left: 15
    }
});

export default ForgetPassword;