import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import { SocialIcon } from 'react-native-elements';


export default function NossoFinal (){
  return(
    <View style={style.final}>
         <Text style={style.companhiaText}>@ Sabor da Avó 2020</Text>
         <Text style={style.direitosText}>Todos os direitos autorais.</Text>
         <Text style={style.redesText}>Siga-nos em:</Text>
         <SocialIcon type='facebook' style={style.facebook}/>
         <SocialIcon type="instagram"style={style.instagram}/>
    </View>
  )
}

const style = StyleSheet.create({
companhiaText: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
    marginTop: 50
  },

  direitosText: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20
  },

  redesText: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20
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
    backgroundColor: "#556b2f",
    justifyContent: 'center',
    marginTop: 100
  }
});
