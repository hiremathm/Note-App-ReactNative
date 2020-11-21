import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import DetailsScreen from '../screens/DetailsScreen'

const DetailsStack = createStackNavigator();

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator 
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
    <DetailsStack.Screen name = "Details" component = {DetailsScreen} options = {
      {
        title: 'Details',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#f4511e" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }
    }/>  
  </DetailsStack.Navigator>
)

export default DetailsStackScreen;