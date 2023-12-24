import { VISICOM_TILES_KEY, VISICOM_API_KEY } from "@env";
import { useTranslation } from "react-i18next";

const html_script = `

<!DOCTYPE html>
<html>
<head>
	
	<title>Quick Start - Leaflet</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="initial-scale=1.0">
	
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>

	<style>
		html, body {
			height: 100%;
			margin: 0;
		}
		.leaflet-container {
			height: 400px;
			width: 600px;
			max-width: 100%;
			max-height: 100%;
		}

        #visicom-autocomplete {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 1000;
        }
	</style>
	
</head>
<body style="padding: 0; margin: 0">



<div id="map" style="width: 100%; height: 100vh;"></div>
<script>
	

    document.addEventListener('DOMContentLoaded', function () {
            var map = new L.Map('map', {
                center: new L.LatLng(46.47901, 30.20948),
                zoom: 16,
                layers: [
                    new L.TileLayer('https://tms{s}.visicom.ua/2.0.0/planet3/base/{z}/{x}/{y}.png?key=${VISICOM_TILES_KEY}', {
                        attribution: 'Дані карт © АТ «<a href="https://api.visicom.ua/">Візіком</a>»',
                        maxZoom: 19,
                        subdomains: '123',
                        tms: true
                    })
                ]
            });
        });

</script>



</body>
</html>

`;

const html_script2 = `
<!DOCTYPE html>
<html lang="uk">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css">
        <link rel="stylesheet"
              href="https://api.visicom.ua/apps/visicom-autocomplete.min.css">
             
              <style>
		html, body {
			height: 100%;
			margin: 0;
		}
		.leaflet-container {
			height: 400px;
			width: 600px;
			max-width: 100%;
			max-height: 100%;
		}

        #visicom-autocomplete {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 1000;
        }
	</style>
    </head>
    <body>

        <div id="visicom-autocomplete">
            <a href="https://api.visicom.ua/" target="_blank">© Visicom</a>
        </div>
        <div id="map" style="width: 100%; height: 100vh;"></div>

    </body>
		<script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>
    <script type="text/javascript"
    src="https://api.visicom.ua/apps/visicom-autocomplete.min.js"></script>
    <script>

    document.addEventListener('DOMContentLoaded', function () {
        let map = new L.Map('map', {
            center: new L.LatLng(46.47901, 30.20948),
            zoom: 19,
            layers: [
                new L.TileLayer(
                        'https://tms{s}.visicom.ua/2.0.0/planet3/base_ru/{z}/{x}/{y}.png?key=${VISICOM_TILES_KEY}',
                        {
                            maxZoom: 19,
                            tms: true,
                            attribution: 'Данные карт © 2019 ЧАО «Визиком»',
                            subdomains: '123'
                        }
                )
            ]
        });

        let ac = new visicomAutoComplete({
            selector: '#visicom-autocomplete',
            apiKey: '${VISICOM_API_KEY}',
            placeholder: 'Search your places...',
            minChars: 3,
            delay: 150,
            width: '100%',
            height: '85px',
            map: map,
            suggestsLimit: 5,
            includeCategories : [],
            excludeCategories : [],  	
            maxCharsInSuggest: 55,
            lang: 'local',
            onSuggestSelected: suggest =>
                console.log('Suggest selected: ' + (suggest.html)),
            customFeatures: [{
                    html: 'наша фирма',
                    keywords: 'киев вербицкого наша фирма',
                    coords: [50, 30],
                },
                {
                    html: 'тестовый вариант',
                    keywords: 'чернигов шевченко 23',
                    coords: [50.46537, 30.48019],
                }],
        });
    });
    </script>
</html>
`;

const html_script3 = `
const { t } = useTranslation();

 <!DOCTYPE html>
<html lang="uk">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0" />

    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
    />
    <link
      rel="stylesheet"
      href="https://api.visicom.ua/apps/visicom-autocomplete.min.css"
    />

    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
      .leaflet-container {
        max-width: 100%;
        max-height: 100%;
      }

      #visicom-autocomplete {
        position: absolute;
        top: 10px;
        right: 0;
        z-index: 99999;
      }
    </style>
  </head>

  <body>
    <div id="visicom-autocomplete">
      <a href="https://api.visicom.ua/" target="_blank">© Visicom</a>
    </div>
    <div id="map" style="width: 100%; height: 100vh"></div>

    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>
    <script
      type="text/javascript"
      src="https://api.visicom.ua/apps/visicom-autocomplete.min.js"
    ></script>

    <script>
      //  document.addEventListener('DOMContentLoaded', function () {
      var markers = {};

      window.addEventListener("message", function (event) {
        var location = JSON.parse(event.data);
        if (window.map) {
          window.map.setView([location.latitude, location.longitude], 16);
        } else {
          console.log("Карта еще не готова");
        }
      });

      var marker;
      var map = L.map("map").setView([46.48464, 30.19768], 19);
      marker = L.marker([46.48464, 30.19768]).addTo(map);
      marker.bindPopup("Это мой маркер!");


      L.tileLayer(
        "http://tms{s}.visicom.ua/2.0.0/planet3/base_ru/{z}/{x}/{y}.png?key=${VISICOM_TILES_KEY}",
        {
          maxZoom: 19,
          tms: true,
          attribution: "Данные карт © 2019 ЧАО «Визиком»",
          subdomains: "123",
        }
      ).addTo(map);

      window.map = map;
      window.ReactNativeWebView.postMessage("MAP_READY");

        function findLocation(lat, lng) {
            map.setView([lat, lng], map.getZoom());
            marker.setLatLng([lat, lng]);
         }

      // это рабочий внизу, вверху тоже но тестовый
      // let map = new L.Map('map', {
      //     center: new L.LatLng(46.48464, 30.19752),
      //     zoom: 19,
      //     layers: [
      //         new L.TileLayer(
      //                 'https://tms{s}.visicom.ua/2.0.0/planet3/base_ru/{z}/{x}/{y}.png?key=${VISICOM_TILES_KEY}',
      //                 {
      //                     maxZoom: 19,
      //                     tms: true,
      //                     attribution: 'Данные карт © 2019 ЧАО «Визиком»',
      //                     subdomains: '123'
      //                 }
      //         )
      //     ]

      // });

      //  let marker = L.marker([46.48464, 30.19752]).addTo(map);
      //  marker.bindPopup("Это мой маркер!");

      //  var popup = L.popup();

      //     function onMapClick(e) {
      //         popup
      //             .setLatLng(e.latlng)
      //             .setContent("You clicked the map at " + e.latlng.toString())
      //             .openOn(map);
      //     }

      //     map.on('click', onMapClick);

      // Добавление маркера на карту при клике
        map.on('click', function(e) {
          var marker = L.marker(e.latlng).addTo(map);
          marker.bindPopup("<b>Новый маркер</b>").openPopup();
        });

      let ac = new visicomAutoComplete({
        selector: "#visicom-autocomplete",
        apiKey: "${VISICOM_API_KEY}",
        placeholder: "Search your places...",
        minChars: 3,
        delay: 150,
        width: "90%",
        height: "35px",
        map: map,
        suggestsLimit: 5,
        includeCategories: [],
        excludeCategories: [],
        maxCharsInSuggest: 55,
        lang: "local",
        onSuggestSelected: (suggest) =>
          console.log("Suggest selected: " + suggest.html),
        customFeatures: [
          {
            html: "дом Беляевка",
            keywords: "мой дом",
            coords: [46.48464, 30.19752],
          },
          {
            html: "тестовый вариант",
            keywords: "чернигов шевченко 23",
            coords: [50.46537, 30.48019],
          },
        ],
      });
      // });
    </script>
  </body>
</html>

`;

const html_script4 = `

<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0" />

    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
    />
    <link
      rel="stylesheet"
      href="https://api.visicom.ua/apps/visicom-autocomplete.min.css"
    />

    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
      .leaflet-container {
        max-width: 100%;
        max-height: 100%;
      }

      #visicom-autocomplete {
        position: absolute;
        top: 10px;
        right: 0;
        z-index: 99999;
      }
    </style>
  </head>

  <body>
    <div id="visicom-autocomplete">
      <a href="https://api.visicom.ua/" target="_blank">© Visicom</a>
    </div>
    <div id="map" style="width: 100%; height: 100vh"></div>

    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>
    <script
      type="text/javascript"
      src="https://api.visicom.ua/apps/visicom-autocomplete.min.js"
    ></script>

    <script>
      //  document.addEventListener('DOMContentLoaded', function () {
      var markers = {};

      window.addEventListener("message", function (event) {
        var location = JSON.parse(event.data);
        if (window.map) {
          window.map.setView([location.latitude, location.longitude], 16);
        } else {
          console.log("Карта еще не готова");
        }
      });

      var marker;
      var map = L.map("map").setView([46.48464, 30.19768], 19);
      marker = L.marker([46.48464, 30.19768]).addTo(map);
      marker.bindPopup("Это мой маркер!");


      L.tileLayer(
        "http://tms{s}.visicom.ua/2.0.0/planet3/base_ru/{z}/{x}/{y}.png?key=${VISICOM_TILES_KEY}",
        {
          maxZoom: 19,
          tms: true,
          attribution: "Данные карт © 2019 ЧАО «Визиком»",
          subdomains: "123",
        }
      ).addTo(map);

      window.map = map;
      window.ReactNativeWebView.postMessage("MAP_READY");

        function findLocation(lat, lng) {
            map.setView([lat, lng], map.getZoom());
            marker.setLatLng([lat, lng]);
         }

      // Добавление маркера на карту при клике
        map.on('click', function(e) {
          var marker = L.marker(e.latlng).addTo(map);
          marker.bindPopup("<b>Новый маркер</b>").openPopup();
        });

      let ac = new visicomAutoComplete({
        selector: "#visicom-autocomplete",
        apiKey: "${VISICOM_API_KEY}",
        placeholder: "Search your places...",
        minChars: 3,
        delay: 150,
        width: "90%",
        height: "35px",
        map: map,
        suggestsLimit: 5,
        includeCategories: [],
        excludeCategories: [],
        maxCharsInSuggest: 55,
        lang: "local",
        onSuggestSelected: (suggest) =>
          console.log("Suggest selected: " + suggest.html),
        customFeatures: [
          {
            html: "дом Беляевка",
            keywords: "мой дом",
            coords: [46.48464, 30.19752],
          },
          {
            html: "тестовый вариант",
            keywords: "чернигов шевченко 23",
            coords: [50.46537, 30.48019],
          },
        ],
      });
      // });
    </script>
  </body>
</html>

`;

const html_script5 = `

<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">


    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
    />
    <link
      rel="stylesheet"
      href="https://api.visicom.ua/apps/visicom-autocomplete.min.css"
    />

    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
      .leaflet-container {
        max-width: 100%;
        max-height: 100%;
      }

      #visicom-autocomplete {
        position: absolute;
        top: 6px;
        left: 10px;
        z-index: 99999;
        border-radius: 20px;

      }

      #visicom-autocomplete input {
        border-radius: 20px;
        border: none;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }
    </style>
  </head>

  <body>
    <div id="visicom-autocomplete">
      <a href="https://api.visicom.ua/" target="_blank">© Visicom</a>
    </div>
    <div id="map" style="width: 100%; height: 100vh"></div>

    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>
    <script
      type="text/javascript"
      src="https://api.visicom.ua/apps/visicom-autocomplete.min.js"
    ></script>

    <script>
      var markers = {};
      var marker = L.marker();
    
      // var latlng = L.latLng(46.48464, 30.19768);

      window.addEventListener("message", function (event) {
        var location = JSON.parse(event.data);
        if (window.map) {
          window.map.setView([location.latitude, location.longitude], 16);
        } else {
          console.log("Карта еще не готова");
        }
      });


        let map = new L.Map('map', {
          // center: new L.LatLng(46.48464, 30.19752),
          zoom: 19,
          zoomControl: false,
          layers: [
              new L.TileLayer(
                      'https://tms{s}.visicom.ua/2.0.0/planet3/base_ru/{z}/{x}/{y}.png?key=${VISICOM_TILES_KEY}',
                      {
                          maxZoom: 19,
                          tms: true,
                          attribution: 'Данные карт © 2019 ЧАО «Визиком»',
                          subdomains: '123'
                      }
              )
          ]

      });

      window.map = map;
      window.ReactNativeWebView.postMessage("MAP_READY");

      // определяем маркер и местоположение
        function findLocation(lat, lng, message) {
            map.panTo([lat, lng]);
            marker.setLatLng([lat, lng]).addTo(map);
            marker.bindPopup(message);
                   
            // map.setView([lat, lng], map.getZoom());
         }

      // Добавление маркера на карту при клике
        map.on('click', function(e) {
          var marker = L.marker(e.latlng).addTo(map);
          marker.bindPopup("<b>Новый маркер</b>").openPopup();
        });

      let ac = new visicomAutoComplete({
        selector: "#visicom-autocomplete",
        apiKey: "${VISICOM_API_KEY}",
        placeholder: "Поиск",
        minChars: 3,
        delay: 150,
        width: "95vw",
        height: "35px",
        map: map,
        suggestsLimit: 5,
        includeCategories: [],
        excludeCategories: [],
        maxCharsInSuggest: 55,
        lang: "local",
        onSuggestSelected: suggest =>
                console.log('Suggest selected: ' + (suggest.html)),
        customFeatures: [
          {
            html: "дом Беляевка",
            keywords: "мой дом",
            coords: [46.48464, 30.19752],
          },
          {
            html: "тестовый вариант",
            keywords: "чернигов шевченко 23",
            coords: [50.46537, 30.48019],
          },
        ],
      });

    </script>
  </body>
</html>

`;

export { html_script, html_script2, html_script3, html_script4, html_script5 };

// https://tms1.visicom.ua/2.0.0/planet3/base/10/599/678.png
// https://tile.openstreetmap.org/{z}/{x}/{y}.png

// https://tms1.visicom.ua/2.0.0/planet3/base/{z}/{x}/{y}.png'

// var mymap = L.map("mapid").setView([46.4726315, 30.2089145], 13);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 18,
//   attribution: "Map data &copy; OpenStreetMap contributors, ",
//   id: "mapbox/streets-v11",
// }).addTo(mymap);

// var popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(mymap);
// }

// mymap.on("click", onMapClick);
