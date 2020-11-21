import  React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

// SCREENS
import AccountStackScreen from '../screenstacks/AccountStackScreen'
import MyPostsStackScreen from '../screenstacks/MyPostsStackScreen'
import HomeStackScreen from '../screenstacks/HomeStackScreen'
import DetailsStackScreen from '../screenstacks/DetailsStackScreen'

const HomeTab = () =>{
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
{/*      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />*/}
      <Tab.Screen
        name="MyPosts"
        component={MyPostsStackScreen}
        options={{
          tabBarLabel: 'Posts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;