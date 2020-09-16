import React, { useState } from "react";
import { StyleSheet, Text,View,ScrollView, Button, ImageBackground,KeyboardAvoidingView,AsyncStorage, Alert} from "react-native";
import { OwnHeader } from './shared/OwnHeader.js';
import FinalHeader from './shared/FinalHeader.js';
import OwnStatusBar from "./shared/OwnStatusBar.js";
import moment from 'moment';
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native-gesture-handler";

class EditReservation extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Editar Reservas",
            now: moment().format("YYYY-MM-DD"),
            isVisible: false,
            validQuantity: true,
            number: true,
            newQuantity: "",
            chosenDate: ''
        };
    }
    async componentDidMount(){ 
        console.log("Mounting the screen Edit Reservation...");
        let token = await AsyncStorage.getItem("token");
    }
    handlePicked = (datetime) => {
        this.setState({ 
            isVisible: false,
            chosenDate: moment(datetime).format('YYYY/MM/DD'),
            chosenHour: moment(datetime).format('hh:mm')
        });
        this.hidePicker();
    }
    showPicked = () => {
        this.setState({ isVisible: true });
    }
    hidePicker = () => {
        this.setState({ isVisible: false });
    }
    validQuantity = (val) => {
        if(!isNaN(val)){
            if(val.trim().length<=3){
            this.setState({
                validQuantity: true,
                number: true,
                newQuantity: val
            });
            } else {
            this.setState({
                validQuantity: false,
                newQuantity: val
            });
            }
        } else {
            this.setState({
                number: false,
                newQuantity: val
            });
        }
    }
    render(){
        const { navigation, route } = this.props;
        const { reservationId, date, hour, quantity, state, clientId } = route.params;
        return (
            <View style={style.container}>
                <OwnStatusBar />
                <OwnHeader nome={name} navigation={this.props.navigation} />
                <ImageBackground source={require("../assets/imageBackground.jpg")} style={style.imageBackgound}>
                <ScrollView>
                    <KeyboardAvoidingView behavior="padding" style={style.calendar}>
                    <View style={style.reservation}>
                        <Text style={style.data}>
                        <Text style={{fontWeight: 'bold'}}>Escolher data e hora: </Text>
                        <Text>{chosenDate} {chosenHour}</Text>
                        </Text>
                        <DateTimePicker
                            isVisible={isVisible}
                            mode={'datetime'}
                            onConfirm={this.handlePicked}
                            onCancel={this.hidePicker}
                            locale="pt"
                            is24Hour={true}
                        />
                        <TouchableOpacity style={style.getHour} onPress={this.showPicked}>
                        <Icon name="calendar" size={45}></Icon>
                        </TouchableOpacity>
                        <Text style={style.data}>
                        <Text style={{fontWeight: 'bold'}}>Quantidade de Pessoas: </Text>
                        </Text>
                        <TextInput style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, top: -40, marginLeft: 200 }}
                            onChangeText={(val) => this.validQuantity(val)}
                            values={newQuantity}
                            onSubmitEditing={(val) => this.validQuantity(val)}
                            onEndEditing={(e)=>this.validQuantity(e.nativeEvent.text)}
                        />
                        { 
                            number ? true : 
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={style.invalidQuantity}>A quantidade de pessoas tem de ser um número!</Text>
                                </Animatable.View>
                        }
                        { 
                            validQuantity ? true : 
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={style.invalidQuantity}>A quantidade tem de ser menor do que 1000!</Text>
                                </Animatable.View>
                        }
                        <Text style={style.data}>
                            <Text style={{fontWeight: 'bold'}}>Restaurante: </Text>
                            </Text>
                        <Picker
                            style={{ height: 50, width: 190, top: -45, left: 120}}
                            selectedValue={restaurant}
                            onValueChange={(value, index) => this.setState({ restaurant: value})}
                            mode='dropdown'
                        >
                            <Picker.Item label="Viana do Castelo" value="Sabor da Avó - Viana do Castelo" />
                            <Picker.Item label="Bragança" value="Sabor da Avó - Bragança" />
                            <Picker.Item label="Felgueiras" value="Sabor da Avó - Felgueiras" />
                        </Picker>
                    </View>
                    </KeyboardAvoidingView>
                    <View style={style.button}>
                    <Button
                        style={style.button}
                        title="Reservar"
                        color="tomato"
                        onPress={() => this._onPress(reservationId, date, hour, quantity, state, clientId)}
                    />
                    </View>
                    <FinalHeader />
                </ScrollView>
                </ImageBackground>
            </View>
        );
    }
    onPress = async (reservationId, date, hour, quantity, state, clientId) => {
        const { newQuantity, chosenDate, chosenHour } = this.state;
        if(chosenDate==""){
            chosenDate=date;
        }
        if(moment.duration(moment(date,"YYYY-MM-DD").diff(moment(this.state.now, "YYYY-MM-DD"))).asDays()>2){
            let token = await AsyncStorage.getItem("token");
            try
            {
                await fetch('http://192.168.1.78/Ementas-de-Restauracao/index.php/Reserva', { 
                    method: 'PUT',
                    headers: {
                        Authorization: 'Bearer ' + token,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id_reserva": reservationId,
                        "data": moment().format('YYYY/MM/DD'),
                        "hora": moment().format('HH:mm:ss'),
                        "quantidade_pessoas": newQuantity ?  newQuantity : quantity,
                        "data_marcada": chosenDate,
                        "hora_marcada": chosenHour ? chosenHour : hour,
                        "estado": state,
                        "id_cliente": clientId
                    })
                });
                Alert.alert("Reserva editada com sucesso!");
                this.props.navigation.navigate("Home");
            } catch(e){
                console.log(e);
                Alert.alert("Erro!", "Não foi possível modificar a sua fatura! Contacte o restaurante");
            }
        } else{
            Alert.alert("Não pode fazer uma reserva para menos de dois dias antes do que o prazo pretendido!");
        }
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackgound: {
        flex: 1
    },
    calendar: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    reservation: {
        height: 480,
        width: 360,
        marginTop: 50,
        backgroundColor: "lightgray"
    },
    data: {
        marginTop: 20,
        marginLeft: 20,
        marginVertical: 10,
        fontSize: 15,
    },
    getHour: {
        marginTop: -35,
        marginLeft: 300,
        marginVertical: 10
    },
    button: {
        width: 100,
        height: 100,
        left: 270,
        top: 50,
        marginBottom: -50,
        color:"tomato"
    },
    invalidQuantity: {
        color: '#FF0000',
        fontSize: 10,
        top: -30,
        left: 20
    },
});
export default EditReservation;