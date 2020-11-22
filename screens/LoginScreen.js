import React from 'react'
import { Text, View,Button, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, Platform, StatusBar, Alert } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-community/async-storage'
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'

import { AuthContext } from '../components/context'

// Model
import users from '../model/user'

export default function LoignScreen({navigation}){

    const [data, setData] = React.useState({
        email: '',
        password: '',
        secureTextEntry: true,
        checkTextInputChange: false,
        isValidUsername: false,
        isValidPassword: false,
        errorMessage: '',
        isInvalidUser: false,
        disableSubmit: false
    })

    const { signIn } = React.useContext(AuthContext)

    const textInputChange = (val) => {
        let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val)

        if(!validEmail){
            setData({
                ...data,
                email: val,
                checkTextInputChange: false,
                isValidUsername: false,
                isInvalidUser: false,
                disableSubmit: false
            })
        }else{
            setData({
                ...data,
                email: val,
                checkTextInputChange: true,
                isValidUsername: false,
                isInvalidUser: false,
                disableSubmit: false
            })
        }
    } 
    const textPasswordChange = (val) => {
        var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;

        if(val.length >= 6 && val.match(passw)){
            setData({
                ...data,
                password: val,
                isValidPassword: false,
                isInvalidUser: false,
                disableSubmit: false

            })
        }else if(val.length > 6 && !val.match(passw)){
            setData({
                ...data,
                password: val,
                isValidPassword: true,
                isInvalidUser: false,
                disableSubmit: true
            })
        }else if(val.length === 0){
            setData({
                ...data,
                password: val,
                isValidPassword: false,
                isInvalidUser: false,
                disableSubmit: true
            })
        }
        // else{
        //     setData({
        //         ...data,
        //         password: val,
        //         isValidPassword: true,
        //         isInvalidUser: false,
        //         disableSubmit: true
        //     })
        // }
    }

    const handlePassword = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
            isInvalidUser: false
        })
    }

    const handleValidUser = (value) => {
        let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)

        console.log("valid email", validEmail)

        if(validEmail){
            setData({
                ...data,
                isValidUsername: false,
                checkTextInputChange: true,
                isInvalidUser: false,
                disableSubmit: false
            })
        }else{
            setData({
                ...data,
                isValidUsername: true,
                isInvalidUser: false,
                disableSubmit: true
            })
        }
    }

    const handleValidPassword = (value) => {
        if(value.trim().length < 6){
            setData({
                ...data,
                isValidPassword: true,
                isInvalidUser: false,
                disableSubmit: true
            })
        }else{
            setData({
                ...data,
                isValidPassword: false,
                isInvalidUser: false,
                disableSubmit: false
            })
        }
    }

    const loginHandle = (email, password) => {
        
        if( data.email.length === 0 || data.password.length === 0){
            Alert.alert("Invalid User!","Username or Password cannot be empty.", [{title: 'Okay'}])
            return;   
        }
    

        let obj = {}
        obj["email"] = email
        obj["password"] = password
        console.log("========================================================================================")
        console.log("LOGIN REQUEST", obj)
        console.log("========================================================================================")

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
            if(response.hasOwnProperty("errors")){
                setData({
                    ...data,
                    isInvalidUser: true,
                    disableSubmit: true,
                    errorMessage: response.errors
                })
                console.log("LOGIN RESPONSE", response)    
            }else{
                console.log("LOGIN RESPONSE", response)
                obj['username'] = email
                obj['userToken'] = response['token']
                console.log("========================================================================================")
                console.log("LOGIN RESPONSE OBJECT", obj)
                console.log("========================================================================================")
                signIn(obj)
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
                <Text style = {styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style = {styles.footer}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style = {styles.action}>
                    <FontAwesome 
                        name = "user-o"
                        color = "#05375a"
                        size = {20}
                    />

                    <TextInput 
                        placeholder = "Username"
                        style = {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => textInputChange(val)}
                        onEndEditing = {(event) => handleValidUser(event.nativeEvent.text)}
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
                {data.isValidUsername ? (
                    <Animatable.View animation = "fadeInLeft" duration = {500}>
                        <Text style = {styles.errorMsg}>
                            Please enter valid email.
                        </Text>
                    </Animatable.View>
                ) : (
                    null
                )}

                <Text style={{...styles.text_footer, marginTop: 35}}>Password</Text>
                <View style = {styles.action}>
                    <FontAwesome 
                        name = "lock"
                        color = "#05375a"
                        size = {20}
                    />

                    <TextInput 
                        secureTextEntry = {data.secureTextEntry}
                        placeholder = "Password"
                        style = {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => textPasswordChange(val)}
                        onEndEditing = {(event) => handleValidPassword(event.nativeEvent.text)}
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
                
                {data.isValidPassword ? (
                    <>
                    <View>
                        <Text>
                            Note: Password must be between 6 to 15 characters (which contain at least a numeric digit and a special character).
                        </Text>
                    </View>

                    <Animatable.View animation = "fadeInLeft" duration = {500}>
                        <Text  style = {styles.errorMsg}>Please enter valid password.</Text>
                    </Animatable.View>
                    </>
                ) : (
                    null
                )}

                {data.isInvalidUser ? (
                    <Animatable.View animation = "fadeInLeft" duration = {500}>
                        <Text style = {styles.errorMsg}>
                            {data.errorMessage}
                        </Text>
                    </Animatable.View>
                ) : (
                    null
                )}

                <View>
                    <TouchableOpacity onPress = {() => loginHandle(data.email, data.password)} style = {styles.signIn} disabled = {data.disableSubmit}>
                        <LinearGradient 
                            colors = {[
                                '#08d4c4','#01ab9d'
                            ]}
                            style = {{...styles.signIn,marginTop: 15}}
                        >
                            <Text style = {{...styles.textSign, color: "#fff" }}>
                                Sign In
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => navigation.navigate("SignupScreen")}
                        style={{...styles.signIn, borderColor: '#009387', borderWidth: 1, marginTop: 15}}
                    >   
                        <Text style = {{...styles.textSign, color: '#009387'}}>Sign Up</Text>
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
    },
    errorMsg: {
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        fontSize: 16
    }
});