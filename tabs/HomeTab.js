import  React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

// SCREENS
import CategoriesStackScreen from '../screenstacks/CategoriesStackScreen'
import HomeStackScreen from '../screenstacks/HomeStackScreen'
import DetailsStackScreen from '../screenstacks/DetailsStackScreen'

const HomeTab = () =>{
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#009387"
      barStyle={{ backgroundColor: '#fff' }}

    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Keep Notes',
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
      
      <Tab.Screen
        name="Categories"
        component={CategoriesStackScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;