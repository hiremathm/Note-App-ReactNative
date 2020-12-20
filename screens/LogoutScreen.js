import React from 'react'
import {View,Button, Text} from 'react-native'
import {globalStyles} from '../styles/global'
import AsyncStorage from '@react-native-community/async-storage'

import { AuthContext } from '../components/context'


export default function LogoutScreen({navigation}){
    const { signOut } = React.useContext(AuthContext)

    const sendLogoutRequest = () => {
        AsyncStorage.getItem('token')
            .then(token => {
                if(token){
                    fetch('https://keepnotesec.herokuapp.com/users/logout', {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'x-auth': token                                                                          
                        }
                    })
                    .then(response => response.json())                                                                                                
                    .then(response => {                                                                         
                        console.log('Logout response', response)    
                        signOut()              
                        navigation.navigate('Login')                                  
                    })
                    .catch(error => {
                        console.log('Logout error', error)
                    })
                }else{
                   navigation.navigate('Login')
                }
           })
    }

    return (
        <View style={globalStyles.container}>
            <Button title="Logout screen" onPress={sendLogoutRequest}/>
        </View>
    )
}