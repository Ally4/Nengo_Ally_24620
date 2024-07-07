// import Toast from 'react-native-toast-message';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
// import { signupStart, signupSuccess, signupFailure } from '../../features/auth/authSignupSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { Formik } from 'formik';
// import * as Yup from 'yup';




// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required().label("First Name"),
//   lastName: Yup.string().required().label("Last Name"),
//   email: Yup.string().required().label("Email"),
//   phoneNumber: Yup.string().required().label("Phone Number"),
//   armyNumber: Yup.string().required().label("Army Number"),
//   rank: Yup.number().required().label("Rank"),
// }) 


// export default function Signup() {

//   return (
//       <SafeAreaView style={styles.container}> 
//       <ScrollView >
//         <View style={{ width:250, height:250, borderRadius:150, opacity:0.2, top: -150, left:-90}}></View>
//         <View>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.nameForm}>
//         <View style={styles.signup}>

//         <Formik
//         initialValues={{firstName:'', lastName:'', email:'', phoneNumber:'', armyNumber:'', rank:'' }}
//         onSubmit={(values, { setErrors }) => handleSignup(values, { setErrors })}
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
//           placeholder={'First Name'}
//           onChangeText={handleChange("firstName")}
//           onBlur={() => setFieldTouched("firstName")}
//           />  
//           {touched.firstName && <Text style={{color:'red'}}>{errors.firstName}</Text>}
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
//           onChangeText={handleChange("lastName")}
//           type='lastName'
//           placeholder={'Last Name'}
//           onBlur={() => setFieldTouched("lastName")}
//           />
//           {touched.lastName && <Text style={{color:'red'}}>{errors.lastName}</Text>}
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
//           onChangeText={handleChange("email")}
//           type='email'
//           placeholder={'Email'}
//           onBlur={() => setFieldTouched("email")}
//           />
//                       <TextInput
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
//           placeholder={'Phone number'}
//           onChangeText={handleChange("phoneNumber")}
//           onBlur={() => setFieldTouched("phoneNumber")}
//           />  
//           {touched.phoneNumber && <Text style={{color:'red'}}>{errors.phoneNumber}</Text>}
//           <TextInput
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
//           placeholder={'Army number'}
//           onChangeText={handleChange("armyNumber")}
//           onBlur={() => setFieldTouched("armyNumber")}
//           />  
//           {touched.armyNumber && <Text style={{color:'red'}}>{errors.armyNumber}</Text>}
//           <TextInput
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
//           placeholder={'Rank'}
//           onChangeText={handleChange("rank")}
//           onBlur={() => setFieldTouched("rank")}
//           />  
//           {touched.rank && <Text style={{color:'red'}}>{errors.rank}</Text>}
//           {touched.confirmPassword &&  <Text style={{color:'red'}}>{errors.confirmPassword}</Text>}
//           {errors.server && <Text style={{ color: 'red' }}>{errors.server}</Text>}
//           <TouchableOpacity style={styles.button1}
//           onPress={handleSubmit}
//            > 
//             <Text style={styles.buttonText1}>Sign Up</Text>
//            </TouchableOpacity>
//             </>
//           )}
//         </Formik>
//            <View style={{ justifyContent:"center", alignItems:"center"}}>
//            <Text >Do you have an account?<TouchableOpacity onPress={() => navigation.navigate('Login')} ><Text style={{ color: '#076200', marginTop:2}}> Login</Text></TouchableOpacity></Text>
//            </View>
//         </View>
//         </View>
//         {error && <Text style={styles.errorText}>{error}</Text>}
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
// },
// buttonText: {
//   color: '#076200',
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
// logo : {
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginTop:-60,
// },
// nameForm : {
//   backgroundColor: '#ffffff',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderTopRightRadius: 15,
//   borderTopLeftRadius: 15,
//   paddingBottom:30,
// },
// errorText: {
//   color: 'red',
//   textAlign: 'center',
//   marginTop: 10,
// },
// })



import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => {}} />
      <Button
        title="Already have an account? Sign In"
        onPress={() => navigation.navigate('SignIn')}
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

export default SignUpScreen;



