import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import CategoriesScreen from '../screens/CategoriesScreen'

const CategoriesStack = createStackNavigator();

const CategoriesStackScreen = ({navigation}) => (
  <CategoriesStack.Navigator 
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
    <CategoriesStack.Screen name = "Categories" component = {CategoriesScreen} options = {
      {
        title: 'Categories',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#009387" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )

      }
    }/>  
  </CategoriesStack.Navigator>
)

export default CategoriesStackScreen;