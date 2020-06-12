import React from "react";
import {StyleSheet, View, ImageBackground } from "react-native";
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

const avatar = { uri: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png" };

export function DrawerContent(props){

    const [ isDark, setTheme]= React.useState(false);
    const toggleTheme = () => {
        setTheme(!isDark);
    }

    return (
        <View style={style.container}>
            <DrawerContentScrollView {...props}>
                <View style={style.menuIniciar}>
                    <View style={style.infoEmpresa}>
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
                            labelStyle={style.title}
                            activeBackgroundColor= "#556b2f"
                            activeTintColor= "#fff"
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
                            onPress={() => {props.navigation.navigate('Restaurantes')}}
                            labelStyle={style.title}
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
                            labelStyle={style.title}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="food-fork-drink" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Produtos"
                            onPress={() => {props.navigation.navigate('Extras')}}
                            labelStyle={style.title}
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
                            onPress={() => {props.navigation.navigate('Reserva')}}
                            labelStyle={style.title}
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
                            labelStyle={style.title}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferencias">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={style.preferencias}>
                                <Text style={style.title}>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDark}/>
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
                                        source={avatar}
                                        size={size}
                                        />
                                    )}
                                    label="Perfil"
                                    onPress={() => {props.navigation.navigate('Login')}}
                                    labelStyle={style.title}
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
                                    labelStyle={style.title}
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
                                    labelStyle={style.title}
                                />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={{borderTopWidth: 0.5, borderTopColor: "black", top: 10}}>
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
                    style={{ backgroundColor: '#556b2f' }}
                />
            </Drawer.Section>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    menuIniciar: {
        flex: 1
    },
    infoEmpresa: {
        top: -30, 
        paddingVertical: 40, 
        backgroundColor: "#556b2f"
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
        marginTop: -15,
    },
    preferencias: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16
    },
    title:{
        color: '#556b2f',
        fontStyle: "italic",
    }
  });