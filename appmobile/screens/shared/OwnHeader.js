import * as React from "react";
import {Text} from "react-native";
import {Header, Icon} from "react-native-elements";
import { useTheme } from "@react-navigation/native";

export const OwnHeader = (props) => {
    const theme = useTheme();
    return(
    <Header
        leftComponent={<Icon name="menu" color= '#fff' size={30} onPress={() => props.navigation.toggleDrawer()} />}
        centerComponent={<Text style={{fontSize: 24, fontWeight: 'bold', fontStyle: 'italic', color: "white", marginTop: -20}}>{props.nome}</Text>}
        rightComponent={<Icon name="local-grocery-store" color= '#fff' size={30} onPress={() => props.navigation.navigate("Shop")} />}
        containerStyle={{
            backgroundColor: theme.dark ? "#444444" : "#556b2f",
            justifyContent: 'space-around',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderColor: "white",
            height: 80,
        }}
    />
)};