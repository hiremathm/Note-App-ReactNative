import React from 'react'
import {Image,View ,Text, Button,StyleSheet} from "react-native";
import {globalStyles} from '../styles/global'

import Card from '../shared/card'

export default function ShowScreen({route, navigation}){
    const {item} = route.params
    
    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <>
            <View style={globalStyles.container}>
                <Card  style = {styles.body}>
                    <Text>{item.title}</Text>
                    <Text>{item.body}</Text>
                </Card>
            </View>
            <View  style = {styles.button}>
            <Button title = "Back" onPress = {pressHandler} color= "#009387"/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    rating: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    }
})