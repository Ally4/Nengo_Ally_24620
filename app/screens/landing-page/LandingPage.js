// import * as React from 'react';
// import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

// export default function LandingPage({navigation}) {
//   return (
//   <SafeAreaView style={styles.container}>
//     <ScrollView >
//       <View style={{ width:250, height:250, borderRadius:150, opacity:0.2, top: -170, left:-90}}></View>
//       <View style={styles.landing}>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Signup')}>
//         <Text style={styles.buttonText1}>Sign Up</Text>
//       </TouchableOpacity>
//       </View>
//     </ScrollView>
//   </SafeAreaView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     backgroundColor:"#076200",
// },

// landing: {
//   display:'flex',
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: 1,
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
// })





import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from '../login/Login';
import SignUpScreen from '../signup/Signup';
import CalculatorScreen from '../calculator/CalculatorScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="SignIn" component={SignInScreen} options={{ tabBarLabel: 'Sign In' }} /> */}
      {/* <Tab.Screen name="SignUp" component={SignUpScreen} options={{ tabBarLabel: 'Sign Up' }} /> */}
      <Tab.Screen name="Calculator" component={CalculatorScreen} options={{ tabBarLabel: 'Calculator' }} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
