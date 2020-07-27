import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import { NossoHeader } from './shared/NossoHeader';
import BarraEstados from './shared/BarraEstados';

const imageBackgound = { uri: "https://media.timeout.com/images/105327913/630/472/image.jpg" };
const image = {uri: "https://images.trustinnews.pt/uploads/sites/5/2019/12/MB-Rest-JNCquoi-Asia-07.jpg"};
const image1 = {uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eater.com%2F2015%2F2%2F13%2F8033303%2Fman-sells-valentines-day-reservations-on-craigslist&psig=AOvVaw3bM3uPTqVeBZv2_5D0wDti&ust=1591110238049000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCmwdrx4OkCFQAAAAAdAAAAABAN"}; 

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
                <BarraEstados/>
                
                    <NossoHeader nome={this.state.name} navigation={this.props.navigation}/>

                        <ImageBackground source={imageBackgound} style={style.imagemdefundo} opacity={0.4}>
                            <ScrollView>
                                <View style={style.espaco}>
                                    <View style={style.caixatexto}>
                                        <Text style={style.titulo}>Esta nossa imagem carateriza se por ser um cantinho rústico e ao mesmo tempo moderno. Ideal para jantares de negócios e, claro, para um almoço em família. Venha visitar nos! Estamos à sua espera!</Text>
                                        <Text style={style.titulo1}>O Sabor da Avó é um excelente sabor que nos leva à nossa infância e, à aquele cheirinho caraterístico dos pratos que as nossas avós faziam. Contudo, acompanhamos sempre a inovação e como tal, apresentamos uma selação variada de pratos vegan, pratos sem glúten, uma especialidade de hamburgueria gourmet e muito mais. Venha descobrir todas as nossas novidades!</Text>
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

    imagemdefundo: {
        flex: 1,
        backgroundColor: '#556b2f',
    },

    espaco: {
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

    titulo:{
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: "normal",
        marginLeft: 30,
        left: -10,
        marginTop: 50,
        padding:10,
    },

    titulo1:{
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