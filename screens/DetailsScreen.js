import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {globalStyles} from '../styles/global'

function DetailsScreen({navigation}) {
  
  return (
    <View style={globalStyles.container}>
	    <Text>Details screen</Text>
	    <Text></Text>

	  	<Button title="Details Screen" onPress = {() => navigation.goBack()}/>
    </View>
  );
}

export default DetailsScreen;