import * as React from "react";
import {Text} from "react-native";
import {Header, Icon} from "react-native-elements";
import {NavigationContainer, navigation} from "@react-navigation/native";

export default class NossoHeader extends React.Component{
    render(){
        return(
            <Header
                leftComponent={<Icon name="menu" color= '#fff' size={30} onPress={() => this.props.navigation.toggleDrawer()}/>}
                centerComponent={<Text style={{fontSize: 25, fontWeight: 'bold', fontStyle: 'italic', color: '#fff', marginTop: -20}}>{this.props.name}</Text>}
                rightComponent={<Icon name="local-grocery-store" color= '#fff' size={30} onPress={() => this.props.navigation.navigate("Carrinho")}/>}
                containerStyle={{
                  backgroundColor: '#c6cbef',
                  justifyContent: 'space-around',
                  height: 80,
                }}
            />
        )
    }
}