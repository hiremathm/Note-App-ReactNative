import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator 
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
    <HomeStack.Screen name = "Home" component = {HomeScreen} options = {
      {
        title: 'Home',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#f4511e" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )

      }
    }/>  
  </HomeStack.Navigator>
)

export default HomeStackScreen;