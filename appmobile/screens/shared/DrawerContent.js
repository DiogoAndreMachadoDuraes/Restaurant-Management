import React, { useEffect, useState }  from "react";
import {StyleSheet, View, ImageBackground, AsyncStorage, FlatList, ActivityIndicator } from "react-native";
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

export function DrawerContent(props){

    /* const [ isDark, setTheme]= React.useState(false);
    const toggleTheme = () => {
        setTheme(!isDark);
    } */

    /* const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]); */

    /* useEffect(() => {
        fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Utilizador', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []); */

    const [nome, setNome, foto, setFoto]=useState();

    useEffect(() => {
        getNome();
        getFoto();
    }, []);
    
    const getNome = async () => {
        let nome = '';
        try {
            nome = await AsyncStorage.getItem("Nome") || 'none';
            if (nome !== null) {
                console.log(nome);
                setNome(nome);
            }
        } catch (e) {
            // error reading nome
        }
    };

    const getFoto = async () => {
        let foto = '';
        try {
            foto = await AsyncStorage.getItem("Foto") || 'none';
            if (foto !== null) {
                console.log(foto);
                setFoto(foto);
            }
        } catch (e) {
            // error reading foto
        }
    };

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
                            onPress={() => {props.navigation.navigate('Restaurantes')}}
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
                            onPress={() => {props.navigation.navigate('Ementa')}}
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
                            onPress={() => {props.navigation.navigate('Produto')}}
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
                            onPress={() => {props.navigation.navigate('Reserva')}}
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
                    <Drawer.Section title="Preferencias">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={style.preferencias}>
                                <Text style={style.dark}>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        {/*<Switch foto={isDark}/> */}
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
                                    source={{uri:''+ getFoto +''}}
                                    size={size}
                                    />
                                )}
                                label={getNome}
                                onPress={() => {props.navigation.navigate('Conta')}}
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
                                    labelStyle={style.dark}
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
                    onPress={() => {
                        AsyncStorage.clear();
                        props.navigation.navigate('Login');
                    }}
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
        marginTop: -24,
    },
    preferencias: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16
    },
    dark:{
        color: '#556b2f',
        fontStyle: "italic",
    },
    dark:{
        color: 'dimgray',
        fontStyle: "italic",
    }
  });