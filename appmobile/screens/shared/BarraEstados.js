import * as React from "react";
import { StatusBar} from "react-native";

export default function BarraEstados(){
    return(
        <StatusBar hidden={false} barStyle={"dark-content"} backgroundColor={'black'} />
    );
}