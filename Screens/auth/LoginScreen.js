import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Linking,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../helpers/langSwitcher";

import { styles } from "./styles";
import { commonStyles } from "../../css/common";

import SvgLogo from "../../assets/image/LogoSvg";
const supportedURL = "https://google.com";

const width = Dimensions.get("window").width - 20 * 2;

export default function LoginScreen({
  onLayoutRootView,
  handleLoginSubmit,
  navigation,
}) {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [dimensions, setDimensions] = useState(width - 20 * 2);

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
    handleLoginSubmit(data);
    reset();
    keyBoardHide();
  };

  function keyBoardHide() {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    // setUserData(initialUserData);
  }

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window.width - 40 * 2);
    });

    return () => subscription?.remove();
  });

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <LanguageToggle />
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <View
            style={{
              ...styles.formWrapper,
              marginBottom: isShowKeyBoard ? 20 : 0,
            }}
          >
            <View style={{ ...styles.form, width: dimensions }}>
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
                      onFocus={() => setIsShowKeyBoard(true)}
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
                  <Text
                    style={styles.showPassTitle}
                    onPress={HandleshowPassword}
                  >
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

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleSubmit(onSubmit)}
              >
                <LinearGradient
                  style={[commonStyles.btnWithGradient]}
                  activeOpacity={0.8}
                  colors={["#75C7F1", "#384596"]}
                  locations={[0, 1]}
                  end={{ x: 0.1, y: 1 }}
                >
                  <Text style={commonStyles.btnTitleGradient}>
                    {t("login.btn")}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
