import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Button, 
  ImageBackground,
  KeyboardAvoidingView, 
  AsyncStorage,
  Picker,
} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";

class CreateTakeAway extends React.Component{
  constructor(){
    super();
    this.state={
        name:"Reservar Take Away",
        user: [],
        restaurant: "",
        take: "nao",
        type: "Restaurante",
        price: 5,
        pontos: 10, 
        data:[],
        client:[]
    };
  }

    async componentDidMount(){ 
        console.log("Mounting the screen CreateTakeAway...");
        try {
            const value = await AsyncStorage.getItem("User");
            if (value !== null) {
                this.setState({ user: JSON.parse(value) });
            }
        } catch (e) {
            console.log("Error rending user: " + e);
        }
    }

    getType = (value) => {
        this.setState({ type: value });
    }

    render(){
        const { name, type, user} = this.state;
        const { navigation, route } = this.props;
        const { date, hour, reserveID } = route.params;

        const street=user.map(a=>a.rua);
        const postalCode=user.map(a=>a.codigo_postal);
        const location=user.map(a=>a.localizacao);

        return (
        <View style={style.container}>
            <OwnStatusBar />
            <OwnHeader nome={name} navigation={this.props.navigation} />
            <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound} opacity={0.7}>
            <ScrollView>
                <KeyboardAvoidingView behavior="padding" style={style.calendar}>
                    <View style={style.takeAway}>
                        <Text style={style.data}>
                            <Text style={{fontWeight: 'bold'}}>Tipo de entrega:</Text>
                        </Text>
                        <Picker
                            style={{ height: 50, width: 190, top: -45, left: 140}}
                            selectedValue={type}
                            onValueChange={(value, index) => this.getType(value)}
                            mode='dropdown'
                        >
                            <Picker.Item label="Restaurante" value="Restaurante" />
                            <Picker.Item label="Domicílio" value="Domicílio" />
                        </Picker>
                        <Text style={style.price}>
                            <Text style={{fontWeight: 'bold'}}>Preço: </Text>
                        </Text>
                        {
                            type=="Restaurante" ?
                                <Text style={{marginTop: -45, left: 80}}>5€</Text>
                            :
                                <Text style={{marginTop: -45, left: 80}}>10€</Text>
                        }
                        <Text style={style.data}>
                            <Text style={{fontWeight: 'bold'}}>Data escolhida: </Text>
                            <Text>{date}</Text>
                        </Text>
                        <Text style={style.data}>
                            <Text style={{fontWeight: 'bold'}}>Hora escolhida: </Text>
                            <Text>{hour}</Text>
                        </Text>
                        {
                            type=="Restaurante" ?
                                true
                            :
                                <Text style={style.data}>
                                    <Text style={{fontWeight: 'bold'}}>Morada de entrega: </Text>
                                    <Text>{street}, {postalCode}, {location}</Text>
                                </Text>
                        }
                    </View>
                </KeyboardAvoidingView>
                <View style={style.button}>
                <Button
                    style={style.button}
                    title="Finalizar"
                    color="black"
                    onPress={()=>this._onPress(date, hour, reserveID)}
                />
                </View>
                <FinalHeader />
            </ScrollView>
            </ImageBackground>
        </View>
        );
    }

    _onPress = async(date, hour, reserveID) => {
        const { type } = this.state;
        let token = await AsyncStorage.getItem("token");
        if(type=="Restaurante"){
            try{
                let response=await fetch('http://194.210.89.189/Ementas-de-Restauracao/index.php/Take_away', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "tipo_entrega": "Restaurante",
                    "preco": 5,
                    "estado": "Em análise",
                    "id_funcionario": null,
                    "id_reserva": reserveID
                })
                });
                    console.log(""+response);
                    this.props.navigation.navigate("AfterShop", { date, hour });
            } catch(e){
                console.log(e);
            }
        } else{
            try{
                await fetch('http://194.210.89.189/Ementas-de-Restauracao/index.php/Take_away', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "tipo_entrega": "Domicílio",
                    "preco": 10,
                    "estado": "Em análise",
                    "id_funcionario": null,
                    "id_reserva": reserveID,
                })
                });
                console.log(reserveID);
                    this.props.navigation.navigate("AfterShop", { date, hour });
            } catch(e){
                console.log(e);
            }
        }
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackgound: {
        flex: 1
    },
    calendar: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    takeAway: {
        height: 320,
        width: 360,
        marginTop: 50,
        backgroundColor: "lightgray"
    },
    data: {
        marginTop: 20,
        marginLeft: 20,
        marginVertical: 10,
        fontSize: 15
    },
    price: {
        marginTop: -20,
        marginLeft: 20,
        marginVertical: 25,
        fontSize: 15
    },
    button: {
        width: 100,
        height: 100,
        left: 240,
        top: 40,
        marginBottom: -50
    }
});

export default CreateTakeAway;