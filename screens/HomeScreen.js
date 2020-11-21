import React from 'react'
import {View, Text, StyleSheet, Button, Tab } from 'react-native'
import {globalStyles} from '../styles/global'

function HomeScreen({navigation, route}) {
  return (
  	 <View style={globalStyles.container}>
            <Button title="Home screen"/>
        </View>
  );
}

export default HomeScreen;