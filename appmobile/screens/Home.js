import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import OwnStatusBar from './shared/OwnStatusBar';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; 
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderWithAccount } from './shared/HeaderWithAccount';

class Home extends React.Component{
    constructor(){
        super();
        this.state={ name:'Sabor da Avó', avatarName:[], photo:[] };
    }

    async componentDidMount(){ 
        console.log("Mounting the screen Home...");

        try {
            let json=await AsyncStorage.getItem("Name");
            if (json!=null){
                this.setState({
                    avatarName: json
                });
            }
        }
        catch(e){
            console.log("error to get asyncstorage name: " + e);
        }
        
        try {
            let json=await AsyncStorage.getItem("Foto");
            if (json!=null){
                this.setState({
                    photo: json
                });
            }
        }
        catch(e){
            console.log("error to get asyncstorage photo: " + e);
        }    
    }

    render() {
        return (
            <View style={style.container}>
            <OwnStatusBar/>
            <HeaderWithAccount nome={this.state.name} navigation={this.props.navigation} photo={this.state.photo}/>
                <ScrollView style={style.container}>
                <View style ={style.container1}>
                    <Text style={style.textUser}> Olá {this.state.avatarName}, </Text>
                    <Text style={style.textWelcome}> Encontre as nossas novidades e visite-nos! </Text>
                </View>
                <Swiper autoplay vertical={false} height={200} activeDotColor="#FF6347">
                    <View style={style.slide}>
                        <Image source={require('../assets/space1.jpg')} resizeMode="cover" style={style.sliderImage} />
                    </View>
                    <View style={style.slide}>
                        <Image source={require('../assets/casamento.jpg')} resizeMode="cover" style={style.sliderImage} />
                    </View>
                    <View style={style.slide}>
                        <Image source={require('../assets/portuguesa.jpg')} resizeMode="cover" style={style.sliderImage} />
                    </View>
                    <View style={style.slide}>
                        <Image source={require('../assets/caldoVerde.jpg')} resizeMode="cover" style={style.sliderImage} />
                    </View>
                    <View style={style.slide}>
                        <Image source={require('../assets/baby.jpg')} resizeMode="cover" style={style.sliderImage} />
                    </View>
                </Swiper> 
                <View style={style.categoryContainer}>
                    <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("Space") }>
                    <View style={style.categoryIcon}>
                        <Fontisto name="home" size={35} color="#556b2f" />
                    </View>
                        <Text style={style.categoryBtnTxt}>Espaço</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("Restaurant")}>
                        <View style={style.categoryIcon}>
                            <Ionicons name="ios-map" size={35} color="#556b2f" />
                    </View>
                        <Text style={style.categoryBtnTxt}>Restaurantes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("TakeAway")}>
                        <View style={style.categoryIcon}>
                        <Fontisto name="shopping-bag-1" size={35} color="#556b2f" />
                    </View>
                        <Text style={style.categoryBtnTxt}>Take Away</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={[style.categoryContainer, {marginTop: 10}]}>
                    <TouchableOpacity style={style.categoryBtn} onPress={() =>this.props.navigation.navigate("Menu") }>
                    <View style={style.categoryIcon}>
                        <MaterialIcons name="restaurant" size={35} color="#556b2f" />
                    </View>
                        <Text style={style.categoryBtnTxt}>Menus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("SpecialMenu") }>
                    <View style={style.categoryIcon}>
                        <MaterialCommunityIcons name="book-open-page-variant" size={35} color="#556b2f" />
                    </View>
                        <Text style={style.categoryBtnTxt}> Ementas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.categoryBtn} onPress={() => this.props.navigation.navigate("Product")}>
                        <View style={style.categoryIcon}>
                        <MaterialCommunityIcons name="food-variant" size={35} color="#556b2f" />
                    </View>
                        <Text style={style.categoryBtnTxt}> Produtos </Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={style.textClose}>Encerrado aos Domingos e feriados.                   Segunda a Sábado das 10h:00 - 00h:00.</Text>
                    </View>
            
                    <Text style={style.textFound}>Encontre o seu restaurante aqui! E veja todas as sugestões que temos para si! </Text>
                    
                    <View>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={style.map}
                            region={{
                                latitude: 38.7077507,
                                longitude: -9.1365919,
                                latitudeDelta: 0.2,
                                longitudeDelta: 6,
                            }}
                        >
                            <Marker
                            coordinate={{
                                latitude: 41.69323,
                                longitude: -8.83287,
                            }}
                            >
                        <View>  
                            <Image style={style.marker} source={require ("../assets/marker.png")}/>
                        </View>
                        <Callout tooltip>
                            <View>
                                <View style={style.bubble}>
                                    <Text style= {style.name}>Restaurante em Viana do Castelo</Text>
                                </View>
                                    <View style={style.arrowBorder} />
                                    <View style={style.arrow} />
                            </View>
                        </Callout>
                        </Marker>
                            <Marker
                            coordinate={{
                                latitude: 41.5084468,
                                longitude: -6.77330236,
                            }}
                            >
                        <View>  
                            <Image style={style.marker} source={require ("../assets/marker.png")}/>
                        </View>
                        <Callout tooltip>
                            <View>
                                <View style={style.bubble}>
                                    <Text style= {style.name}>Restaurante em Bragança</Text> 
                                                                          
                                </View>
                                    <View style={style.arrowBorder} />
                                    <View style={style.arrow} />
                            </View>
                        </Callout>
                        </Marker>
                            <Marker
                            coordinate={{
                                latitude: 41.3527285,
                                longitude: -8.20451531,
                            }}
                            >
                        <View>  
                            <Image style={style.marker} source={require ("../assets/marker.png")}/>
                        </View>
                        <Callout tooltip>
                            <View>
                                <View style={style.bubble}>
                                    <Text style= {style.name}>Restaurante em Felgueiras</Text>
                                </View>
                                    <View style={style.arrowBorder} />
                                    <View style={style.arrow} />
                            </View>
                        </Callout>
                        </Marker>
                        </MapView>
                    </View>
                </ScrollView>   
            </View>
        );
    }   
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    container1:{
        paddingTop: 30,
        paddingLeft:16,
        alignItems: 'center',
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
        width: 280,
        height: 50,
    },

    marker:{
        height: 50,
        width:50,
    },

    map: {
        width: "100%",
        height: 600,
        paddingVertical:20,
        marginTop: 30,
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        top: 10,
    },

    sliderImage: {
        height: 145,
        width: 400,
        alignSelf: 'stretch',
        borderBottomRightRadius: 65,
        left: 0,
        top:-40,
    },

    categoryContainer: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 65,
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
        backgroundColor: '#fdeae7' ,
        borderRadius: 50,
    },

    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },

    textUser:{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#de4f35',
        top: -10,
    },

    textWelcome:{
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#de4f35',
        top:-10,
    },

    textClose:{
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#de4f35',
        left: 60,
        top:-290,
    },

    textFound:{
        fontSize: 20,
        fontWeight: 'normal',
        color: '#de4f35',
        top: 0,
        left: 20,
    }
});

export default Home;