// import 'react-native-gesture-handler';
// import axios from 'axios';
// import React, { useEffect, useState} from 'react';
// import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux'; 
// import { useNavigation } from '@react-navigation/native';

// import { loginStart, loginSuccess, loginFailure } from '../../features/auth/authLoginSlice'; 
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as WebBrowser from 'expo-web-browser';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// WebBrowser.maybeCompleteAuthSession();  

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().label("Email or Password"),
//   password: Yup.string().required().min(4).label("Password"),
// }) 

// export default function Login() {


//   return (
//       <SafeAreaView style={styles.container}>
//         <ScrollView > 
//         <View style={{width:250, height:250, borderRadius:150, opacity:0.2, top: -150, left:-90}}></View>
//         <View>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image source={require("../../../assets/left-chevron.png")} style={{ marginTop: -190, marginLeft: 10, width: 20, height: 20 }} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.nameForm}>
//         <View style={styles.login}>
//         <Formik
//         initialValues={{email:'', password:'' }}
//         onSubmit={(values, { setErrors }) => handleLogin(values, { setErrors })}
//         validationSchema={validationSchema}
//         >
//           {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
//             <>
//             <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#076200",
//             borderWidth:1,
//             width:300,
//             marginTop:20,
//           }}
//           autoCapitalize='none'
//           placeholder={'Email'}
//           onChangeText={handleChange("email")}
//           onBlur={() => setFieldTouched("email")}
//           />  
//           {touched.email && <Text style={{color:'red'}}>{errors.email}</Text>}
//           <TextInput
//           style={{
//             backgroundColor: 'white',
//             padding: 10,
//             borderRadius: 5,
//             borderColor:"#076200",
//             borderWidth:1,
//             width:300,
//             marginTop:10,
//           }}
//           autoCapitalize='none'
//           secureTextEntry={true}
//           onChangeText={handleChange("password")}
//           type='password'
//           onBlur={() => setFieldTouched("password")}
//           placeholder={'Password'}
//           />
//           {touched.password && <Text style={{color:'red'}}>{errors.password}</Text>}
//           {errors.server && <Text style={{ color: 'red' }}>{errors.server}</Text>}
//           <TouchableOpacity style={styles.button1}
//           onPress={handleSubmit}
//            > 
//             <Text style={styles.buttonText1}>Login</Text>
//            </TouchableOpacity>
//             </>
//           )}
//         </Formik>
//            <Text>Do you have an account?<TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{ color: '#076200', marginTop:2}}> Signup</Text></TouchableOpacity></Text>
//         </View>    
//         </View>       
//         </ScrollView>  
//       </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"#076200",
// },
// button: {
//   backgroundColor: 'white',
//   padding: 10,
//   borderRadius: 5,
//   width:300,
//   marginLeft:40
// },
// button2: {
//   backgroundColor: 'white',
//   padding: 10,
//   borderRadius: 5,
//   width:300,
//   borderWidth: 2,
//   borderColor: "#076200",
// },
// buttonText: {
//   color: '#000',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// button1: {
//   backgroundColor: '#076200',
//   padding: 10,
//   borderRadius: 5,
//   borderColor:"white",
//   borderWidth:2,
//   width:300,
//   marginTop:20,
// },
// buttonText1: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// line: {
//   height: 1,
//   width: '40%',
//   backgroundColor: '#076200',
//   marginTop:20,
// },
// lineBox: {
//   marginLeft:150,
// },
// nameForm : {
//   backgroundColor: '#ffffff',
//   display:'flex',
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderTopRightRadius: 15,
//   borderTopLeftRadius: 15,
// },
// login : {
//   display:'flex',
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// remember : {
//   display:'flex',
//   flex: 1,
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginTop: 20,
// },
// lines : {
//   display:'flex',
//   flex: 1,
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginVertical: 20,
//   width: '60%',
// },
// horizontalLine: {
//   width: '20%',
//   height: 1.5,
//   backgroundColor: 'black', 
// },
// logo : {
//   display:'flex',
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginVertical: 20,
// },
// forgot : {
//   color: '#076200',
//   textDecorationLine: 'underline',
// },
// check : {
//   color:'#076200',
//   backgroundColor: 'transparent'
// }
// })




import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign In" onPress={() => {}} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SignInScreen;
