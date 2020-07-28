import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { OwnHeader } from './shared/OwnHeader';
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
        console.log("Mounting the screen Home...");
    }
    render() {
        return (

            <View style={style.container}>
                <BarraEstados/>
                    
                <OwnHeader nome={this.state.name} navigation={this.props.navigation}/>

                <ImageBackground source={imageBackgound} style={style.imageBackground} opacity={1}>

                <View style={style.news}>
                    <Text style={style.text}>Sobre nós </Text>
                </View>

                <Image source={require('../assets/espaco.jpg')} style={style.image}/>
                <TouchableOpacity style={style.buttonSpace} onPress={() => this.props.navigation.navigate("Account") }>
                <Text style={style.buttonDesign}>Nosso Espaço</Text>
                </TouchableOpacity>
                
                <Image source={require('../assets/ementa.jpg')} style={style.image1} opacity={1}/>
                <TouchableOpacity style={style.buttonMenu} onPress={() => this.props.navigation.navigate("Menu") }>
                <Text style={style.buttonMenu1}>Menus</Text>
                </TouchableOpacity>

                <Image source={require('../assets/reserva.jpeg')} style={style.image2} opacity={1}/>
                <TouchableOpacity style={style.buttonReservation} onPress={() => this.props.navigation.navigate("Invoice") }>
                <Text style={style.buttonReservation1}>Reserva</Text>
                </TouchableOpacity>
                
                <View style={style.boxText}>
                <Text style={style.title}>Horário de Atendimento</Text>
                <Text style={style.subtitle1}>Segunda a Quinta: 11h - 23h</Text>
                <Text style={style.subtitle2}>Sexta e Sábado: 12:30h - 21:30h</Text>
                <Text style={style.subtitle3}>Encerra aos Domingos e Feriados.</Text>
                </View>

                <View style={style.contact}>
                    <Text style={style.mobile}>Contact</Text>
                    <Text style={style.mobile1}>E-mail: sabordaavo@gmail.com</Text>
                    <Text style={style.mobile2}>mobile:253341134</Text>
                </View>

                <View style={style.facebook}>
                        <FontAwesome5 name={'facebook'} size={50} color="#0000cd"/>
                </View>
                
                <View style={style.instagram}>
                         <FontAwesome5 name={'instagram'} size={50} color="deeppink" />
                 </View>

                 <Image source={require('../assets/mapa.jpg')} style={style.imageMap} opacity={1}/>

                </ImageBackground>
            </View>
        );
        }   
}

const style = StyleSheet.create({
    container: {
      flex: 1
    },

    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageOpacity:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    news:{
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

    contact:{
        width: 290,
        height: 70,
        backgroundColor: '#ffa07a',
        opacity: 0.8,
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 20,
    },

    mobile:{
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4b0082',
        marginTop: 0,
        marginLeft: 90,
        fontSize: 20,
        fontWeight: 'bold',
    },

    mobile1:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -20,
        letterSpacing: 1,
    },

    mobile2:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -110,
        letterSpacing: 1,
    },

    imageMap: {
        width: 290,
        height: 80,
        marginTop: -170,
        top:30,
        marginLeft: 30,
        borderRadius: 20,
    },

    boxText:{
        width: 290,
        height: 100,
        backgroundColor: '#ffa07a',
        opacity: 0.8,
        marginTop: 40,
        marginLeft: 30,
        borderRadius: 20,
    },
    title:{
        color: "#4b0082",
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: "normal",
        marginLeft: 30,
        marginTop: -10,
        padding:10,
    },

    subTitle1:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -50,
        letterSpacing: 1,
    },

    subTitle2:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -20,
        letterSpacing: 1,
    },

    subTitle3:{
        color: "black",
        fontSize: 15,
        textAlign:'center',
        fontWeight: 'normal',
        fontStyle: "normal",
        top: -5,
        marginLeft: -5,
        letterSpacing: 1,
    },

    buttonSpace: {
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

    buttonMenu: {                                                 //menu
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

    buttonReservation: {
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

    buttonDesign:{
        fontSize: 13,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff8dc'
    },

    buttonMenu1:{
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff8dc'
    },

    buttonReservation1:{
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff8dc'
    },

  });

  export default Home;