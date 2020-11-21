import React from 'react'
import {View, Text, StyleSheet,Button, TextInput, Keyboard } from 'react-native'


function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  const sendPost = () => {
  	Keyboard.dismiss()
  	navigation.navigate('Home', {post: postText})
  }

  return (
  	<>
  		<TextInput 
  			multiline
  			placeholder = "What is about your post?"
	        style={{ height: 60, padding: 10,margin: 10, backgroundColor: 'white' }}
	        value={postText}
	        onChangeText={setPostText}
  		/>
  		<View 
	        style={{ height: 30, padding: 10,margin: 10}}
  		>
  			<Button title = "Submit" onPress = {sendPost}/>
  		</View>
  	</>
  )
}

export default CreatePostScreen;