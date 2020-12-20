import  React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Button,StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage'

// Drawer Content
import DrawerContent from './screens/DrawerContent'

// Tabs
import HomeTab from './tabs/HomeTab'

// Root Stack 
import RootStackScreen from './screenstacks/RootStackScreen'

// Context
import {AuthContext} from './components/context'

// Screens
import SettingsStackScreen from './screenstacks/SettingsStackScreen'
import AccountStackScreen from './screenstacks/AccountStackScreen'

const Drawer = createDrawerNavigator();

function App() {
  // const [isLoading, setIsloading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }
  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState, isLoading: false, userToken: action.token
        };
      case 'LOGIN':
        return {
          ...prevState, isLoading: false, userToken: action.token,userName: action.id
        };

      case 'LOGOUT':
        return {
          ...prevState, isLoading: false, userToken: null,userName: null
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)


  const authContext = useMemo(() => ({
      signIn: async(user) => {
        // setUserToken('lkjsdlfsdjlf')
        // setIsloading(false)

        let userToken;
        userToken = null;

        // if(userName === 'username' && password === 'password'){
          try{
            userToken = String(user.userToken);
            await AsyncStorage.setItem('userToken', userToken)
          }catch(e){
            console.log("LOGIN ERROR IN USE MEMO", e)
          }
        // }

        dispatch({type: 'LOGIN', id: user.username, token: userToken})
      },
      signOut: async () => {
        // setUserToken(null)
        // setIsloading(false)
         
        try{
          await AsyncStorage.removeItem('userToken')
          dispatch({type: 'LOGOUT'})        
        }catch(e){
          console.log("LOGOUT ERROR", e)
        }

      },
      signUp: (user) => {
        // setUserToken('lkjsdlfsdjlf')
        // setIsloading(false)
        console.log("REGISTERED USER IS ", user)
        dispatch({type: 'REGISTER', id: user.name})
      }  
    }), [])

  useEffect(() => {
    setTimeout(async() => {
      // setIsloading(false)
      let token;
      token = null;
      try{
        token = await AsyncStorage.getItem('userToken')
      }catch(e){
        console.log("TOKEN ERROR IN RENDER", e)
      }

      console.log("TOKEN IN RENDER ", token)

      dispatch({type: 'RETRIEVE_TOKEN', token: token})

    },1000)
  },[])

  if( loginState.isLoading ) {
    console.log("is loading is ", loginState.isLoading)
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Loading</Text>
        <ActivityIndicator style={{opacity: 1.0}} animating={true} size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        <StatusBar backgroundColor="#009387" barStyle="light-content"/>

        {
          loginState.userToken !== null ? (
            <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
              <Drawer.Screen name = "My Home" component = {HomeTab}/>
              <Drawer.Screen name="SettingsScreen" component={SettingsStackScreen} />
              <Drawer.Screen name="AccountScreen" component={AccountStackScreen} />
            </Drawer.Navigator>
          ) 
          : 
          (
            <RootStackScreen/>
          )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App;



// https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialCommunityIcons.json