import React from 'react'
import {TouchableOpacity, View, StyleSheet, Text, Dimensions, Image} from 'react-native'
import {globalStyles} from '../styles/global'

// import LinearGradient from 'react-native-linear-gradient'
import {LinearGradient} from 'expo-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function SplashScreen({navigation}) {

  return (
    <View style = {styles.container}>
	    <View style = {styles.header}>
	    	<Image
	    		source = {require('../assets/logo.jpg')}
	    		style = {styles.logo}
	    		resizeMode = "stretch"
	    	/>
	    </View>

	    <View style = {styles.footer}>
	    	<Text style = {styles.title}>Stay connected with everyone!</Text>
	    	<Text style = {styles.text}>Sign in With Account</Text>
	    	<View style = {styles.button}>
		    	<TouchableOpacity onPress = {()=> navigation.navigate('LoginScreen')}>
		    		<LinearGradient 
		    			colors = {['#08d4c4', '#01ab9d']}
		    			style = {styles.signIn}
		    		>
		    			<Text style = {styles.textSign}>
		    				Get Started
		    			</Text>

		    			<MaterialIcons 
		    				name = "navigate-next"
		    				color = "#fff"
		    				size = {20}
		    			/>
		    		</LinearGradient>
		    	</TouchableOpacity>
	    	</View>
	    </View>
    </View>
  );
}

const {height, width} = Dimensions.get("screen")
const height_logo = height * 0.50;
const width_logo = width * 0.90
const styles = StyleSheet.create({
  container: {
  	flex: 1, 
  	backgroundColor: "#009387"	
  },
  header: {
  	flex: 2,
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  footer: {
  	flex: 1,
  	backgroundColor: '#fff',
  	borderTopRightRadius: 30,
  	borderTopLeftRadius: 30,
  	paddingVertical: 50,
  	paddingHorizontal: 50
  },
  logo: {
  	width: width_logo,
  	height: height_logo,
  	borderRadius: 50
  },
  title: {
  	color: '#05375a',
  	fontSize: 30,
  	fontWeight: 'bold'
  },
  text: {
  	color: 'grey',
  	marginTop: 5
  },
  button: {
  	alignItems: 'flex-end',
  	marginTop: 30
  },
  signIn: {
  	width: 150,
  	height: 40,
  	justifyContent: 'center',
  	alignItems: 'center',
  	borderRadius: 50,
  	flexDirection: 'row'
  },
  textSign: {
  	color: 'white',
  	fontWeight: 'bold'
  }

})
export default SplashScreen;