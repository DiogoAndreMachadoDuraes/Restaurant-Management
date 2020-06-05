import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button, ImageBackground, StatusBar, Image } from "react-native";
import {Header, Icon} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SocialIcon } from 'react-native-elements';

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class Extras extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Extras",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã Extras...");
      }
      render(){
        return (
          <View style={style.container}>
            <StatusBar hidden={false} backgroundColor={'#c6cbef'}></StatusBar>
            <Header
                leftComponent={<Icon name="menu" color= '#fff' size={30} onPress={() => this.props.navigation.toggleDrawer()}/>}
                centerComponent={<Text style={{fontSize: 25, fontWeight: 'bold', fontStyle: 'italic', color: '#fff', marginTop: -20}}>Extras</Text>}
                rightComponent={<Icon name="local-grocery-store" color= '#fff' size={30} onPress={() => this.props.navigation.navigate("Carrinho")}/>}
                containerStyle={{
                  backgroundColor: '#c6cbef',
                  justifyContent: 'space-around',
                  height: 80,
                }}
            />
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={0.5}>
              <ScrollView>
                <View style={style.extras}>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Salmao")} >
                    <Image style={style.extrasExpFoto} source={require('../assets/salmao.jpg')} ></Image>
                    <Text style={style.titleExtras}>Pratos de peixe</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Estrogonofe")}>
                    <Image style={style.extrasExpFoto} source={require('../assets/estrogonofe.jpg')} ></Image>
                    <Text style={style.titleExtras}>Pratos sem gluten e sem lactose</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Legumes")} >
                    <Image style={style.extrasExpFoto} source={require('../assets/legumesAssados.jpg')} ></Image>
                    <Text style={style.titleExtras}>Pratos vegan/vegetarianos</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("BatataFrita")} >
                    <Image style={style.extrasExpFoto} source={require('../assets/batataFrita.jpg')} ></Image>
                    <Text style={style.titleExtras}>Batatas Fritas</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Saladas")} >
                    <Image style={style.extrasExpFoto} source={require('../assets/saladaTropical.jpg')} ></Image>
                    <Text style={style.titleExtras}>Saladas</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("CaldoVerde")} >
                    <Image style={style.extrasExpFoto} source={require('../assets/caldoVerde.jpg')} ></Image>
                    <Text style={style.titleExtras}>Sopas</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("BebidasFrias")} >
                    <Image style={style.extrasExpFoto} source={require('../assets/agua.jpg')} ></Image>
                    <Text style={style.titleExtras}>Bebidas</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Extras")}>
                    <Image style={style.extrasExpFoto} source={require('../assets/geladoMorango.jpg')} ></Image>
                    <Text style={style.titleExtras}>Extras</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.extrasExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("BebidasQuentes")} >
                    <Image style={style.extrasExpFoto} source={require('../assets/cafe.jpg')} ></Image>
                    <Text style={style.titleExtras}>Bebidas Quentes</Text>
                    <Text style={style.textExtras}>À moda da Avó</Text>
                  </TouchableOpacity>
                  <View style={style.final}>
                    <Text style={style.companhiaText}>@ Sabor da Avó 2020</Text>
                    <Text style={style.direitosText}>Todos os direitos autorais.</Text>
                    <Text style={style.redesText}>Siga-nos em:</Text>
                    <SocialIcon type='facebook' style={style.facebook}/>
                    <SocialIcon light type="instagram"style={style.instagram}/>
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
        );
      }
    }
    
    const style = StyleSheet.create({
      container: {
        flex: 1,
      },
      imageBackgound: {
        flex: 1
      },
      text: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: "italic",
      },
      button: {
        width: 100,
        height: 42,
        marginTop: -100,
        backgroundColor: 'black',
        borderRadius: 10,
      },
      extras: {
        width: "100%",
        height: 3132,
      },
      extrasExp: {
        marginTop: 30,
        marginLeft: 40,
        padding: 30,
        width: 320,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      extrasExpFoto: {
        width: 180,
        height: 180,
        marginTop: 0
      },
      arrow: {
        marginTop: 45,
        marginLeft: -320
      },
      extrasExpText: {
        width: 180,
        height: 180,
        marginTop: -150,
      },
      titleExtras: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 12,
        textAlign: 'center'
      },
      textExtras: {
        color: "#000",
        fontSize: 12,
        fontStyle: "italic",
        textAlign: 'center',
        top: 20
      },
      companhiaText: {
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      direitosText: {
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      redesText: {
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
      },
      facebook: {
        marginTop: 20,
        right: -120,
      },
      instagram: {
        marginTop: -59,
        right: -200,
      },
      final: {
        backgroundColor: "#c6cbef",
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        paddingVertical: 40,
      }
    });

export default Extras;