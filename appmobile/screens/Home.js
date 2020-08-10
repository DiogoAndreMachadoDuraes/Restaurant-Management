import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { HeaderWihoutShop } from './shared/HeaderWihoutShop';
import OwnStatusBar from './shared/OwnStatusBar';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; 
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme, Avatar} from 'react-native-paper';

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
            <HeaderWihoutShop nome={this.state.name} navigation={this.props.navigation}/>
            <TouchableOpacity
                style={{paddingHorizontal: 330, marginTop: -55}}
                onPress={() => { navigation.navigate('Account'); }}>
                    <Avatar.Image
                        source={{
                            uri:
                            'https://www.hiper.fm/wp-content/uploads/2019/12/isabela-valadeiro.jpg',
                            }}
                            size={40}
                    />
            </TouchableOpacity>
            <Swiper autoplay vertical={false} height={200} activeDotColor="#FF6347">
                <View style={style.slide}>
                    <Image
                    source={require('../assets/space1.jpg')}
                    resizeMode="cover"
                    style={style.sliderImage}
                    />
                </View>
                <View style={style.slide}>
                    <Image
                    source={require('../assets/cartao.jpg')}
                    resizeMode="cover"
                    style={style.sliderImage}
                    />
                </View>
                <View style={style.slide}>
                    <Image
                    source={require('../assets/portuguesa.jpg')}
                    resizeMode="cover"
                    style={style.sliderImage}
                    />
                </View>
            </Swiper> 

            <View style={style.categoryContainer}>

                <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("Restaurant") }>
                <View style={style.categoryIcon}>
                    <Ionicons name="ios-map" size={35} color="#556b2f" />
                </View>
                    <Text style={style.categoryBtnTxt}>Restaurantes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("Menu")}>
                    <View style={style.categoryIcon}>
                        <MaterialCommunityIcons
                        name="food-fork-drink"
                        size={35}
                        color="#556b2f"
            />
                </View>
                    <Text style={style.categoryBtnTxt}>Menus</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("SpecialMenu")}>
                    <View style={style.categoryIcon}>
                    <MaterialCommunityIcons name="food" size={35} color="#556b2f" />
                </View>
                    <Text style={style.categoryBtnTxt}>Ementas</Text>
                </TouchableOpacity>
                </View>

                <View style={[style.categoryContainer, {marginTop: 10}]}>
                <TouchableOpacity style={style.categoryBtn} onPress={() =>this.props.navigation.navigate("Space") }>
                <View style={style.categoryIcon}>
                    <Fontisto name="home" size={35} color="#556b2f" />
                </View>
                    <Text style={style.categoryBtnTxt}>Espaço</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("") }>
                <View style={style.categoryIcon}>
                    <Ionicons name="ios-card" size={35} color="#556b2f" />
                </View>
                    <Text style={style.categoryBtnTxt}> Cartão Fidelidade </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.categoryBtn} onPress={() => {}}>
                    <View style={style.categoryIcon}>
                    <MaterialIcons name="expand-more" size={35} color="#556b2f" />
                </View>
                    <Text style={style.categoryBtnTxt}>Mais</Text>
                </TouchableOpacity>
                </View>
                
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={style.map}
                    region={{
                        latitude: 41.69323,
                        longitude: -8.83287,
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
        top: 700
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        top: 10,
    },

    sliderImage: {
        height: 150,
        width: 450,
        alignSelf: 'stretch',
        borderRadius: 8,
        left: 0,
        top:-24,
    },

    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },

    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },

    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#556b2f' */,
        borderRadius: 50,
    },

    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },

  });

  export default Home;