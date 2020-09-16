import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/* import { useTheme } from "@react-navigation/native";

const theme = useTheme(); */

export default function FinalHeader (){
  return(
    <View style={style.final}>
      <Text style={style.companyText}>@ Sabor da Avó 2020</Text>
      <Text style={style.rightsText}>Todos os direitos autorais.</Text>
      <Text style={style.socialText}>Siga-nos em:</Text>
      <FontAwesome name="facebook-official" style={style.facebook} size={30}/>            
      <FontAwesome name="instagram" style={style.instagram} size={30}/>
    </View>
  )
}

const style = StyleSheet.create({
companyText: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
    marginTop: 50,
  },

  rightsText: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },

  socialText: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
  },

  facebook: {
    textAlign: 'center',
    marginTop: 10,
    marginRight: 20,
  },

  instagram: {
    textAlign: 'center',
    marginTop: -31,
    marginRight: -50,
    marginVertical: 50,
  },

  final: {
    backgroundColor: /* theme.dark ? "#444444" : */ "#556b2f",
    justifyContent: 'center',
    marginTop: 100,
  }
});
