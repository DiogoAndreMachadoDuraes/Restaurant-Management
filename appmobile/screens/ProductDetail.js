import * as React from "react";
import { 
    Dimensions,
    StyleSheet, 
    Text, 
    View, 
    ScrollView,
    ImageBackground, 
    TouchableOpacity, 
    Image, 
    ActivityIndicator, 
    FlatList,
    AsyncStorage
} from "react-native";
import { Icon, colors } from "react-native-elements";
import OwnStatusBar from "./shared/OwnStatusBar";
import NossoFinal from "./shared/NossoFinal";
import { ProgressChart } from "react-native-chart-kit";
import Category from "./shared/Category.js";

const screenWidth = Dimensions.get("screen").width;

class ProductDetail extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Café",
            ingredient: [],
            product_extra: [],
            aller: [],
            info: [],
            isLoadingExtra: true,
            isLoadingProduct: true,
            isLoadingAller: true,
            isLoadingInfo: true,
        };
    }

    async componentDidMount(){ 
        console.log("Mounting the screen ProductDetail...");

        let token = await AsyncStorage.getItem("token");
        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Extra', { headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                this.setState({ ingredient: json, isLoadingExtra:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });

        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Produto_extra', { headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                this.setState({ product_extra: json, isLoadingProduct:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });

        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Info_nutricional', { headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                this.setState({ info: json, isLoadingInfo:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });

        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Alergenio', { headers: {Authorization: 'Bearer ' + token, Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                this.setState({ aller: json, isLoadingAller:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });
    }

    render(){
        const { ingredient, product_extra, aller, info, isLoadingInfo, isLoadingAller, isLoadingExtra, isLoadingProduct } = this.state;

        const { navigation, route } = this.props;
        const { id_produto, name, foto, description, price } = route.params;

        const products_extra = product_extra.filter(a=>a.id_produto==id_produto).map(a=>a.id_extra);
        const ingredients = ingredient.filter(a=>a.id_extra==products_extra).map(a=>a);
        const type = info.filter(a=>a.id_produto==id_produto).map(a=>a.tipo);
        const quantity = info.filter(a=>a.id_produto==id_produto).map(a=>a.quantidade_nutrientes);
        const allergenio= aller.filter(a=>a.id_produto==id_produto).map(a=>a);

        console.log(allergenio);

        const data = {
            labels: [type[0], type[1], type[2], type[3]],
            data: [(quantity[0]/2000), (quantity[1]/70), (quantity[2]/260), (quantity[3]/50)]
        };

        const chartConfig = {
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            color: (opacity=1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 1,
            barPercentage: 0.5,
            useShadowColorFromDataset: false
        };

        return (
            <View style={style.container}>
            <OwnStatusBar />
            <ImageBackground source={require("../assets/imageBackground.jpg")} opacity={0.4} style={style.imageBackground}>
            <ScrollView>
                <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.goBack()} color={"black"} size={45}/>
                </View>
                <View style={style.shop}>
                    <Icon name="local-grocery-store" onPress={()=>this.props.navigation.navigate("Shop")} color={"black"} size={40}/>
                </View>
                <View>
                    <Text style={style.title}>{name}</Text>
                    <Image source={{uri:''+foto+''}} style={style.image}/>
                    <Text style={style.text}>{description}</Text>
                </View>
                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("Shop")}>
                    <Text style={style.buttonText}>Adicionar ao carrinho</Text>
                </TouchableOpacity>

                <Text style={style.infoText}>Ingredientes</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{top: -20}}>
                    {
                        ingredients.map((item) => {
                            return (
                                <Category image={{ uri: '' + item.foto + '' }} name={item.nome}  />
                            );
                        })
                    }
                </ScrollView>

                <Text style={style.infoText}>Informação Nutricional</Text>
                {
                    isLoadingInfo ? <ActivityIndicator/> : (
                        <View style={style.chart}>
                            <ProgressChart
                                style={{marginTop: 20,marginLeft:-30}}
                                data={data}
                                width={screenWidth}
                                height={240}
                                strokeWidth={16}
                                radius={32}
                                chartConfig={chartConfig}
                                hideLegend={false}
                            />
                            <Text style={{top:20 ,color:"black", fontStyle: "italic", textAlign:"center"}}>Quantidades:</Text>
                            <Text style={{top:20 ,color:"black", textAlign:"center"}}>{type[0]}: {quantity[0]}kcal;   {type[2]}: {quantity[2]}g;</Text>
                            <Text style={{top:20 ,color:"black", textAlign:"center"}}>{type[1]}: {quantity[1]}g;   {type[3]}: {quantity[3]}g</Text>
                            <Text style={{top:40 ,color:"black", fontStyle: "italic", textAlign:"center", fontSize:12}}>A % apresentada é da dose diária de referência para um adulto médio</Text>
                            <Text style={{top:40 ,color:"black", fontStyle: "italic", textAlign:"center", fontSize:12}}>*Glícidos são conhecidos como {type[2]} ou Hidratos de Carbono</Text>
                        </View>
                    )
                }
                <Text style={style.infoText}>Alergénios</Text>
                {
                    isLoadingAller ? <ActivityIndicator/> : (
                    <FlatList
                        data={allergenio}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={style.textAller}>{item.tipo} - {item.descricao}</Text>
                            </View>
                        )}
                    />
                    )
                }
                <NossoFinal />
                </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}
    
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        flex:1,
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
        color: "#fff",
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
    },
    productDetailText: {
        height: 300
    },
    arrow: {
        backgroundColor: "white",
        left: 20,
        marginRight:350,
        marginTop: 45,
        borderRadius: 10
    },
    shop: {
        backgroundColor: "white",
        right:20,
        marginLeft: 350,
        marginTop: -45,
        borderRadius: 10
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
        marginVertical: 50
    },
    buttonText: {
        color: 'black',
        fontStyle: "italic",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    ingredientsText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        top: 50
    },
    infoText: {
        color: "#fff",
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
    },
    chart: {
        marginTop: 50,
        backgroundColor:"white",
        width: screenWidth,
        height: 400
    },
    textAller: {
        marginTop: 20,
        color: "#000",
        fontSize: 18,
        fontStyle: "italic",
        textAlign: 'center',
    },
    fotoAller: {
        width: 20,
        height: 20,
    }
});

export default ProductDetail;