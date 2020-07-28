import * as React from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList, AsyncStorage} from 'react-native';
import { Input } from 'react-native-elements';
import BarraEstados from "./shared/BarraEstados.js";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const imageBackgound = { uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg" };


class Account extends React.Component {
    constructor(){
        super();
        this.state={
          name:"Editar Conta",
          user: [],
          isLoading: true,
        };
      }
     async componentDidMount(){ 
        console.log("Mounting the screen Account...");

        await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Utilizador', { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.setState({ data: json, isLoading:false });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

        /*function imagePickerCallback(data) {
          if (data.didCancel) {
            return;
          }
      
          if (data.error) {
            return;
          }
      
          if (data.customButton) {
            return;
          }
      
          if (!data.uri) {
            return;
          }
      
          setAvatar(data);
        }
      
        async function uploadImage() {
          const data = new FormData();
      
          data.append('avatar', {
            fileName: avatar.fileName,
            uri: avatar.uri,
            type: avatar.type,
          });
      
          await Axios.post('http://localhost:3333/files', data);*/
      }
      getUser = async () => {
        try {
          const value = await AsyncStorage.getItem("User");
          if (value !== null) {
            this.setState({ user: JSON.parse(value) });
            console.log(this.state.user);
          }
        } catch (e) {
            console.log("Error rending user: " + e);
        }
      }
    

    render()
    { 
      const { user, isLoading } = this.state;
      {
        this.getUser();
      }
        return (
             /*<View style={style.container}>
                  <Image
                    source={{
                      uri: avatar
                        ? avatar.uri
                        : 'https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png',
                    }}
                    style={style.avatar}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback)
                    }>
                    <Text style={style.buttonText}>Escolher imagem</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={uploadImage}>
                    <Text style={style.buttonText}>Enviar imagem</Text>
                  </TouchableOpacity>
                </View>*/

            <View style={style.container}>
            <BarraEstados />
            <ScrollView>
            <View style={style.form}>
            <ImageBackground source={imageBackgound} style={style.imageBackgound} opacity={1}>
                  <View style={style.CategoriaProduto}>
                    {
                      isLoading ? <ActivityIndicator/> : (
                        <FlatList
                          data={user}
                          keyExtractor={({ id }, index) => id}
                          renderItem={({ item }) => (
                              <TouchableOpacity style={style.ContaExp} activeOpacity={0.5} onPress={()=>this.props.navigation.navigate("Login", {item})}>
                                <Image style={style.ContaExpFoto} source={item.foto} ></Image>
                                
                                <Text style={style.header}>A minha conta</Text>

                                  <Text style={style.text}>Nome Completo:</Text>
                                  <Text style={style.text}>{item.nome}</Text>

                                  <Text style={style.text}>Email:</Text>
                                  <Text style={style.text}>{item.email}</Text>

                                      
                                  <Text style={style.text}>Telefone:</Text>
                                  <Text style={style.text}>{item.telefone}</Text>


                                  <Text style={style.text}>Morada:</Text>
                                  <Text style={style.text}>{item.morada}</Text>
   
          
                              </TouchableOpacity>
                          )}
                          />
                      )
                }
                
            </View>
            <TouchableOpacity style={style.button} onPress={() => this.props.navigation.navigate("EditAccount")}>
                    <Text style={style.btnText}>Editar Conta</Text>
                      <Icon style={style.pencil} name="pencil" color={'red'} size={28}/>
                </TouchableOpacity>
            </ImageBackground>  
            </View>
            </ScrollView>
            </View>
          );
          }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    imageBackgound: {                         //foto por tras do titulo
        width: 420,
        height: 800,
        opacity: 0.9,
      },

    pencil: {
        top: 10,
        left: 0
    },

    inputcolor:{
        color: "white",
      },

    menu: {                           //scrollview
        width: "800%",
        height: 1000,
    },

    form:{
       alignSelf:'stretch',
    },

    header:{
        fontSize: 25,
        color: '#fff',
        marginLeft: 110,
        top: 60,
        paddingBottom:60,
        marginBottom:60,
        borderBottomColor: 'black',
    },

    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:4,
        backgroundColor:'white',
        marginTop: 130,
        width:150,
        left: 130,
        top: 20,
    },

    btnText:{
        color:'red',
        fontWeight:'bold',
        fontSize: 20,
        top: -3,
        left: 10
    },
    
    textInput:{
        alignSelf:'stretch',
        height:40,
        color: 'white',
        marginBottom: 10,
        borderBottomColor:'white',
        borderBottomWidth:1,
    },

    email:{
        color: 'white',
    },

   image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        left: 20,
    }

  });

  export default Account;