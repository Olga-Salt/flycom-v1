import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { LinearGradient } from "expo-linear-gradient";
import { SimpleLineIcons } from "react-native-vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../../redux/dashboard/languageSlice";
import { setMaps } from "../../redux/dashboard/mapSlice";
import { setThemes } from "../../redux/dashboard/themeSlice";
import { setBiometrics } from "../../redux/dashboard/biometricSlise";

import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { THEME } from "../../constants";
import { commonStyles } from "../../css/common";

import { Container } from "../../components/common/containers";
import { UserName } from "../../components/common/userInfo";
import {
  GradientBtn,
  LinearGradientWrap,
} from "../../components/common/buttons";

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
  const prevBiometric = useSelector((state) => state.biometric);
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
    { label: t("title.off"), value: "Выключено" },
    { label: "Включено", value: "Включено" },
  ];

  const [map, setMap] = useState(prevMap);
  const [lang, setLangs] = useState(i18n.language);
  const [pushMessege, setPushMessege] = useState(null);
  const [theme, setTheme] = useState(prevTheme);
  const [biometric, setBiometric] = useState(prevBiometric);

  const toggleSwitch = async (newLanguage) => {
    if (newLanguage !== i18n.language) {
      i18n.changeLanguage(newLanguage);
      dispatch(setLanguage(newLanguage));
      await AsyncStorage.setItem("language", newLanguage);
    }
  };

  // const toggleMap = async (newMap) => {
  //   if (newMap !== prevMap) {
  //     dispatch(setMaps(newMap));
  //     await AsyncStorage.setItem("map", newMap);
  //   }
  // };
  // const toggleTheme = async (newTheme) => {
  //   if (newTheme !== prevTheme) {
  //     dispatch(setThemes(newTheme));
  //     await AsyncStorage.setItem("theme", newTheme);
  //   }
  // };
  // const toggleBiometic = async (newBiometric) => {
  //   if (newBiometric !== prevBiometric) {
  //     dispatch(setBiometrics(newBiometric));
  //     await AsyncStorage.setItem("biometric", newBiometric);
  //   }
  // };

  const handleToggle = async (newItem, prevItem, action, storageItem) => {
    if (newItem !== prevItem) {
      dispatch(action(newItem));
      await AsyncStorage.setItem(storageItem, newItem);
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
    <Container>
      <UserName>
        <View style={styles.notificationBell}>
          <SimpleLineIcons
            name="bell"
            size={24}
            color={activeTheme.themeBlackwhite}
          />
          <View style={styles.notificationDot}></View>
        </View>
      </UserName>

      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel("Карта", Mapicon)}

        <LinearGradientWrap addStyle={styles.selectWithGradient}>
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
            containerStyle={{
              ...styles.containerStyle,
              backgroundColor: activeTheme.themeGrayBackground,
            }}
            activeColor="#999"
            iconColor="#fff"
            onChange={(item) => {
              setMap(item.value);
              // toggleMap(item.value);
              handleToggle(item.value, prevMap, setMaps, "map");
            }}
            renderItem={renderItem}
          />
        </LinearGradientWrap>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel(t("language.title"), Langicon)}

        <LinearGradientWrap addStyle={styles.selectWithGradient}>
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
            containerStyle={{
              ...styles.containerStyle,
              backgroundColor: activeTheme.themeGrayBackground,
            }}
            activeColor="#999"
            iconColor="#fff"
            onChange={(item) => {
              setLangs(item.value);
              toggleSwitch(item.value);
            }}
            renderItem={renderItem}
          />
        </LinearGradientWrap>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel(t("pushMessage.title"), Pushicon)}

        <LinearGradientWrap addStyle={styles.selectWithGradient}>
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
            activeColor="#999"
            containerStyle={{
              ...styles.containerStyle,
              backgroundColor: activeTheme.themeGrayBackground,
            }}
            iconColor="#fff"
            onChange={(item) => {
              setPushMessege(item.value);
            }}
            renderItem={renderItem}
          />
        </LinearGradientWrap>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel("Тема", Themeicon)}

        <LinearGradientWrap addStyle={styles.selectWithGradient}>
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
            containerStyle={{
              ...styles.containerStyle,
              backgroundColor: activeTheme.themeGrayBackground,
            }}
            iconColor="#fff"
            onChange={(item) => {
              setTheme(item.value);
              // toggleTheme(item.value);
              handleToggle(item.value, prevTheme, setThemes, "theme");
            }}
            renderItem={renderItem}
          />
        </LinearGradientWrap>
      </View>
      <View style={{ ...commonStyles.rowContainer, marginBottom: 24 }}>
        {renderLabel(t("biometric.title"), Biometricicon)}

        <LinearGradientWrap addStyle={styles.selectWithGradient}>
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
            activeColor="#999"
            containerStyle={{
              ...styles.containerStyle,
              backgroundColor: activeTheme.themeGrayBackground,
            }}
            iconColor="#fff"
            onChange={(item) => {
              setBiometric(item.value);
              // toggleBiometic(item.value);
              handleToggle(
                item.value,
                prevBiometric,
                setBiometrics,
                "biometric"
              );
            }}
            renderItem={renderItem}
          />
        </LinearGradientWrap>
      </View>

      <View style={styles.centeredBtnWrapper}>
        <GradientBtn
          onPress={() => {}}
          title={t("logout.btn")}
          addStyle={{ marginHorizontal: 48 }}
        />
      </View>
    </Container>
  );
};

export default ProfileScreen;
