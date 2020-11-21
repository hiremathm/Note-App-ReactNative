import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {globalStyles} from '../styles/global'

function MyPostsScreen({navigation}) {
  return (
    <View style={globalStyles.container}>
	  <Button title="MyPosts Screen"/>
    </View>
  );
}

export default MyPostsScreen;