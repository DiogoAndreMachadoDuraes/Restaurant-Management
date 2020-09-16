import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import { Avatar} from 'react-native-paper';

export const HeaderWithAccount = (props) => {
    const theme = useTheme();
    return(
    <Header
        leftComponent={<Icon name="menu" color= '#fff' size={30} onPress={() => props.navigation.toggleDrawer()} />}
        centerComponent={<Text style={{fontSize: 24, fontWeight: 'bold', fontStyle: 'italic', color: '#fff', marginTop: -20}}>{props.nome}</Text>}
        rightComponent={
            <TouchableOpacity style={{right: 7, top:-5}} onPress={() => props.navigation.navigate("Account")}>
                <Avatar.Image source={{uri: ''+props.photo+''}} size={40}/>
            </TouchableOpacity>
        }
        containerStyle={{
            backgroundColor: "#556b2f",
            justifyContent: 'space-around',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderColor: "white",
            height: 80,
        }}
    />
)};