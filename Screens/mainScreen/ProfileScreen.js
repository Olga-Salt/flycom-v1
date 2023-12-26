import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "react-native-vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

import { styles } from "./styles";
import { commonStyles } from "../../css/common";

const Mapicon = require("../../assets/image/Mapicon.png");
const Langicon = require("../../assets/image/Languageicon.png");
const Pushicon = require("../../assets/image/Pushicon.png");
const Themeicon = require("../../assets/image/Themeicon.png");
const Biometricicon = require("../../assets/image/Biometricicon.png");

const maps = [
  { label: "Google", value: "1" },
  { label: "Visicom", value: "2" },
];
const langs = [
  { label: "Русский", value: "1" },
  { label: "Українська", value: "2" },
];
const pushMesseges = [
  { label: "Выключено", value: "1" },
  { label: "Включено", value: "2" },
];
const themes = [
  { label: "Светлая", value: "1" },
  { label: "Темная", value: "2" },
];
const biometrics = [
  { label: "Выключено", value: "1" },
  { label: "Включено", value: "2" },
];

const ProfileScreen = () => {
  const { t } = useTranslation();

  const [map, setMap] = useState(null);
  const [lang, setLangs] = useState(null);
  const [pushMessege, setPushMessege] = useState(null);
  const [theme, setTheme] = useState(null);
  const [biometric, setBiometric] = useState(null);

  const renderLabel = (label, icon) => {
    return (
      <View style={commonStyles.rowContainer}>
        <Image style={styles.settingsIcons} source={icon} />
        <Text style={[styles.label]}>{label}</Text>
      </View>
    );
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={commonStyles.container}>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 28 }}>
        <View style={styles.userInfoWrap}>
          <View>
            <Image
              style={styles.userAvatar}
              source={require("../../assets/image/user.png")}
            />
          </View>
          <View>
            <Text style={styles.userName}>Иванов Иван Иванович</Text>
            <Text style={styles.userDetails}>Специалист ТС Одесса</Text>
          </View>
        </View>
        <View style={styles.notificationBell}>
          <SimpleLineIcons name="bell" size={24} color="black" />
          <View style={styles.notificationDot}></View>
        </View>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel("Карта", Mapicon)}

        <LinearGradient
          style={[styles.btnWithGradient]}
          activeOpacity={0.8}
          colors={["#75C7F1", "#384596"]}
          locations={[0, 1]}
          end={{ x: 0.1, y: 1 }}
        >
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={maps}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Google"
            value={map}
            containerStyle={styles.containerStyle}
            iconColor="#fff"
            // itemTextStyle="#fff"

            onChange={(item) => {
              setMap(item.value);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color="black"
            //     name="Safety"
            //     size={20}
            //   />
            // )}
            renderItem={renderItem}
          />
        </LinearGradient>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel("Язык", Langicon)}

        <LinearGradient
          style={[styles.btnWithGradient]}
          activeOpacity={0.8}
          colors={["#75C7F1", "#384596"]}
          locations={[0, 1]}
          end={{ x: 0.1, y: 1 }}
        >
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={langs}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Русский"
            value={lang}
            containerStyle={styles.containerStyle}
            iconColor="#fff"
            onChange={(item) => {
              setLangs(item.value);
            }}
            renderItem={renderItem}
          />
        </LinearGradient>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel("Push уведомления", Pushicon)}

        <LinearGradient
          style={[styles.btnWithGradient]}
          activeOpacity={0.8}
          colors={["#75C7F1", "#384596"]}
          locations={[0, 1]}
          end={{ x: 0.1, y: 1 }}
        >
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={pushMesseges}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Выключено"
            value={pushMessege}
            containerStyle={styles.containerStyle}
            iconColor="#fff"
            onChange={(item) => {
              setPushMessege(item.value);
            }}
            renderItem={renderItem}
          />
        </LinearGradient>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel("Тема", Themeicon)}

        <LinearGradient
          style={[styles.btnWithGradient]}
          activeOpacity={0.8}
          colors={["#75C7F1", "#384596"]}
          locations={[0, 1]}
          end={{ x: 0.1, y: 1 }}
        >
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={themes}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Светлая"
            value={theme}
            containerStyle={styles.containerStyle}
            iconColor="#fff"
            onChange={(item) => {
              setTheme(item.value);
            }}
            renderItem={renderItem}
          />
        </LinearGradient>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel("Биометрия", Biometricicon)}

        <LinearGradient
          style={[styles.btnWithGradient]}
          activeOpacity={0.8}
          colors={["#75C7F1", "#384596"]}
          locations={[0, 1]}
          end={{ x: 0.1, y: 1 }}
        >
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={biometrics}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Выключено"
            value={biometric}
            containerStyle={styles.containerStyle}
            iconColor="#fff"
            onChange={(item) => {
              setBiometric(item.value);
            }}
            renderItem={renderItem}
          />
        </LinearGradient>
      </View>
      <View style={styles.centeredBtnWrapper}>
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={handleSubmit(onSubmit)}
        >
          <LinearGradient
            style={{ ...commonStyles.btnWithGradient, marginHorizontal: 48 }}
            activeOpacity={0.8}
            colors={["#75C7F1", "#384596"]}
            locations={[0, 1]}
            end={{ x: 0.1, y: 1 }}
          >
            <Text style={commonStyles.btnTitleGradient}>{t("logout.btn")}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
