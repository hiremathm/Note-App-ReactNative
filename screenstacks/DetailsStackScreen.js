import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import DetailsScreen from '../screens/DetailsScreen'

const DetailsStack = createStackNavigator();

const DetailsStackScreen = ({route,navigation}) => (

  <DetailsStack.Navigator 
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
    <DetailsStack.Screen name = "Details" options = {
      {
        title: 'Details',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#009387" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }
    } >  
    {props => <DetailsScreen {...props} />}

    </DetailsStack.Screen>
  </DetailsStack.Navigator>
)

export default DetailsStackScreen;