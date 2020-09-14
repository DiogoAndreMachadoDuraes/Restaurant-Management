import * as React from "react";
import { StyleSheet, Text, View, ScrollView,  TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { StackedBarChart } from 'react-native-svg-charts';

import Categoria from "./shared/Categoria.js";
import BarraEstados from "./shared/BarraEstados.js";
import NossoFinal from "./shared/NossoFinal.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };
const alface = { uri: "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=NGNl88jzGknot26JMojOuazXgJK7LxXKMWes/sScQk5fBN0SWv2+xq8Og5AdjwcYXZJl2CwN0AY5Ofv1E2o6thyTdQ==" };
const tomate = { uri: "https://img.freepik.com/fotos-gratis/um-tomate-vermelho-fresco-isolado-no-branco_1205-548.jpg?size=626&ext=jpg" };
const cenoura = { uri: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/06/06/folhas-cenoura.jpg" };
const azeitonas = { uri: "https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/a/azeitonas-em-conserva-022017-1400x800.jpg" };
const manga = { uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2018/04/manga-1280x720.jpg" };
const ananás = { uri: "https://www.mariahelena.pt/img/uploads/700x448_3adf9e6c60bde2a1fe132ba035ff9b3e.jpg" };

class SaladaTropical extends React.Component{
    constructor(){
        super();
        this.state={
          name:"Salada Tropical",
        };
      }
      componentDidMount(){ 
        console.log("Montando o ecrã SaladaTropical...");
      }
      render(){
       /* const data = [
          {
              month: new Date(2015, 0, 1),
              apples: 3840,
              bananas: 1920,
              cherries: 960,
              dates: 400,
              oranges: 400,
          },
          {
              month: new Date(2015, 1, 1),
              apples: 1600,
              bananas: 1440,
              cherries: 960,
              dates: 400,
          },
          {
              month: new Date(2015, 2, 1),
              apples: 640,
              bananas: 960,
              cherries: 3640,
              dates: 400,
          },
          {
              month: new Date(2015, 3, 1),
              apples: 3320,
              bananas: 480,
              cherries: 640,
              dates: 400,
          },
      ]

      const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
      const keys = ['apples', 'bananas', 'cherries', 'dates']
*/
        return (
          <View style={style.container}>
            <BarraEstados />
            <ScrollView>
                <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.navigate("Saladas")} size={45}/>
                </View>
                <View style={style.shop}>
                    <Icon name="local-grocery-store" onPress={()=>this.props.navigation.navigate("Carrinho")} size={40}/>
                </View>
                <Text style={style.title}>{this.state.name}</Text>
                <Image source={require('../assets/saladaTropical.jpg')} style={style.image} opacity={0.8}/>
                <Text style={style.text}>Com um toque tropical e uma mistura de sabores, eleva o nosso patamar de excelência. Deixe-se surpreender.</Text>
                <TouchableOpacity style={style.button} /*onPress={() => this.props.navigation.navigate("Register")}*/>
                  <Text style={style.buttonText}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
               {/* <StackedBarChart
                style={{ height: 200 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                contentInset={{ top: 30, bottom: 30 }}
            /> */}
              <Text style={style.ingredientesText}>Ingredientes</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Categoria image={alface} name="Alface"  />
                <Categoria image={tomate} name="Tomate" />
                <Categoria image={cenoura} name="Cenoura" />
                <Categoria image={azeitonas} name="Azeitonas" />
                <Categoria image={manga} name="Manga" />
                <Categoria image={ananás} name="Ananás" />
              </ScrollView>
              <Text style={style.infoText}>Informação Nutricional</Text>
              <Text style={style.alergeniosText}>Alergenios</Text>
              <Text style={style.alergenioText}>Não contém alergenios.</Text>
              <NossoFinal />
            </ScrollView>
          </View>
        );
      }
    }
    
    const style = StyleSheet.create({
      container: {
        flex: 1,
      },
      imageBackground: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      image: {
        width: 300,
        height: 300,
        marginTop: 80,
        marginLeft: 50
      },
      imageScroll: {
        width: 100,
        height: 100,
        marginTop: 80,
        marginLeft: 50
      },
      title: {
        color: "#000",
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
      },
      saladaTropicalText: {
       height: 300
      },
      arrow: {
        marginRight: 300,
        marginTop: 45
      },
      shop: {
        marginLeft: 300,
        marginTop: -40,
        color: "white"
      },
      text: {
        color: "#000",
        fontSize: 18,
        fontStyle: "italic",
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
      },
      button: {
        marginLeft: 40,
        width: 320,
        height: 50,
        marginTop: 25,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'black',
        fontStyle: "italic",
        textAlign: 'center',
        fontWeight: 'bold'
      },
      ingredientesText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
      },
      infoText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
      },
      alergeniosText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
      },
      alergenioText: {
        color: "#000",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20
      }
    });

export default SaladaTropical;