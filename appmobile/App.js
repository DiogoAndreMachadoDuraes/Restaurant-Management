import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HelloWorld from "./screens/HelloWorld.js";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HelloWorld} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}