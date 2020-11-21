import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import AccountScreen from '../screens/AccountScreen'

const AccountStack = createStackNavigator();

const AccountStackScreen = ({navigation}) => (
  <AccountStack.Navigator 
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
    <AccountStack.Screen name = "Account" component = {AccountScreen} options = {
      {
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#f4511e" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }
    }/>  
  </AccountStack.Navigator>
)

export default AccountStackScreen;