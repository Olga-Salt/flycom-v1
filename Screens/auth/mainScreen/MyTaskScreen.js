import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const MyTaskScreen = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = (label) => {
    return <Text style={[styles.label]}>{label}</Text>;
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Новая заявка:</Text>
        <View style={styles.selectContainer}>
          {renderLabel("Тема:")}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "..."}
            searchPlaceholder="Поиск..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color={isFocus ? "blue" : "black"}
            //     name="Safety"
            //     size={15}
            //   />
            // )}
          />
        </View>
        <View style={styles.selectContainer}>
          {renderLabel("Статус:")}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "..."}
            searchPlaceholder="Поиск..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  scrollView: {
    // backgroundColor: "pink",
    // marginHorizontal: 20,
  },

  selectContainer: {
    backgroundColor: "white",
    paddingBottom: 8,
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdown: {
    height: 24,
    width: 240,
    borderColor: "#384596",
    borderWidth: 0.2,
    borderRadius: 3,
    paddingHorizontal: 8,
    lineHeight: "normal",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    width: 88,
    color: "#384596",
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: "#384596",
  },
});

export default MyTaskScreen;

// const MyTaskScreen = ({ route }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     if (route.params) {
//       setPosts((prev) => [...prev, route.params]);
//     }
//   }, [route.params]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={posts}
//         keyExtractor={(item, idx) => idx.toString()}
//         renderItem={({ item }) => (
//           <View style={{ alignItems: "center", justifyContent: "center" }}>
//             <Image
//               source={{ uri: item.photo }}
//               style={{
//                 width: Dimensions.get("window").width * 0.9,
//                 height: 200,
//                 borderRadius: 8,
//               }}
//             />
//             <Text>{item.text}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
// });

// export default MyTaskScreen;
