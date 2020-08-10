import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { OwnHeader } from './shared/OwnHeader';
import OwnStatusBar from './shared/OwnStatusBar';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; 

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
             <OwnStatusBar/>
                <OwnHeader nome={this.state.name} navigation={this.props.navigation}/>
                
                <TouchableOpacity style={style.buttonSpace} onPress={() => this.props.navigation.navigate("TakeAway") }>
                <Text style={style.buttonDesign}>Nosso Espaço</Text>
                </TouchableOpacity>
                
                <Image source={require('../assets/ementa.jpg')} style={style.image1} opacity={1}/>
                <TouchableOpacity style={style.buttonMenu} onPress={() => this.props.navigation.navigate("Menu") }>
                <Text style={style.buttonMenu1}>Menus</Text>
                </TouchableOpacity>

                <Image source={require('../assets/reserva.jpeg')} style={style.image2} opacity={1}/>
                <TouchableOpacity style={style.buttonReservation} onPress={() => this.props.navigation.navigate("Reservation") }>
                <Text style={style.buttonReservation1}>Reserva</Text>
                </TouchableOpacity>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={style.map}
                    region={{
                        latitude: 41.69323,
                        longitude: -8.83287,
                        latitudeDelta: 0.1,
                        longitudeDelta: 2,
                    },{
                        latitude: 41.8071182,
                        longitude: -6.7589839,
                        latitudeDelta: 0.1,
                        longitudeDelta: 2,
                    }}
                >
                    <Marker
                    coordinate={{
                        latitude: 41.69323,
                        longitude: -8.83287,
                }}
                    title="Sabor da Avó"
                    description="Restaurante em Viana do Castelo">
                    <Marker
                    coordinate={{
                        latitude: 41.8071182,
                        longitude: -6.7589839,
                }}
                    title="Sabor da Avó"
                    description="Restaurante em Bragança"></Marker>
                    <Marker
                    coordinate={{
                        latitude: 41.3527285,
                        longitude: -8.20451531,
                }}
                    title="Sabor da Avó"
                    description="Restaurante em Felgueiras"></Marker>
                    
                        <View>
                            <Image style={style.marker} source={require ("../assets/marker.png")}/>
                        </View>
                        <Callout tooltip>
                            <View>
                                <View style={style.bubble}>
                                   <Text style= {style.name}>Restaurante Favorito</Text>
                                   <Image
                                       style={style.imageRestaurant}
                                       source={require('../assets/marker.png')}
                                   />
                                </View>
                                    <View style={style.arrowBorder} />
                                    <View style={style.arrow} />
                            </View>
                        </Callout>
                    </Marker>
                </MapView>
                
            </View>
        );
        }   
}

const style = StyleSheet.create({
    container: {
      flex: 1
    },

    menu: {                           //scrollview
        width: "100%",
        height: 1000,
    },

    imageRestaurant:{
        width: 50,
        height: 50,
    },

    name: {
        fontSize: 16,
        marginBottom: 5,
      },

    bubble:{
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 200,
    },

    arrow:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },

    arrowBorder:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
    },

    marker:{
        height: 50,
        width:50,
    },

    map: {
        height: '30%',
        top: 300
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
        top: 0,
        marginLeft: 0,
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
        top: 100,
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
        top: 100,
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