import * as React from "react";
import { StatusBar} from "react-native";
import { useTheme } from "@react-navigation/native";

export default function OwnStatusBar(){

    const theme = useTheme();

    return(
        <StatusBar hidden={false} barStyle={ theme.dark ? "light-content" : "dark-content"} backgroundColor={ theme.dark ? "black" : "white"} />
    );
}