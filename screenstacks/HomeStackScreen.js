import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import ShowScreen from '../screens/ShowScreen'

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator 
    screenOptions={
      {
        headerStyle: {
          backgroundColor: '#009387',
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
        title: 'Keep Notes',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#009387" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )

      }
    }/> 

     <HomeStack.Screen name = "Show" component = {ShowScreen} options = {
      {
        title: '',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#009387" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )

      }
    }/>  
  </HomeStack.Navigator>
)

export default HomeStackScreen;