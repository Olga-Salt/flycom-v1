import {
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Linking,
  Dimensions,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../helpers/langSwitcher";

import { styles } from "./styles";
import { THEME } from "../../constants";
import { GradientBtn } from "../../components/common/buttons";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/authOperations";

import SvgLogo from "../../assets/image/LogoSvg";
const supportedURL = "https://google.com";

const width = Dimensions.get("window").width - 60 * 2;

export default function LoginScreen({
  onLayoutRootView,
  // navigation,
}) {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [dimensions, setDimensions] = useState(width);
  const dispatch = useDispatch();

  const prevTheme = useSelector((state) => state.theme);
  let activeTheme = THEME[prevTheme];

  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const HandleshowPassword = async () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSignIn = async () => {
    await Linking.openURL(supportedURL);
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    reset();
    keyBoardHide();
    dispatch(login({ login: email, password }));
  };

  function keyBoardHide() {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  }

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions(window.width - 60 * 2);
  //   });

  //   return () => subscription?.remove();
  // }, []);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(
        window.width > window.height
          ? window.width - 200 * 2
          : window.width - 60 * 2
      );
    });

    return () => subscription?.remove();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View
        style={{
          ...styles.container,
          backgroundColor: activeTheme.themeBackground,
        }}
        onLayout={onLayoutRootView}
      >
        <LanguageToggle />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            justifyContent: isShowKeyBoard ? "flex-end" : "center",
          }}
        >
          <View
            style={{
              ...styles.form,
              width: dimensions,
              marginBottom: isShowKeyBoard ? 20 : 0,
            }}
          >
            <View style={styles.imageSvg}>
              <SvgLogo />
            </View>
            <Text style={styles.screenTitle}>{t("login.title")}</Text>
            <View style={styles.inputWrapper}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value = "" } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder={t("login.login")}
                    keyboardType="email-address"
                    onFocus={() => {
                      setIsShowKeyBoard(true);
                    }}
                    onSubmitEditing={() => keyBoardHide()}
                  />
                )}
                name="email"
                rules={{
                  required: {
                    value: true,
                    message: t("login.error.email.required"),
                  },
                }}
              />
              <View>
                {errors?.email && (
                  <Text style={{ fontSize: 14, color: "red" }}>
                    {errors?.email?.message || "Error"}
                  </Text>
                )}
              </View>
              <View style={{ position: "relative" }}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value = "" } }) => (
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder={"Пароль"}
                      secureTextEntry={isShowPassword}
                      onFocus={() => setIsShowKeyBoard(true)}
                      onSubmitEditing={() => keyBoardHide()}
                    />
                  )}
                  name="password"
                  rules={{
                    required: {
                      value: true,
                      message: t("login.error.password.required"),
                    },
                    minLength: {
                      value: 5,
                      message: t("login.error.password.length"),
                    },
                  }}
                />
                <Text style={styles.showPassTitle} onPress={HandleshowPassword}>
                  {isShowPassword ? t("login.showpass") : t("login.hidepass")}
                </Text>
                <View>
                  {errors?.password && (
                    <Text style={{ fontSize: 14, color: "red" }}>
                      {errors?.password?.message || "Error"}
                    </Text>
                  )}
                </View>
              </View>
            </View>

            <GradientBtn
              onPress={handleSubmit(onSubmit)}
              title={t("login.btn")}
              addStyle
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
