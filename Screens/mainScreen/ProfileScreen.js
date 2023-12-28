import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "react-native-vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../../redux/dashboard/languageSlice";
import { setMaps } from "../../redux/dashboard/mapSlice";
import { setThemes } from "../../redux/dashboard/themeSlice";

import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { THEME } from "../../constants";
import { commonStyles } from "../../css/common";

const Mapicon = require("../../assets/image/Mapicon.png");
const Langicon = require("../../assets/image/Languageicon.png");
const Pushicon = require("../../assets/image/Pushicon.png");
const Themeicon = require("../../assets/image/Themeicon.png");
const Biometricicon = require("../../assets/image/Biometricicon.png");

const ProfileScreen = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const prevMap = useSelector((state) => state.map);
  const prevTheme = useSelector((state) => state.theme);
  let activeTheme = THEME[prevTheme];

  const maps = [
    { label: "Google", value: "Google" },
    { label: "Visicom", value: "Visicom" },
  ];
  const langs = [
    { label: t("language.ru"), value: "ru" },
    { label: t("language.ua"), value: "ua" },
  ];
  const pushMesseges = [
    { label: t("title.off"), value: "1" },
    { label: "Включено", value: "2" },
  ];
  const themes = [
    { label: t("theme.light"), value: "light" },
    { label: t("theme.dark"), value: "dark" },
  ];
  const biometrics = [
    { label: t("title.off"), value: "1" },
    { label: "Включено", value: "2" },
  ];

  const [map, setMap] = useState(prevMap);
  const [lang, setLangs] = useState(i18n.language);
  const [pushMessege, setPushMessege] = useState(null);
  const [theme, setTheme] = useState(prevTheme);
  const [biometric, setBiometric] = useState(null);

  const toggleSwitch = async (newLanguage) => {
    if (newLanguage !== i18n.language) {
      i18n.changeLanguage(newLanguage);
      dispatch(setLanguage(newLanguage));
      await AsyncStorage.setItem("language", newLanguage);
    }
  };

  const toggleMap = async (newMap) => {
    if (newMap !== prevMap) {
      dispatch(setMaps(newMap));
      await AsyncStorage.setItem("map", newMap);
    }
  };
  const toggleTheme = async (newTheme) => {
    if (newTheme !== prevTheme) {
      dispatch(setThemes(newTheme));
      await AsyncStorage.setItem("theme", newTheme);
    }
  };

  const renderLabel = (label, icon) => {
    return (
      <View style={commonStyles.rowContainer}>
        <Image style={styles.settingsIcons} source={icon} />
        <Text style={{ ...styles.label, color: activeTheme.themeText }}>
          {label}
        </Text>
      </View>
    );
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text
          style={{ ...styles.textItem, color: activeTheme.themeBlackwhite }}
        >
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        ...commonStyles.container,
        backgroundColor: activeTheme.themeBackground,
      }}
    >
      <View style={{ ...commonStyles.rowContainer, marginBottom: 28 }}>
        <View style={styles.userInfoWrap}>
          <View>
            <Image
              style={styles.userAvatar}
              source={require("../../assets/image/user.png")}
            />
          </View>
          <View>
            <Text style={{ ...styles.userName, color: activeTheme.themeText }}>
              Иванов Иван Иванович
            </Text>
            <Text style={styles.userDetails}>Специалист ТС Одесса</Text>
          </View>
        </View>
        <View style={styles.notificationBell}>
          <SimpleLineIcons
            name="bell"
            size={24}
            color={activeTheme.themeBlackwhite}
          />
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
            placeholder={prevMap}
            value={map}
            containerStyle={styles.containerStyle}
            iconColor="#fff"
            // itemTextStyle="#fff"

            onChange={(item) => {
              setMap(item.value);
              toggleMap(item.value);
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
        {renderLabel(t("language.title"), Langicon)}

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
            placeholder={t("language.ru")}
            value={lang}
            containerStyle={styles.containerStyle}
            iconColor="#fff"
            onChange={(item) => {
              setLangs(item.value);
              toggleSwitch(item.value);
            }}
            renderItem={renderItem}
          />
        </LinearGradient>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel(t("pushMessage.title"), Pushicon)}

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
            placeholder={t("title.off")}
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
            placeholder={t("theme.light")}
            value={theme}
            activeColor="#999"
            // activeColor={activeTheme.activeColor}
            containerStyle={{
              ...styles.containerStyle,
              backgroundColor: activeTheme.themeGrayBackground,
            }}
            iconColor="#fff"
            onChange={(item) => {
              setTheme(item.value);
              toggleTheme(item.value);
            }}
            renderItem={renderItem}
          />
        </LinearGradient>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel(t("biometric.title"), Biometricicon)}

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
            placeholder={t("title.off")}
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
