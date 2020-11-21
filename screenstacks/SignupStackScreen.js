import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import SignupScreen from '../screens/SignupScreen'

const SignupStack = createStackNavigator();

const SignupStackScreen = ({navigation}) => (
  <SignupStack.Navigator 
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
    <SignupStack.Screen name = "Signup" component = {SignupScreen} options = {
      {
        title: 'Signup',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#f4511e" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )

      }
    }/>  
  </SignupStack.Navigator>
)

export default SignupStackScreen;