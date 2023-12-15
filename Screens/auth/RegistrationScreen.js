// import { Text, View, TouchableOpacity, TextInput, Linking } from "react-native";
// import { useForm, Controller } from "react-hook-form";

// import { styles } from "./styles";
// import { useState } from "react";
// const supportedURL = "https://google.com";
// const width = Dimensions.get("window").width - 20 * 2;

// export default function RegistrationScreen({
//   control,
//   handleSubmit,
//   onSubmit,
//   setIsShowKeyBoard,
//   isShowKeyBoard,
//   errors,
//   keyBoardHide,
//   dimensions,
// }) {
//   const [isShowPassword, setIsShowPassword] = useState(true);
//   const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);

//   const [dimensions, setDimensions] = useState(width);
//   const {
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onBlur",
//   });

//   const HandleshowPassword = async () => {
//     setIsShowPassword(!isShowPassword);
//   };

//   const handleSignIn = async () => {
//     await Linking.openURL(supportedURL);
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//     keyBoardHide();
//   };

//   function keyBoardHide() {
//     setIsShowKeyBoard(false);
//     Keyboard.dismiss();
//     // setUserData(initialUserData);
//   }

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change", ({ window }) => {
//       setDimensions(window.width - 40 * 2);
//     });

//     return () => subscription?.remove();
//   });

//   return (
//     <View
//       style={{
//         ...styles.formWrapper,
//         marginBottom: isShowKeyBoard ? -180 : 0,
//       }}
//     >
//       <View style={{ ...styles.form, width: dimensions }}>
//         <Text style={styles.screenTitle}>Регистрация</Text>
//         <View style={styles.inputWrapper}>
//           <Controller
//             control={control}
//             render={({ field: { onChange, onBlur, value = "" } }) => (
//               <TextInput
//                 style={styles.input}
//                 onBlur={onBlur}
//                 onChangeText={(value) => onChange(value)}
//                 value={value}
//                 placeholder={"Логин"}
//                 onFocus={() => setIsShowKeyBoard(true)}
//                 onSubmitEditing={() => keyBoardHide()}
//               />
//             )}
//             name="login"
//             rules={{
//               required: {
//                 value: true,
//                 message: "Логин обязателен!",
//               },
//             }}
//           />
//           <View>
//             {errors?.login && (
//               <Text style={{ fontSize: 20, color: "red" }}>
//                 {errors?.login?.message || "Error"}
//               </Text>
//             )}
//           </View>

//           <Controller
//             control={control}
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
//             {errors?.email && (
//               <Text style={{ fontSize: 20, color: "red" }}>
//                 {errors?.email?.message || "Error"}
//               </Text>
//             )}
//           </View>
//           <View style={{ position: "relative" }}>
//             <Controller
//               control={control}
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
//               {errors?.password && (
//                 <Text style={{ fontSize: 20, color: "red" }}>
//                   {errors?.password?.message || "Error"}
//                 </Text>
//               )}
//             </View>
//           </View>
//         </View>

//         <TouchableOpacity
//           style={[styles.btn, styles.shadowProp]}
//           activeOpacity={0.8}
//           onPress={handleSubmit(onSubmit)}
//         >
//           <Text style={styles.btnTitle}>Зарегестрироваться</Text>
//         </TouchableOpacity>

//         <Text style={styles.btnIsSignIn} onPress={handleSignIn}>
//           Уже есть аккаунт? Войти
//         </Text>
//       </View>
//     </View>
//   );
// }

// ===============
// import {
//   Text,
//   View,
//   ImageBackground,
//   TouchableOpacity,
//   Platform,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableWithoutFeedback,
//   TextInput,
//   Linking,
//   Dimensions,
// } from "react-native";
// import { useForm, Controller } from "react-hook-form";

// import { styles } from "./styles";
// import { useState, useEffect } from "react";

// const supportedURL = "https://google.com";
// const width = Dimensions.get("window").width - 20 * 2;

// export default function RegistrationScreen({
//   onLayoutRootView,
//   handleRegistrationSubmit,
//   navigation,
// }) {
//   const [isShowPassword, setIsShowPassword] = useState(true);
//   const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);

//   const [dimensions, setDimensions] = useState(width);
//   const {
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onBlur",
//   });

//   const HandleshowPassword = async () => {
//     setIsShowPassword(!isShowPassword);
//   };

//   const handleSignIn = async () => {
//     await Linking.openURL(supportedURL);
//   };

//   const onSubmit = (data) => {
//     handleRegistrationSubmit(data);
//     reset();
//     keyBoardHide();
//   };

//   function keyBoardHide() {
//     setIsShowKeyBoard(false);
//     Keyboard.dismiss();
//     // setUserData(initialUserData);
//   }

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change", ({ window }) => {
//       setDimensions(window.width - 40 * 2);
//     });

//     return () => subscription?.remove();
//   });

//   return (
//     <TouchableWithoutFeedback onPress={keyBoardHide}>
//       <View style={styles.container} onLayout={onLayoutRootView}>
//         <ImageBackground
//           style={styles.image}
//           source={require("../../assets/PhotoBG.jpg")}
//         >
//           <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
//             <View
//               style={{
//                 ...styles.formWrapper,
//                 marginBottom: isShowKeyBoard ? -180 : 0,
//               }}
//             >
//               <View style={{ ...styles.form, width: dimensions }}>
//                 <Text style={styles.screenTitle}>Регистрация</Text>
//                 <View style={styles.inputWrapper}>
//                   <Controller
//                     control={control}
//                     render={({ field: { onChange, onBlur, value = "" } }) => (
//                       <TextInput
//                         style={styles.input}
//                         onBlur={onBlur}
//                         onChangeText={(value) => onChange(value)}
//                         value={value}
//                         placeholder={"Логин"}
//                         onFocus={() => setIsShowKeyBoard(true)}
//                         onSubmitEditing={() => keyBoardHide()}
//                       />
//                     )}
//                     name="login"
//                     rules={{
//                       required: {
//                         value: true,
//                         message: "Логин обязателен!",
//                       },
//                     }}
//                   />
//                   <View>
//                     {errors?.login && (
//                       <Text style={{ fontSize: 20, color: "red" }}>
//                         {errors?.login?.message || "Error"}
//                       </Text>
//                     )}
//                   </View>

//                   <Controller
//                     control={control}
//                     render={({ field: { onChange, onBlur, value = "" } }) => (
//                       <TextInput
//                         style={styles.input}
//                         onBlur={onBlur}
//                         onChangeText={(value) => onChange(value)}
//                         value={value}
//                         placeholder={"Адрес электронной почты"}
//                         keyboardType="email-address"
//                         onFocus={() => setIsShowKeyBoard(true)}
//                         onSubmitEditing={() => keyBoardHide()}
//                       />
//                     )}
//                     name="email"
//                     rules={{
//                       required: {
//                         value: true,
//                         message: "Почта обязательна!",
//                       },
//                     }}
//                   />
//                   <View>
//                     {errors?.email && (
//                       <Text style={{ fontSize: 20, color: "red" }}>
//                         {errors?.email?.message || "Error"}
//                       </Text>
//                     )}
//                   </View>
//                   <View style={{ position: "relative" }}>
//                     <Controller
//                       control={control}
//                       render={({ field: { onChange, onBlur, value = "" } }) => (
//                         <TextInput
//                           style={styles.input}
//                           onBlur={onBlur}
//                           onChangeText={(value) => onChange(value)}
//                           value={value}
//                           placeholder={"Пароль"}
//                           secureTextEntry={isShowPassword}
//                           onFocus={() => setIsShowKeyBoard(true)}
//                           onSubmitEditing={() => keyBoardHide()}
//                         />
//                       )}
//                       name="password"
//                       rules={{
//                         required: {
//                           value: true,
//                           message: "Пароль обязателен!",
//                         },
//                         minLength: {
//                           value: 5,
//                           message: "Минимум 5 символов",
//                         },
//                       }}
//                     />
//                     <Text
//                       style={styles.showPassTitle}
//                       onPress={HandleshowPassword}
//                     >
//                       {isShowPassword ? "Показать" : "Скрыть"}
//                     </Text>
//                     <View>
//                       {errors?.password && (
//                         <Text style={{ fontSize: 20, color: "red" }}>
//                           {errors?.password?.message || "Error"}
//                         </Text>
//                       )}
//                     </View>
//                   </View>
//                 </View>

//                 <TouchableOpacity
//                   style={[styles.btn, styles.shadowProp]}
//                   activeOpacity={0.8}
//                   onPress={handleSubmit(onSubmit)}
//                 >
//                   <Text style={styles.btnTitle}>Зарегестрироваться</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//                   <Text style={styles.btnIsSignIn}>
//                     Уже есть аккаунт? Войти
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </KeyboardAvoidingView>
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }
