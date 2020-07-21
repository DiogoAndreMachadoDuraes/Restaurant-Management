import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, TouchableOpacity, Image, ActivityIndicator, FlatList } from "react-native";
import { Icon } from "react-native-elements";

import BarraEstados from "./shared/BarraEstados";
import NossoFinal from "./shared/NossoFinal";
//import { StackedBarChart } from 'react-native-svg-charts';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class DetalhesProduto extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Café",
            alergenio: [],
            info: [],
            produto: [],
            isLoading: true,
        };
    }

    async componentDidMount(){ 
        console.log("Montando o ecrã Produto...");

        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Info_nutricional', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({ info: json, isLoading:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });

        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Alergenio', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({ alergenio: json, isLoading:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });

        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Produto', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({ produto: json, isLoading:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });
    }

    render(){
    /* 
    const data = [
        {
            month: new Date(2015, 0, 1),
            apples: 3840,
            bananas: 1920,
            cherries: 960,
            dates: 400,
            oranges: 400,
        },
        {
            month: new Date(2015, 1, 1),
            apples: 1600,
            bananas: 1440,
            cherries: 960,
            dates: 400,
        },
        {
            month: new Date(2015, 2, 1),
            apples: 640,
            bananas: 960,
            cherries: 3640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 3320,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
    ]

    const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
    const keys = ['apples', 'bananas', 'cherries', 'dates']
    */
    const { alergenio, produto, info, isLoading } = this.state;
    return (
        <View style={style.container}>
        <BarraEstados />
        <ImageBackground source={imageBackgound} opacity={0.4} style={style.imageBackground}>
        <ScrollView>
            <View style={style.arrow}>
                <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("CategoriaProduto")} color={"darkgreen"} size={45}/>
            </View>
            <View style={style.shop}>
                <Icon name="local-grocery-store" onPress={()=>this.props.navigation.navigate("Carrinho")} color={"darkgreen"} size={40}/>
            </View>
            {
                isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={produto}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={style.title}>{item.nome}</Text>
                                <Image source={{uri:''+item.foto+''}} style={style.image}/>
                                <Text style={style.text}>{item.descricao}</Text>
                            </View>
                        )}
                    />
                )
            }
            <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("Carrinho")}>
                <Text style={style.buttonText}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
            <Text style={style.infoText}>Informação Nutricional</Text>
            {
                isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={info}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={style.title}>{item.tipo}</Text>
                            <Text style={style.text}>{item.descricao}</Text>
                        </View>
                    )}
                />
                )
            }
            <Text style={style.alergeniosText}>Alergenios</Text>
            {
                isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={alergenio}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={style.title}>{item.tipo}</Text>
                            <Text style={style.text}>{item.descricao}</Text>
                        </View>
                    )}
                />
                )
            }
            <NossoFinal />
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
    imageBackground: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 80,
        marginLeft: 50
    },
    imageScroll: {
        width: 100,
        height: 100,
        marginTop: 80,
        marginLeft: 50
    },
    title: {
        color: "#fff",
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
    },
    DetalhesProdutoText: {
        height: 300
    },
    arrow: {
        backgroundColor: "white",
        left: 20,
        marginRight:350,
        marginTop: 45,
        borderRadius: 10
    },
    shop: {
        backgroundColor: "white",
        right:20,
        marginLeft: 350,
        marginTop: -45,
        borderRadius: 10
    },
    text: {
        color: "#000",
        fontSize: 18,
        fontStyle: "italic",
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    },
    button: {
        marginLeft: 40,
        width: 320,
        height: 50,
        marginTop: 25,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontStyle: "italic",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    ingredientesText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
    },
    infoText: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
    },
    alergeniosText: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
    },
    alergenioText: {
        color: "#000",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20
    }
});

export default DetalhesProduto;