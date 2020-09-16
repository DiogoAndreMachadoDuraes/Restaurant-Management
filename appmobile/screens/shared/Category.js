import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Category = (props)=>(
        <View style={style.container}>
            <View style={style.imageScroll}>
                <Image source={props.image} style={style.image}/>
            </View>
            <View style={style.textScroll}>
                <Text>{props.name} - {props.description}</Text>
            </View>
        </View>
);

const style = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        marginLeft:20,
        borderWidth: 0.5,
        borderColor: "#dddddd",
        marginTop: 80,
        backgroundColor: "white"
    },
    textScroll: {
        flex: 3,
        left:20,
        paddingTop: 10,
        paddingLeft: 15,
        textAlign: 'center',
    },
    imageScroll: {
      flex: 7
    },
    image: {
      flex: 1,
      width: 200,
      height: 200,
      resizeMode: 'cover'
    }
});

export default Category;