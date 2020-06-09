import React from "react";
import {StyleSheet, View, ImageBackground } from "react-native";
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
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
import { color } from "react-native-reanimated";

const avatar = { uri: "https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png" };

export function DrawerContent(props){
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <ImageBackground source={require('../assets/fundodrawer.jpg')} style={{flexDirection:'row', marginTop:-10, marginLeft:-20, padding:40}}>
                            <View style={{flexDirection:'row',marginTop: 15}}>
                                <TouchableRipple>
                                <Avatar.Image 
                                    source={avatar}
                                    size={100}
                                    style={{marginLeft: -20, marginTop: -10}}
                                />
                                </TouchableRipple>
                                <View style={{marginLeft:18, flexDirection:'column', marginTop:18}}>
                                    <Title style={styles.title}>José Silva</Title>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Página Inicial"
                            onPress={() => {props.navigation.navigate('Home')}}
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
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="food-fork-drink" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Extras"
                            onPress={() => {props.navigation.navigate('Extras')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ballot-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Reservas"
                            onPress={() => {props.navigation.navigate('Reservas')}}
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
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Conta">
                        <TouchableRipple>
                            <View style={styles.drawerSection}>
                                <DrawerItem 
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="account-outline" 
                                        color={color}
                                        size={size}
                                        />
                                    )}
                                    label="Prefil"
                                    onPress={() => {props.navigation.navigate('Login')}}
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
                                />
                                <DrawerItem 
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="account-check-outline" 
                                        color={color}
                                        size={size}
                                        />
                                    )}
                                    label="Suporte"
                                />
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                    <Drawer.Section title="Preferencias">
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch />
                                    </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sair da conta"
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 20,
      marginTop: 3,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: '#fff'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'green',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16
    },
  });