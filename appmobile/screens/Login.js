import * as React from 'react';
import { 
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
        console.log("Mounting the screen Login...");
    }

    render()
    {
        return (
            <View style={style.container}>
                <StatusBar hidden={true}></StatusBar>
                <View style={style.upside}>
                    <Image source={require("../assets/logo.png")}></Image>
                </View>
                <KeyboardAvoidingView behavior="padding" style={style.bottom}>
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
                        onSubmitEditing={() => this.secondInput.focus()}
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
                        onSubmitEditing={() => Keyboard.dismiss}
                        autoCapitalize="none"
                        onChangeText={(password)=>this.setState({password})}
                        values={this.state.password}
                        ref={ref => {this.secondInput = ref;}}
                    />
                    <TouchableOpacity /*onPress={() => this.props.navigation.navigate("Home")}*/>
                        <Text style={style.forgotPass}>Esqueceu-se da palavra-passe?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.login} onPress={this._login}>
                        <Text style={style.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.register} onPress={() => this.props.navigation.navigate("CreateAccount")}>
                        <Text style={style.registerText}>Registar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }

    _login = async() => {
        try {
            let response = await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Utilizador', { 
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
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

        console.log(data);
        
        const email=data.filter(a=>a.email==this.state.email).map(a=>a.email);
        const password=data.filter(a=>a.password==this.state.password).map(a=>a.password);
       
        const nome=data.filter(a=>a.email==this.state.email).map(a=>a.nome);
        AsyncStorage.setItem("Name", nome[0]);
        const foto=data.filter(a=>a.email==this.state.email).map(a=>a.foto);
        AsyncStorage.setItem("Foto", foto[0]);
        const user=data.filter(a=>a.email==this.state.email).map(a=>a);
        AsyncStorage.setItem("User", JSON.stringify(user));

        console.log(user);

        if(email[0]===this.state.email && password[0] === this.state.password){
            try
            {
                await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Login', { 
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
                this.props.navigation.navigate("Home");
            } catch(e){
                console.log(e);
            }
        } else{
            alert('O email e/ou a palavra-passe estão incorretos!');
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

export default Login;