import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {globalStyles} from '../styles/global'

function DetailsScreen({navigation}) {
  return (
    <View style={globalStyles.container}>
	  <Button title="Details Screen"/>
    </View>
  );
}

export default DetailsScreen;