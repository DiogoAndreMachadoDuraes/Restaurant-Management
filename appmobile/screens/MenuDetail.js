import * as React from "react";
import { StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity, Text, Image} from "react-native";
import OwnStatusBar from "./shared/OwnStatusBar";
import FinalHeader from "./shared/FinalHeader";

class MenuDetail extends React.Component{
    constructor(){
        super();
    }

    async componentDidMount(){ 
        console.log("Mounting the screen MenuDetail...");
    }

    render(){
        const { route } = this.props;
        const { idMenu, name, description, type, photo, price } = route.params;
        return (
            <View style={style.container}>
            <OwnStatusBar />
            <ImageBackground source={require("../assets/detalhe.jpg")} style={style.imageOut} opacity={0.85}>
            <ScrollView>
                <View>
                    <Text style={style.title}>{name}</Text>
                    <Image source={{uri:''+photo+''}} style={style.image}/>
                    <Text style={style.text}>{description}</Text>
                </View>
                <Text style={style.textMenu}>
                    <Text>Preço: </Text> 
                    <Text>{price}€</Text>
                </Text>
                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.goBack()}>
                    <Text style={style.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button1} onPress={() => this.props.navigation.navigate("Shop")}>
                    <Text style={style.buttonText}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
                <FinalHeader />
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

    image: {
        width: 300,
        height: 330,
        marginTop: 120,
        marginLeft: 50
    },

    imageOut: {
        flex: 1,
        backgroundColor: 'blue',
    },
    
    title: {
        color: "yellow",
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 70
    },

    text: {
        color: "#fff",
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    },

    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        marginTop: 70,
        top: -7,
        width:100,
        left: 30,
    },
      
    button1:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        marginTop: -50,
        width:200,
        left: 180,
    },

    textMenu: {
        color: "#fff",
        fontSize: 25,
        top: 20,
        left: 55,
        fontWeight: 'bold',
    },

    buttonText: {
        color: 'tomato',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    }    
});

export default MenuDetail;