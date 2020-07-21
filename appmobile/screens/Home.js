import * as React from 'react';
import { Alert, StyleSheet, View, Text, Image, Image1, TextInput, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Header, Icon} from "react-native-elements";
import { NossoHeader } from './shared/NossoHeader';
import BarraEstados from './shared/BarraEstados';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const image = {uri: "https://images.trustinnews.pt/uploads/sites/5/2019/12/MB-Rest-JNCquoi-Asia-07.jpg"};
const image1 = {uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eater.com%2F2015%2F2%2F13%2F8033303%2Fman-sells-valentines-day-reservations-on-craigslist&psig=AOvVaw3bM3uPTqVeBZv2_5D0wDti&ust=1591110238049000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCmwdrx4OkCFQAAAAAdAAAAABAN"}; 

class Home extends React.Component{
    constructor(){
        super();
        this.state={ name:'Sabor da Avó' };
    }
    componentDidMount(){ 
        console.log("Montar ecrã Home...");
    }
    render() {
        return (

            <View style={style.container}>
                <BarraEstados/>
                    
                <NossoHeader nome={this.state.name} navigation={this.props.navigation}/>

                <ImageBackground source={imageBackgound} style={style.imagemdefundo} opacity={1}>

                <View style={style.noticia}>
                    <Text style={style.text}>Sobre nós </Text>
                </View>

                <Image source={require('../assets/espaco.jpg')} style={style.image}/>
                <TouchableOpacity style={style.buttonEspaco} onPress={() => this.props.navigation.navigate("Espaco") }>
                <Text style={style.buttondesign}>Nosso Espaço</Text>
                </TouchableOpacity>
                
                <Image source={require('../assets/ementa.jpg')} style={style.image1} opacity={1}/>
                <TouchableOpacity style={style.buttonEmenta} onPress={() => this.props.navigation.navigate("Menu") }>
                <Text style={style.buttoncardapio}>Menus</Text>
                </TouchableOpacity>

                <Image source={require('../assets/reserva.jpeg')} style={style.image2} opacity={1}/>
                <TouchableOpacity style={style.buttonReserva} onPress={() => this.props.navigation.navigate("Conta") }>
                <Text style={style.buttonreserved}>Reserva</Text>
                </TouchableOpacity>
                
                <View style={style.caixatexto}>
                <Text style={style.titulo}>Horário de Atendimento</Text>
                <Text style={style.subtitulo1}>Segunda a Quinta: 11h - 23h</Text>
                <Text style={style.subtitulo2}>Sexta e Sábado: 12:30h - 21:30h</Text>
                <Text style={style.subtitulo3}>Encerra aos Domingos e Feriados.</Text>
                </View>

                <View style={style.contacto}>
                    <Text style={style.telefone}>Contacto</Text>
                    <Text style={style.telefone1}>E-mail: sabordaavo@gmail.com</Text>
                    <Text style={style.telefone2}>Telefone:253341134</Text>
                </View>

                <View style={style.facebook}>
                        <FontAwesome5 name={'facebook'} size={50} color="#0000cd"/>
                </View>
                
                <View style={style.instagram}>
                         <FontAwesome5 name={'instagram'} size={50} color="deeppink" />
                 </View>

                 <Image source={require('../assets/mapa.jpg')} style={style.imagemapa} opacity={1}/>

                </ImageBackground>
            </View>
        );
        }   
}

const style = StyleSheet.create({
    container: {
      flex: 1
    },

    imagemdefundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageopacity:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    noticia:{
        width: 120,
        height: 30,
        backgroundColor: '#ffa07a',
        opacity: 0.9,
        marginTop: -120,
        top:20,
        marginLeft: 250,
        borderRadius: 20,
    },

    text:{
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginTop: 0,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine:'line-through',
    },

    image: {
        width: 120,
        height: 150,
        marginTop: 120,
        top:-80,
        marginLeft: -270,
    },
    image1: {
        width: 120,
        height: 150,
        marginTop: -275,
        top: 2,
        marginLeft: 0,
    },
    image2: {
        width: 120,
        height: 150,
        marginTop: -220,
        top: 10,
        marginLeft: 270,
    },

    contacto:{
        width: 290,
        height: 70,
        backgroundColor: '#ffa07a',
        opacity: 0.8,
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 20,
    },

    telefone:{
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4b0082',
        marginTop: 0,
        marginLeft: 90,
        fontSize: 20,
        fontWeight: 'bold',
    },

    telefone1:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -20,
        letterSpacing: 1,
    },

    telefone2:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -110,
        letterSpacing: 1,
    },

    imagemapa: {
        width: 290,
        height: 80,
        marginTop: -170,
        top:30,
        marginLeft: 30,
        borderRadius: 20,
    },

    caixatexto:{
        width: 290,
        height: 100,
        backgroundColor: '#ffa07a',
        opacity: 0.8,
        marginTop: 40,
        marginLeft: 30,
        borderRadius: 20,
    },
    titulo:{
        color: "#4b0082",
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: "normal",
        marginLeft: 30,
        marginTop: -10,
        padding:10,
    },

    subtitulo1:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -50,
        letterSpacing: 1,
    },

    subtitulo2:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -20,
        letterSpacing: 1,
    },

    subtitulo3:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -5,
        letterSpacing: 1,
    },

    buttonEspaco: {
        width: 60,
        height: 42,
        backgroundColor: '#556b2f',
        top: -55,
        marginLeft: -270,
        borderRadius: 0,
        borderWidth: 3,
        borderColor: '#dc143c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonEmenta: {                                                 //menu
        width: 60,
        height: 42,
        backgroundColor: '#556b2f',
        marginTop: 20,
        top: 8,
        marginLeft: 0,
        borderRadius: 0,
        borderWidth: 3,
        borderColor: '#dc143c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonReserva: {
        width: 60,
        height: 42,
        backgroundColor: '#556b2f',
        marginTop: 23,
        top: 13,
        marginLeft: 270,
        borderRadius: 0,
        borderWidth: 3,
        borderColor: '#dc143c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    facebook: {
        marginTop: 100,
        marginLeft: -40,
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems:'center',
    },
    
    instagram:{
        marginTop: -50,
        marginLeft: 80,
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center',
    },

    buttondesign:{
        fontSize: 13,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff8dc'
    },

    buttoncardapio:{
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff8dc'
    },

    buttonreserved:{
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff8dc'
    },

  });

  export default Home;