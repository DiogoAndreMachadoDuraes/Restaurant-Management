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
    FlatList 
} from "react-native";
import { Icon, colors } from "react-native-elements";
import OwnStatusBar from "./shared/OwnStatusBar";
import NossoFinal from "./shared/NossoFinal";
import { ProgressChart } from "react-native-chart-kit";
import Category from "./shared/Category.js";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };

class ProductDetail extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Café",
            alergenio: [],
            info: [],
            isLoading: true,
        };
    }

    async componentDidMount(){ 
        console.log("Mounting the screen Product...");

        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Info_nutricional', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({ info: json, isLoading:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });

        await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Alergenio', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({ alergenio: json, isLoading:false });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
        });
    }

    render(){
        const { alergenio, info, isLoading } = this.state;

        const { navigation, route } = this.props;
        const { item } = route.params;

        const type = info.filter(a=>a.id_produto==item.id_produto).map(a=>a.tipo);
        const quantity = info.filter(a=>a.id_produto==item.id_produto).map(a=>a.quantidade_nutrientes);
        const allergenio= alergenio.filter(a=>a.id_produto==item.id_produto).map(a=>a);

        console.log(type);
        console.log(quantity);

        const data = {
            labels: (type),
            data: [(quantity[0]/2000), (quantity[1]/70), (quantity[2]/260), (quantity[3]/50)]
        };

        const chartConfig = {
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            color: (opacity=1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 1, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        };

        const screenWidth = Dimensions.get("screen").width;

        return (
            <View style={style.container}>
            <OwnStatusBar />
            <ImageBackground source={imageBackgound} opacity={0.4} style={style.imageBackground}>
            <ScrollView>
                <View style={style.arrow}>
                    <Icon name="keyboard-backspace" onPress={()=>this.props.navigation.goBack()} color={"darkgreen"} size={45}/>
                </View>
                <View style={style.shop}>
                    <Icon name="local-grocery-store" onPress={()=>this.props.navigation.navigate("Shop")} color={"darkgreen"} size={40}/>
                </View>
                <View>
                    <Text style={style.title}>{item.nome}</Text>
                    <Image source={{uri:''+item.foto+''}} style={style.image}/>
                    <Text style={style.text}>{item.descricao}</Text>
                </View>
                <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("Shop"), {item}}>
                    <Text style={style.buttonText}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
                <Text style={style.infoText}>Informação Nutricional</Text>
                {
                    isLoading ? <ActivityIndicator/> : (
                        <View style={style.chart}>
                            <ProgressChart
                                paddingLeft= {-15}
                                data={data}
                                width={screenWidth}
                                height={250}
                                strokeWidth={16}
                                radius={32}
                                chartConfig={chartConfig}
                                hideLegend={false}
                            />
                            <Text style={{color:"black", fontStyle: "italic", textAlign:"center"}}>*A % é da dose diária de referência para um adulto médio</Text>
                        </View>
                    )
                }
                <Text style={style.allergensText}>Alergénios</Text>
                {
                    isLoading ? <ActivityIndicator/> : (
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
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
    },
    chart: {
        top: 20,
        backgroundColor:"white"
    },
    allergensText: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: "italic",
        marginTop: 50
    },
    textAller: {
        color: "#000",
        fontSize: 18,
        fontStyle: "italic",
        textAlign: 'center',
    }
});

export default ProductDetail;