import * as React from 'react';
import { Alert, StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar, KeyboardAvoidingView } from 'react-native';
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
                    <Image source={require("../assets/logo.jpg")}></Image>
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
                                color='yellow'
                            />
                        }
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
                                color='yellow'
                            />
                        }
                        rightIcon={
                            <Icon
                                name={this.state.iconName}
                                size={24}
                                color='yellow'
                                onPress={this.onIconPress}
                            />
                        }
                    />
                    <TouchableOpacity /*onPress={() => this.props.navigation.navigate("Home")}*/>
                        <Text style={style.esqueceuPass}>Esqueceu-se da palavra-passe?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.login} /*onPress={() => this.props.navigation.navigate("Home")}*/>
                        <Text style={style.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.registar} /*onPress={() => this.props.navigation.navigate("Register")}*/>
                        <Text style={style.registarText}>Registar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
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
        backgroundColor: '#27742d',
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
        color: 'rgb(218,41,28)'
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
        color: 'rgb(218,41,28)'
    },
    esqueceuPass:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'yellow',
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