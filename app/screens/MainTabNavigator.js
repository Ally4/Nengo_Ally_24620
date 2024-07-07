import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from './signup/Signup';
import LoginScreen from './login/Login';
import CalculatorScreen from './calculator/CalculatorScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
