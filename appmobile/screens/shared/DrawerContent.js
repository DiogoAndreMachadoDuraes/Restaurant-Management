import React, { useEffect, useState }  from "react";
import {
    StyleSheet, 
    View, 
    ImageBackground, 
    AsyncStorage
} from "react-native";
import {
    Avatar,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import { ToggleTheme } from '../../components/context';

export function DrawerContent(props){

    const theme= useTheme();

    const { toggle } = React.useContext(ToggleTheme);
    
    const [name, setName] = useState();
    const [foto, setFoto] = useState();
    const [clearAll, setClear] = useState();

    const dataName = async () => {
        try {
            let name = await AsyncStorage.getItem("Name");
            if (name !== null) {
                setName(name);
            }
        } catch (e) {
            console.log("Error rending name: " + e);
        }
    };

    const dataFoto = async () => {
        try {
            let foto = await AsyncStorage.getItem("Foto");
            if (foto !== null) {
                setFoto(foto);
            }
        } catch (e) {
            console.log("Error rending foto: " + e);
        }
    };

    const clear = async () => {
        try {
            await AsyncStorage.clear();
            props.navigation.navigate('Login');
        } catch (e) {
            console.log("Error to clear all data: " + e);
        }
    };

    useEffect(() =>{
        dataName();
    }, [])

    useEffect(() =>{
        dataFoto();
    }, [])

    useEffect(() =>{
        clear();
    }, [])

    return (
        <View style={style.container}>
            <DrawerContentScrollView {...props}>
                <View style={style.menuHome}>
                    <View style={theme.dark ? style.infoLogoDark : style.infoLogo}>
                        <View style={style.logoBack}>
                            <ImageBackground source={require('../../assets/logo.png')} style={style.logo} />
                        </View>
                    </View>
                    <Drawer.Section style={style.menus}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sabor da Avó"
                            onPress={() => {props.navigation.navigate('Home')}}
                            labelStyle={style.dark}
                            activeBackgroundColor= "#556b2f"
                            activeTintColor= "#556b2f"
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="location-on" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Restaurantes"
                            onPress={() => {props.navigation.navigate('Restaurant')}}
                            labelStyle={style.dark}
                            activeBackgroundColor= "#556b2f"
                            activeTintColor= "#556b2f"
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="food-fork-drink" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Ementas"
                            onPress={() => {props.navigation.navigate('SpecialMenu')}}
                            labelStyle={style.dark}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="food" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Menus"
                            onPress={() => {props.navigation.navigate('Menu')}}
                            labelStyle={style.dark}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="food-variant" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Produtos"
                            onPress={() => {props.navigation.navigate('Product')}}
                            labelStyle={style.dark}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ballot-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Reserva"
                            onPress={() => {props.navigation.navigate('Reservation')}}
                            labelStyle={style.dark}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book-open-page-variant" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Faturas"
                            onPress={() => {props.navigation.navigate('Invoice')}}
                            labelStyle={style.dark}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Lista de desejos"
                            labelStyle={style.dark}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferências">
                        <TouchableRipple onPress={() => { toggle() }}>
                            <View style={style.preferences}>
                                <Text style={style.dark}>Tema escuro</Text>
                                    <View pointerEvents="none">
                                        <Switch value={theme.dark} color="#556b2f"/> 
                                    </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                    <Drawer.Section title="Conta">
                        <TouchableRipple>
                            <View>
                                <DrawerItem 
                                    icon={({size}) => (
                                        <Avatar.Image 
                                        source={{uri:''+foto+''}}
                                        size={size}
                                        />
                                        
                                    )}
                                    label={''+name+''}
                                    onPress={() => {props.navigation.navigate('Account')}}
                                    labelStyle={style.dark}
                                />
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                    <Drawer.Section title="Definições">
                            <DrawerItem 
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="account-check-outline" 
                                        color={color}
                                        size={size}
                                        />
                                    )}
                                    label="Suporte"
                                    labelStyle={style.dark}
                                />
                                <DrawerItem 
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="settings-outline" 
                                        color={color}
                                        size={size}
                                        />
                                    )}
                                    label="Definições"
                                    labelStyle={theme.dark ? style.dark: style.normal}
                                />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={style.exit}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={"white"}
                        size={size}
                        />
                    )}
                    label="Sair da conta"
                    labelStyle={{color: 'white'}}
                    onPress={()=>clear}
                    style={theme.dark ? style.exitButtonDark : style.exitButton}
                />
            </Drawer.Section>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    menuHome: {
        flex: 1
    },
    infoLogo: {
        top: -30, 
        paddingVertical: 40, 
        backgroundColor: "#556b2f"
    },
    infoLogoDark: {
        top: -30, 
        paddingVertical: 40, 
        backgroundColor: "#444444"
    },
    logoBack:{
        justifyContent: "center",
        alignItems: "center",
        top: 10,
        left: 10,
        marginRight: 25,
        borderRadius: 50,
        backgroundColor: "white",
        paddingVertical: 10
    },
    logo: {
        width: 210,
        height: 230
    },
    menus: {
        marginTop: -29,
    },
    preferences: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16
    },
    dark:{
        color: 'gray',
        fontStyle: "italic",
    },
    normal:{
        color: '#444444',
        fontStyle: "italic",
    },
    exit:{
        marginBottom: 10,
        borderTopWidth: 4,
        borderTopColor: "dimgray", 
        top: 10, 
        justifyContent:"center"
    },
    exitButton:{ 
        top: 2,
        backgroundColor: '#556b2f', 
        justifyContent:"center", 
        alignItems:"center" 
    },
    exitButtonDark:{ 
        top: 2,
        backgroundColor: '#444444', 
        justifyContent:"center", 
        alignItems:"center" 
    }
});