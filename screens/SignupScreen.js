import React from 'react'
import { Text, View,Button, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, Platform, StatusBar } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-community/async-storage'
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'

export default function SignupScreen({navigation}){

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        secureTextEntry: true,
        secureConfirmTextEntry: true,
        checkTextInputChange: false
    })

    const textInputChange = (val) => {
        if(val.length !== 0 && (val.includes("@")) && (val.includes("."))){
            setData({
                ...data,
                email: val,
                checkTextInputChange: true
            })
        }else{
            setData({
                ...data,
                email: val,
                checkTextInputChange: false
            })
        }
    } 
    const textPasswordChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                password: val
            })
        }
    }

    const handlePassword = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const textConfirmPasswordChange = (val) => {
        if(val.length !== 0){
            setData({
                ...data,
                confirmPassword: val
            })
        }
    }

    const handleConfirmPassword = () => {
        setData({
            ...data,
            secureConfirmTextEntry: !data.secureConfirmTextEntry
        })
    }

    const sendLoginRequest = (obj) => {
        fetch('https://snotemern.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(response => {
            let token = response['token']
            console.log("GET TOKEN RESPONSE",token)
            if(token){
                AsyncStorage.setItem('token',token) 
                navigation.navigate('Home')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <View style = {styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style = {styles.header}>
                <Text style = {styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View style = {styles.footer}   animation="fadeInUpBig">
                <Text style={styles.text_footer}>Email</Text>
                <View style = {styles.action}>
                    <FontAwesome 
                        name = "user-o"
                        color = "#05375a"
                        size = {20}
                    />

                    <TextInput 
                        placeholder = "Your Email"
                        style = {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => textInputChange(val)}
                    />
                    { 
                        data.checkTextInputChange ?                
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name = "check-circle"
                                color = "green"
                                size = {20}
                            />
                       </Animatable.View>
                        : 
                        null
                    }
                </View>
                <Text style={{...styles.text_footer, marginTop: 35}}>Password</Text>
                <View style = {styles.action}>
                    <FontAwesome 
                        name = "lock"
                        color = "#05375a"
                        size = {20}
                    />

                    <TextInput 
                        secureTextEntry = {data.secureTextEntry}
                        placeholder = "Your Password"
                        style = {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => textPasswordChange(val)}
                    />
                    
                    <TouchableOpacity onPress = {handlePassword}>
                        
                        {data.secureTextEntry ? 
                            <Feather 
                                name = "eye-off"
                                color = "grey"
                                size = {20}
                            />
                        : 
                            <Feather 
                                name = "eye"
                                color = "grey"
                                size = {20}
                            />
                        }
                    </TouchableOpacity>
                </View>


                <Text style={{...styles.text_footer, marginTop: 35}}>Confirm Password</Text>
                <View style = {styles.action}>
                    <FontAwesome 
                        name = "lock"
                        color = "#05375a"
                        size = {20}
                    />

                    <TextInput 
                        secureTextEntry = {data.secureConfirmTextEntry}
                        placeholder = "Your Password"
                        style = {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => textConfirmPasswordChange(val)}
                    />
                    
                    <TouchableOpacity onPress = {handleConfirmPassword}>
                        
                        {data.secureConfirmTextEntry ? 
                            <Feather 
                                name = "eye-off"
                                color = "grey"
                                size = {20}
                            />
                        : 
                            <Feather 
                                name = "eye"
                                color = "grey"
                                size = {20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <LinearGradient 
                        colors = {[
                            '#08d4c4','#01ab9d'
                        ]}
                        style = {{...styles.signIn,marginTop: 15}}
                    >
                        <Text style = {{...styles.textSign, color: "#fff", }}>
                            Sign Up
                        </Text>
                    </LinearGradient>

                    <TouchableOpacity
                        onPress = {() => navigation.navigate("LoginScreen")}
                        style={{...styles.signIn, borderColor: '#009387', borderWidth: 1, marginTop: 15}}
                    >   
                        <Text style = {{...styles.textSign, color: '#009387'}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#009387"  
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection:'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 20,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10        
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});