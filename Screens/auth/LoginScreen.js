// import { Text, View, TouchableOpacity, TextInput, Linking } from "react-native";
// import { Controller } from "react-hook-form";
// import { styles } from "../../../Screens/auth/styles";

// import { useState } from "react";
// const supportedURL = "https://google.com";

// export default function LoginScreen({
//   control1,
//   handleSubmit1,
//   onSubmit1,
//   setIsShowKeyBoard,
//   isShowKeyBoard,
//   errors1,
//   keyBoardHide,
//   dimensions,
// }) {
//   const [isShowPassword, setIsShowPassword] = useState(true);

//   const HandleshowPassword = () => {
//     setIsShowPassword(!isShowPassword);
//   };

//   const handleSignIn = async () => {
//     await Linking.openURL(supportedURL);
//   };

//   return (
//     <View
//       style={{
//         ...styles.formWrapper,
//         marginBottom: isShowKeyBoard ? -180 : 0,
//       }}
//     >
//       <View style={{ ...styles.form, width: dimensions }}>
//         <Text style={styles.screenTitle}>Войти</Text>
//         <View style={styles.inputWrapper}>
//           <Controller
//             control={control1}
//             render={({ field: { onChange, onBlur, value = "" } }) => (
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={(value) => onChange(value)}
//                 value={value}
//                 placeholder={"Адрес электронной почты"}
//                 keyboardType="email-address"
//                 onFocus={() => setIsShowKeyBoard(true)}
//                 onSubmitEditing={() => keyBoardHide()}
//               />
//             )}
//             name="email"
//             rules={{
//               required: {
//                 value: true,
//                 message: "Почта обязательна!",
//               },
//             }}
//           />
//           <View>
//             {errors1?.email && (
//               <Text style={{ fontSize: 20, color: "red" }}>
//                 {errors1?.email?.message || "Error"}
//               </Text>
//             )}
//           </View>
//           <View style={{ position: "relative" }}>
//             <Controller
//               control={control1}
//               render={({ field: { onChange, onBlur, value = "" } }) => (
//                 <TextInput
//                   style={styles.input}
//                   onBlur={onBlur}
//                   onChangeText={(value) => onChange(value)}
//                   value={value}
//                   placeholder={"Пароль"}
//                   secureTextEntry={isShowPassword}
//                   onFocus={() => setIsShowKeyBoard(true)}
//                   onSubmitEditing={() => keyBoardHide()}
//                 />
//               )}
//               name="password"
//               rules={{
//                 required: {
//                   value: true,
//                   message: "Пароль обязателен!",
//                 },
//                 minLength: {
//                   value: 5,
//                   message: "Минимум 5 символов",
//                 },
//               }}
//             />
//             <Text style={styles.showPassTitle} onPress={HandleshowPassword}>
//               {isShowPassword ? "Показать" : "Скрыть"}
//             </Text>
//             <View>
//               {errors1?.password && (
//                 <Text style={{ fontSize: 20, color: "red" }}>
//                   {errors1?.password?.message || "Error"}
//                 </Text>
//               )}
//             </View>
//           </View>
//         </View>

//         <TouchableOpacity
//           style={[styles.btn, styles.shadowProp]}
//           activeOpacity={0.8}
//           onPress={handleSubmit1(onSubmit1)}
//         >
//           <Text style={styles.btnTitle}>Зарегестрироваться</Text>
//         </TouchableOpacity>

//         <Text style={styles.btnIsSignIn} onPress={handleSignIn}>
//           Нет аккаунта? Зарегистрироваться
//         </Text>
//       </View>
//     </View>
//   );
// }

// ======
import {
  Text,
  View,
  ImageBackground,
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

import { styles } from "./styles";

import { useState, useEffect } from "react";

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
              <Text style={styles.screenTitle}>Вход в личный кабинет</Text>
              <View style={styles.inputWrapper}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value = "" } }) => (
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder={"Логин"}
                      keyboardType="email-address"
                      onFocus={() => setIsShowKeyBoard(true)}
                      onSubmitEditing={() => keyBoardHide()}
                    />
                  )}
                  name="email"
                  rules={{
                    required: {
                      value: true,
                      message: "Логин обязателен",
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
                        message: "Пароль обязателен",
                      },
                      minLength: {
                        value: 5,
                        message: "Минимум 5 символов",
                      },
                    }}
                  />
                  <Text
                    style={styles.showPassTitle}
                    onPress={HandleshowPassword}
                  >
                    {isShowPassword ? "Показать" : "Скрыть"}
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
                  style={[styles.btnWithGradient]}
                  activeOpacity={0.8}
                  colors={["#75C7F1", "#384596"]}
                  locations={[0, 1]}
                  end={{ x: 0.1, y: 1 }}
                >
                  <Text style={styles.btnTitle}>ВОЙТИ</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
