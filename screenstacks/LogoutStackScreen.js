import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import LogoutScreen from '../screens/LogoutScreen'

const LogoutStack = createStackNavigator();

const LogoutStackScreen = ({navigation}) => (
  <LogoutStack.Navigator 
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
    <LogoutStack.Screen name = "Logout" component = {LogoutScreen} options = {
      {
        title: 'Logout',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#f4511e" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }
    }/>  
  </LogoutStack.Navigator>
)

export default LogoutStackScreen;