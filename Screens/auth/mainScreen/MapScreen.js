// import MapView from "react-native-maps";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { useTranslation } from "react-i18next";

import MapView, { Marker } from "react-native-maps";

import { View, Text, Linking, TouchableOpacity } from "react-native";

// Перейти к настройкам приложения
const openSettings = () => {
  Linking.openSettings();
};

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(t("location.permission"));
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let text = "";
  let settings = null;
  if (errorMsg) {
    text = errorMsg;
    settings = (
      <TouchableOpacity onPress={openSettings}>
        <Text style={{ color: "#F8AB14" }}>{t("location.openSettings")}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* {errorMsg && (
        <View>
          <Text>{text}</Text>
          {settings}
        </View>
      )} */}
      {location && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.006,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="My Marker"
            description="Some description"
          />
        </MapView>
      )}
    </View>
  );
};

export default MapScreen;
