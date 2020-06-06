import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";

class Imagem extends React.Component {
  const [avatar, setAvatar] = useState();

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append("avatar", {
      uri: avatar.uri,
      type: avatar.type
    });

    await Axios.post("http://localhost:3333/files", data);
  }

  return (
    <View style={style.container}>
      <Image
        source={{
          uri: avatar
            ? avatar.uri: "https://i.pinimg.com/originals/c8/cf/cb/c8cfcba6a515d39053198fd85fc79931.jpg"
        }}
        style={style.avatar}
      />
      <TouchableOpacity style={style.button} onPress={imagePickerCall}>
        <Text style={style.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={uploadImage}>
        <Text style={style.buttonText}>Enviar imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

export default Imagem;