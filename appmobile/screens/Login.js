import * as React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar, KeyboardAvoidingView, Keyboard, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
//import Icon1 from 'native-base';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Feather from 'react-native-vector-icons/Feather';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

//const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            secureTextEntry: true,
            iconName: "eye-slash",
            email: '',
            password: '',
            isLoading: true,
            data: []
        }
    }

    onIconPress = () => {
        let iconName=(this.state.secureTextEntry) ? "eye" : "eye-slash";
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            iconName : iconName
        });
    }

    componentDidMount(){ 
        console.log("Montando o ecrã Login...");
    }

    render()
    {
        return (
            <View style={style.container}>
                <StatusBar hidden={true}></StatusBar>
                <View style={style.parteCima}>
                    <Image source={require("../assets/logo.png")}></Image>
                </View>
                <KeyboardAvoidingView behavior="padding" style={style.parteBaixo}>
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
                        onChangeText={(email)=>this.setState({email})}
                        values={this.state.email}
                    />
                    <Text style={style.text}>Password:</Text>
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
                        onSubmitEditing={Keyboard.dismiss}
                        autoCapitalize="none"
                        onChangeText={(password)=>this.setState({password})}
                        values={this.state.password}
                    />
                    <TouchableOpacity /*onPress={() => this.props.navigation.navigate("Home")}*/>
                        <Text style={style.esqueceuPass}>Esqueceu-se da palavra-passe?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.login} 
                        onPress={this._login}
                    >
                        <Text style={style.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.registar} onPress={() => this.props.navigation.navigate("Registar")}>
                        <Text style={style.registarText}>Registar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }

    _login = async() => {
        /* try
        {
            let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Utilizador', { 
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let data = await response.json();
            return data;
        } catch(e){
            console.log(e);
        } */
        
        await fetch(
            'http://192.168.1.117/Ementas-de-Restauracao/index.php/Utilizador', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .then((json) => {
        this.setState({ data: json, isLoading:false });
        })
        .catch((error) => console.error(error))
        .finally(() => {
        this.setState({ isLoading: false });
        });

        const { data, isLoading } = this.state;
        
        const email=data.filter(a=>a.email==this.state.email).map(a=>a.email);
        const password=data.filter(a=>a.password==this.state.password).map(a=>a.password);
       
        const nome=data.filter(a=>a.email==this.state.email).map(a=>a.nome);
        AsyncStorage.setItem("Nome", nome[0]);
        const foto=data.filter(a=>a.email==this.state.email).map(a=>a.foto);
        AsyncStorage.setItem("Foto", foto[0]);
    
         
        console.log(nome[0]);
        console.log(foto[0]); 
        

        console.log(email);
        console.log(password);

        if(email[0]===this.state.email && password[0] === this.state.password){
            try
            {
                await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Login', { 
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
                //await
                this.props.navigation.navigate("Home");
            } catch(e){
                console.log(e);
            }
        }else{
            alert('Username or password incorrect.');
        }
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    parteCima: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    parteBaixo:{
        flex: 1.5,
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
    },
    email:{
        color: 'white',
    },
    pass:{
        color: 'white',
    },
    login: {
        width: 100,
        height: 42,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        left: 100,
        top: 25
    },
    loginText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    registar:{
        width: 100,
        height: 42,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        left: 225,
        top: -17
    },
    registarText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    esqueceuPass:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        top: -10,
        left: 15
    }

   /*imagemFundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: -40
    },
    email: {
      marginTop: 80,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 5,
    },
    user: {
      marginTop: -80,
      padding: 10,
      width: 40,
      backgroundColor: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 5,
    },
    password: {
      marginTop: 12,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 5
    },
    passIcon: {
        marginTop: -37,
        marginRight: -250,
    },
    login: {
        width: 100,
        height: 42,
        marginRight: 30,
        backgroundColor: 'white',
        marginTop: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    registar:{
        marginLeft: 200,
        width: 100,
        height: 42,
        marginTop: -42,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registarText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }*/
  });

  export default Login;