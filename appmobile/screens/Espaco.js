import * as React from 'react';
import { Alert, StyleSheet, ScrollView, View, Text, Image, Image1, TextInput, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Header, Icon} from "react-native-elements";
import { NossoHeader } from './shared/NossoHeader';
import BarraEstados from './shared/BarraEstados';
import NossoFinal from './shared/NossoFinal.js';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const image = {uri: "https://images.trustinnews.pt/uploads/sites/5/2019/12/MB-Rest-JNCquoi-Asia-07.jpg"};
const image1 = {uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eater.com%2F2015%2F2%2F13%2F8033303%2Fman-sells-valentines-day-reservations-on-craigslist&psig=AOvVaw3bM3uPTqVeBZv2_5D0wDti&ust=1591110238049000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCmwdrx4OkCFQAAAAAdAAAAABAN"}; 

class Espaco extends React.Component{
    constructor(){
        super();
        this.state={ name:'O Nosso Espaço' };
    }
    componentDidMount(){ 
        console.log("Montar ecrã Espaço...");
    }
    render() {
        return (

            <View style={style.container}>
                <BarraEstados/>
                
                    <NossoHeader nome={this.state.name} navigation={this.props.navigation}/>

                        <ImageBackground source={imageBackgound} style={style.imagemdefundo} opacity={1}>
                            <ScrollView>
                                <View style={style.espaco}>
                                    <View style={style.caixatexto}>
                                        <Text style={style.titulo}>Esta nossa imagem carateriza se por ser um cantinho rústico e ao mesmo tempo moderno. Ideal para jantares de negócios e, claro para um almoço em família. Venha visitar nos! Estamos à sua espera!</Text>
                                    </View>
                                            <Image source={require('../assets/french.jpg')} style={style.image}/>
                                </View>
                            </ScrollView>
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
    },

    espaco: {
        width: '100%',
        height: 1650,
    },

    image: {
        width: 120,
        height: 150,
        marginTop: 120,
        top:-80,
        marginLeft: 0,
    },

    caixatexto:{
        width: 175,
        height: 425,
        backgroundColor: '#cd5c5c',
        opacity: 0.8,
        marginTop: 50,
        marginLeft: 215,
        borderRadius: 20,
    },
    titulo:{
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "normal",
        marginLeft: 30,
        left: -10,
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
    }

  });

  export default Espaco;