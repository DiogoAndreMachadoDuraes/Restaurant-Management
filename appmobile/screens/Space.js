import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import { HeaderWihoutShop } from './shared/HeaderWihoutShop.js';
import OwnStatusBar from './shared/OwnStatusBar';

const imageBackgound = { uri: "https://media.timeout.com/images/105327913/630/472/image.jpg" };

class Space extends React.Component{
    constructor(){
        super();
        this.state={ name:'O Nosso Espaço' };
    }
    componentDidMount(){ 
        console.log("Mounting the screen Space...");
    }
    render() {
        return (
            <View style={style.container}>
                <OwnStatusBar/>
                <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>
                <ImageBackground source={imageBackgound} style={style.imageOut} opacity={0.4}>
                    <ScrollView>
                        <View style={style.space}>
                            <View style={style.caixatexto}>
                                <Text style={style.title}>Esta nossa imagem carateriza se por ser um cantinho rústico e ao mesmo tempo moderno. Ideal para jantares de negócios e, claro, para um almoço em família. Venha visitar nos! Estamos à sua espera!</Text>
                                <Text style={style.title1}>O Sabor da Avó é um excelente sabor que nos leva à nossa infância e, à aquele cheirinho caraterístico dos pratos que as nossas avós faziam. Contudo, acompanhamos sempre a inovação e como tal, apresentamos uma selação variada de pratos vegan, pratos sem glúten, uma especialidade de hamburgueria gourmet e muito mais. Venha descobrir todas as nossas novidades!</Text>
                            </View>
                            <Image source={require('../assets/space.jpg')} style={style.image}/>
                            <Image source={require('../assets/space1.jpg')} style={style.image1}/>
                            <Image source={require('../assets/space2.jpg')} style={style.image2}/>
                            <Image source={require('../assets/space3.jpg')} style={style.image3}/>
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

    imageOut: {
        flex: 1,
        backgroundColor: 'black',
    },

    space: {
        width: '100%',
        height: 1070,
    },

    image: {
        width: 180,
        height: 300,
        marginTop: 80,
        top: -60,
        marginLeft: 15,
    },

    image1: {
        width: 180,
        height: 300,
        marginTop: 120,
        top: -450,
        marginLeft: 195,
    },

    image2: {
        width: 180,
        height: 300,
        marginTop: 120,
        top: -600,
        marginLeft: 15,
    },

    image3: {
        width: 180,
        height: 300,
        marginTop: 120,
        top: -990,
        marginLeft: 195,
    },

    title:{
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: "normal",
        marginLeft: 30,
        left: -10,
        marginTop: 50,
        padding:10,
    },

    title1:{
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: "normal",
        marginLeft: 30,
        left: -10,
        marginTop: -220,
        top: 880,
        padding:10,
    }
});

export default Space;