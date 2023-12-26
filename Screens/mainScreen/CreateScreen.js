import { MaterialIcons } from "@expo/vector-icons";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Camera } from "expo-camera";

const CreateScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Нет доступа к камере</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Разрешить</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Нужно разрешение для использования камеры
        </Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Разрешить</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

  const sendPhoto = () => {
    navigation.navigate("Мои задачи", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image source={{ uri: photo }} />
          </View>
        )}
        <TouchableOpacity
          style={styles.makePhotoBtnWrapper}
          onPress={takePhoto}
        >
          <MaterialIcons name="photo-camera" size={20} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
      <Text>Загрузите фото</Text>
      <TextInput>Название...</TextInput>
      <TextInput>Местность...</TextInput>
      <TouchableOpacity onPress={sendPhoto}>
        <Text>Опубликовать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  camera: {
    // height: 240,
    height: "50%",
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  makePhotoBtnWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
});

export default CreateScreen;
