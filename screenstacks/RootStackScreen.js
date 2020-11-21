import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import SplashScreen from '../screens/SplashScreen'

const RootStack = createStackNavigator();

const RootStackStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode = "none">
    <RootStack.Screen name = "SplashScreen" component = {SplashScreen}/>
    <RootStack.Screen name = "LoginScreen" component = {LoginScreen}/>
    <RootStack.Screen name = "SignupScreen" component = {SignupScreen}/>
  </RootStack.Navigator>
)

export default RootStackStackScreen;