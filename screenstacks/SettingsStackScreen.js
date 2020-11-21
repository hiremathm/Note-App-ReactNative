import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import SettingsScreen from '../screens/SettingsScreen'

const SettingsScreenStack= createStackNavigator();

const SettingsStackScreen = ({navigation}) => (
  <SettingsScreenStack.Navigator 
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
    <SettingsScreenStack.Screen name = "Settings" component = {SettingsScreen} options = {
      {
        title: 'Settings',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#f4511e" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }
    }/>  
  </SettingsScreenStack.Navigator>
)

export default SettingsStackScreen;