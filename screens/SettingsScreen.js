import React from 'react'
import {Button,View} from 'react-native'
import {globalStyles} from '../styles/global'

function SettingsScreen({navigation}) {
  return (
    <View style={globalStyles.container}>
            <Button title="Setting screen"/>
        </View>
  );
}

export default SettingsScreen;