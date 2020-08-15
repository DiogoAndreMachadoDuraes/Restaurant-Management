import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Category = (props)=>(
        <View style={style.container}>
            <View style={style.imageScroll}>
                <Image source={props.image} style={style.image}/>
            </View>
            <View style={style.textScroll}>
                <Text>{props.name}</Text>
            </View>
        </View>
);

const style = StyleSheet.create({
    container: {
        height: 140,
        width: 140,
        marginLeft:20,
        borderWidth: 0.5,
        borderColor: "#dddddd",
        marginTop: 80
    },
    textScroll: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 45,
        textAlign: 'center'
    },
    imageScroll: {
      flex: 2
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
    }
});

export default Category;