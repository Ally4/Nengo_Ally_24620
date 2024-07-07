// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import store from './app/store';
// import { Provider } from "react-redux";


// import LandingPage from './app/screens/landing-page/LandingPage';
// import Login from './app/screens/login/Login'
// import Signup from './app/screens/signup/Signup'




// const Stack = createNativeStackNavigator();


// const App = () => {
//   return (
//     <Provider store={store} >
//     <NavigationContainer options={{ headerShown: false }}>
//       <Stack.Navigator mode="modal" options={{ headerShown: false }}>
//       <Stack.Screen name="Home" component={LandingPage} options={{ headerShown: false }}/>    
//       <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
//       <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;




// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import MainTabNavigator from './app/screens/landing-page/LandingPage.js';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainTabNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;





import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './app/screens/MainTabNavigator'; // Adjust the path as needed

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default App;
