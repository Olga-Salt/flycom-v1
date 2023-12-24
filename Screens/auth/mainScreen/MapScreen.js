// // import MapView from "react-native-maps";
// import React, { useRef, useState, useEffect } from "react";
// import * as Location from "expo-location";
// import { useTranslation } from "react-i18next";

// // import MapView, { Marker } from "react-native-maps";
// const apiKey = "569135501586b9f0be645dc592e59879";
// // const apiKey = "2fed39e03b18a9e97fef349642cb2e54";

// import {
//   View,
//   Text,
//   Linking,
//   TouchableOpacity,
//   ActivityIndicator,
// } from "react-native";
// import { WebView } from "react-native-webview";
// import {
//   html_script,
//   html_script2,
//   html_script3,
//   html_script4,
// } from "../../../leafletMap/html_script.js";

// // Перейти к настройкам приложения
// const openSettings = () => {
//   Linking.openSettings();
// };

// const MapScreen = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const webViewRef = useRef(null);
//   const { t } = useTranslation();

//   const goToMyPosition = (lat, lon) => {
//     if (webViewRef.current) {
//       webViewRef.current.injectJavaScript(`
//       // map.setView([${lat}, ${lon}], 10)
//       // L.marker([${lat}, ${lon}]).addTo(mymap)

//        var marker = L.marker([${lat}, ${lon}]).addTo(map);
//        marker.bindPopup("<b>Новый маркер</b>").openPopup();

//           //  map.on('click', function(e) {
//           //   var marker = L.marker(e.latlng).addTo(map);
//           //   marker.bindPopup("<b>Новый маркер</b>").openPopup();
//           // });

//     `);
//     }
//   };

//   useEffect(() => {
//     if (webViewRef.current) {
//       console.log("webViewRef.current.injectJavaScript", webViewRef.current);
//       webViewRef.current.injectJavaScript(`
//       document.addEventListener('DOMContentLoaded', function () {
//         let map = new L.Map('map', {
//             center: new L.LatLng(46.47901, 30.20948),
//             zoom: 19,
//             layers: [
//                 new L.TileLayer(
//                         'https://tms{s}.visicom.ua/2.0.0/planet3/base_ru/{z}/{x}/{y}.png?key=${apiKey}',
//                         {
//                             maxZoom: 19,
//                             tms: true,
//                             attribution: 'Данные карт © 2019 ЧАО «Визиком»',
//                             subdomains: '123'
//                         }
//                 )
//             ]
//         });

//         // Добавление обработчика событий клика на карту
//         map.on('click', function(e) {
//           // Вызов функции handleMapClick в React коде
//           window.ReactNativeWebView.postMessage(JSON.stringify(e.latlng));
//         });
//       });
//     `);
//     }
//   }, [webViewRef]);

//   const onMessage = (event) => {
//     const latlng = JSON.parse(event.nativeEvent.data);
//     handleMapClick(latlng);
//     console.log("hvjhvjvjh");
//   };

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg(t("location.permission"));
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords);
//     })();
//   }, []);

//   let text = "";
//   let settings = null;
//   if (errorMsg) {
//     text = errorMsg;
//     settings = (
//       <TouchableOpacity onPress={openSettings}>
//         <Text style={{ color: "#F8AB14" }}>{t("location.openSettings")}</Text>
//       </TouchableOpacity>
//     );
//   }

//   // if (!location) {
//   //   return <ActivityIndicator size="large" color="#0000ff" />;
//   // }

//   return (
//     <View style={{ flex: 1 }}>
//       <WebView
//         ref={webViewRef}
//         style={{ flex: 2 }}
//         originWhitelist={["*"]}
//         source={{
//           html: html_script3,
//           // uri: "https://maps.visicom.ua/c/6.21758,50.76687,12?lang=ru",
//         }}
//       />

//       {/* {errorMsg && (
//         <View>
//           <Text>{text}</Text>
//           {settings}
//         </View>
//       )} */}
//       {/* {location && (
//         <MapView
//           style={{ flex: 1 }}
//           initialRegion={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.001,
//             longitudeDelta: 0.006,
//           }}
//         >
//           <Marker
//             coordinate={{
//               latitude: location.latitude,
//               longitude: location.longitude,
//             }}
//             title="My Marker"
//             description="Some description"
//           />
//         </MapView>
//       )} */}
//       {/* <TouchableOpacity onPress={goToMyPosition(50.46537, 30.48019)}>
//         <Text> dgsd</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// export default MapScreen;

import React, { useRef, useState, useEffect } from "react";
import * as Location from "expo-location";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { FontAwesome } from "@expo/vector-icons";

import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Platform,
} from "react-native";

import {
  html_script,
  html_script2,
  html_script3,
  html_script4,
  html_script5,
} from "../../../leafletMap/html_script.js";

import { styles } from "../styles";

// Перейти к настройкам приложения
const openSettings = () => {
  Linking.openSettings();
};

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [webViewReady, setWebViewReady] = useState(false);

  const webViewRef = useRef(null);
  const { t } = useTranslation();

  const onMapLoaded = () => {
    setMapReady(true);
    // createMarker1("Мой дом", "Какое-то описание");
  };

  // useEffect(() => {}, [webViewRef]);

  // const handleMapClick = (latlng) => {
  //   // Add your logic to handle the map click event and add markers
  //   console.log("Map clicked at:", latlng);
  // };

  // const onMessage = (event) => {
  //   const { data } = event.nativeEvent;
  //   const message = JSON.parse(data);

  //   switch (message.type) {
  //     case "saveData":
  //       setMarkers((prevMarkers) => [...prevMarkers, message.data]);
  //       console.log(markers);
  //       break;
  //     case "removeMarker":
  //       setMarkers((prevMarkers) =>
  //         prevMarkers.filter((marker) => marker.id !== message.data.id)
  //       );
  //       break;
  //   }
  // };

  const addMarker = (latitude, longitude, title, description) => {
    var id = Math.random().toString(36).substr(2, 9);
    const script = `
    var markers = {};
   
      var marker = L.marker([${latitude}, ${longitude}]).addTo(map);
      marker.bindPopup('<b>${title}</b><br><form id="form"><label for="name">ФИО клиента:</label><br><input type="text" id="name" name="name"><br><label for="address">Адрес:</label><br><input type="text" id="address" name="address"><br><label for="phone">Номер телефона:</label><br><input type="text" id="phone" name="phone"><br><input type="button" value="Сохранить" onclick="saveData(${id})"><input type="button" value="Удалить маркер" onclick="removeMarker(${id})"></form>').openPopup();
    `;
    webViewRef.current.injectJavaScript(script);
  };
  const createMarker = (title, description) => {
    var id = Math.random().toString(36).substr(2, 9);
    const script = `
    var markers = {};

       window.saveData = function() {
      var name = document.getElementById('name').value;
      var address = document.getElementById('address').value;
      var phone = document.getElementById('phone').value;
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'saveData',
        data: { id, name, address, phone }
      }));
    }

     map.on('click', function(e) {
      var marker = L.marker(e.latlng).addTo(map);
      marker.bindPopup('<b>${title}</b><br><form id="form"><label for="name">ФИО клиента:</label><br><input type="text" id="name" name="name"><br><label for="address">Адрес:</label><br><input type="text" id="address" name="address"><br><label for="phone">Номер телефона:</label><br><input type="text" id="phone" name="phone"><br><input type="button" value="Сохранить" onclick="saveData(${id})"><input type="button" value="Удалить маркер" onclick="removeMarker(${id})"></form>').openPopup();
    });

   
    `;
    webViewRef.current.injectJavaScript(script);
  };

  // Function to remove all markers from the map
  const removeMarkers = () => {
    const script = `
      map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });
    `;
    webViewRef.current.injectJavaScript(script);
  };

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg(t("location.permission"));
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location.coords);

  //     //   console.log("map:", window.map);
  //     // console.log("location", ${location.coords.latitude}, ${location.coords.longitude});

  //     //     if (mapReady) {
  //     //       const script = `
  //     //   (function() {
  //     //     window.map.setView([${location.coords.latitude}, ${location.coords.longitude}], 16);
  //     //     return true;
  //     //   })();
  //     // `;
  //     //       setTimeout(() => {
  //     //         webViewRef.current.injectJavaScript(script);
  //     //       }, 1000); // Задержка в 1 секунду
  //     //     }
  //     // console.log("location", location.coords);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(t("location.permission"));
        return;
      }

      let locationWatcher = await Location.watchPositionAsync(
        {},
        (location) => {
          setLocation(location.coords);
        }
      );

      // Остановите слежение за местоположением, когда компонент размонтируется
      return () => {
        locationWatcher.remove();
      };
    })();
  }, []);

  const createMarker1 = (title, description) => {
    if (location) {
      console.log("location", location.latitude, location.longitude);
      const script = `
      
   map.setView([${location.latitude}, ${location.longitude}], 16);
    `;
      webViewRef.current.injectJavaScript(script);
    }
  };

  // useEffect(() => {
  //   if (webViewReady && mapReady && location) {
  //     const script = `
  //     (function() {
  //       window.map.setView([${location.latitude}, ${location.longitude}], 16);
  //       return true;
  //     })();
  //   `;
  //     webViewRef.current.injectJavaScript(script);
  //   }
  // }, [webViewReady, mapReady]);

  // useEffect(() => {
  //   if (mapReady) {
  //     // addMarker(46.48464, 30.19752, "Мой дом", "Какое-то описание");
  //     createMarker("Мой дом", "Какое-то описание");
  //   }
  // }, [mapReady]);

  // useEffect(() => {
  //   console.log("webViewReady:", webViewReady);
  //   console.log("mapReady:", mapReady);
  //   console.log("location:", location);
  //   if (webViewReady && mapReady && location) {
  //     console.log("Отправка координат:", location);
  //     setTimeout(() => {
  //       webViewRef.current.postMessage(JSON.stringify(location));
  //     }, 1000); // Задержка в 1 секунду
  //   }
  // }, [webViewReady, mapReady, location]);

  useEffect(() => {
    if (webViewReady && mapReady && location) {
      console.log("Отправка координат:", location);

      let message = t("map.yourLocation");

      // if (Platform.OS === "android") {
      setTimeout(() => {
        webViewRef.current.injectJavaScript(
          `findLocation(${location.latitude}, ${location.longitude}, '${message}') 
          true;`
        );
      }, 1000); // Задержка в 1 секунду
      // }
    }
  }, [webViewReady, mapReady, location]);

  async function updateLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg(t("location.permission"));
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  }

  let text = "";
  if (errorMsg) {
    text = errorMsg;
    settings = (
      <TouchableOpacity onPress={openSettings}>
        <Text>{text}</Text>
        <Text style={{ color: "#F8AB14" }}>{t("location.openSettings")}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        // style={{ flex: 1 }}
        // style={{ backgroundColor: "fff" }}
        originWhitelist={["*"]}
        source={{
          html: html_script5,
          // html: "<h1>Hello, world!</h1>",
        }}
        // onLoad={onMapLoaded}
        // onMessage={onMessage}
        // onLoad={() => setWebViewReady(true)}
        onLoadEnd={() => setWebViewReady(true)}
        onMessage={(event) => {
          // Обработка сообщений от WebView
          const { data } = event.nativeEvent;
          if (data === "MAP_READY") {
            setMapReady(true);
          }
        }}
      />
      <TouchableOpacity onPress={updateLocation} style={styles.btnLocation}>
        <FontAwesome name="location-arrow" size={24} color="#4899de" />
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
