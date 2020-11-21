import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import MyPostsScreen from '../screens/MyPostsScreen'

const MyPostsStack = createStackNavigator();

const MyPostsStackScreen = ({navigation}) => (
  <MyPostsStack.Navigator 
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
    <MyPostsStack.Screen name = "MyPosts" component = {MyPostsScreen} options = {
      {
        title: 'Posts',
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {40} backgroundColor = "#f4511e" onPress = {() => navigation.openDrawer()}>
          </Icon.Button>
        )

      }
    }/>  
  </MyPostsStack.Navigator>
)

export default MyPostsStackScreen;