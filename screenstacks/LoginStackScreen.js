import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import LoginScreen from '../screens/LoginScreen'

const LoginStack = createStackNavigator();

const LoginStackScreen = ({navigation}) => (
  <LoginStack.Navigator 
    screenOptions={
      {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }
    }
  >
    <LoginStack.Screen name = "Login" component = {LoginScreen} options = {
      {
        title: 'Login',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#f4511e" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )

      }
    }/>  
  </LoginStack.Navigator>
)

export default LoginStackScreen;