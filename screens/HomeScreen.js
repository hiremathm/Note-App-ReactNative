import React,{useState, useEffect, useContext} from 'react'
import {View ,Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import Form from './form'
import {globalStyles} from '../styles/global'
import Card from '../shared/card'

// Context
import {AuthContext} from '../components/context'


export default function HomeScreen({navigation}){
    const [modalOpen, setModalOpen] = useState(false)


    const {state, setAllNotes} = useContext(AuthContext)

    // console.log("STATE", state)
    const notes = state.notes
    // const [notes, setNotes] = useState(state.notes);

    const addNote = (review) => {
        review.key = Math.random(10000).toString();
        review["category"] = '5ec4a88106d10236454be3fd'
        AsyncStorage.getItem('userToken')
        .then(value => {
            fetch('https://keepnotesec.herokuapp.com/notes', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-auth': value
                    },
                    body: JSON.stringify(review)
                })
                .then(response => response.json()) 
                .then(response =>{} 
                    // console.log("POST RESPONSE",response)
                )
                .catch(error => {
                    console.log(error)
                })
            })
        setModalOpen(false)
        // setNotes([])
    }

    useEffect(() => {
        AsyncStorage.getItem('userToken')
        .then(token => {
        const url = 'https://keepnotesec.herokuapp.com/notes'
        fetch(url,{headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-auth': token
            }})
            .then(resp => resp.json())
            .then(resp => {
                let all_notes = resp.map(r => {
                    return {title: r.title, rating: 5, body: r.body, key:  r.title}
                })
                // console.log("NOTES sdfsdfs",all_notes)
                setAllNotes(all_notes)
                // setNotes(all_notes) 
            })    
        })
    }, [state, setAllNotes])

    return (
        <View style= {globalStyles.container}>

            <Modal visible = {modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                <MaterialIcons 
                    name = 'close'
                    size = {24}
                    style = {{...styles.modalToggle, ...styles.modelClose}}
                    onPress = {() => 
                        setModalOpen(false)
                    }
                />
                <Form addNote={addNote}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name = 'add'
                size = {24}
                style = {styles.modalToggle}
                onPress = {() => 
                    setModalOpen(true)
                }
            />

            <FlatList
                data={notes}
                renderItem={({item}) => (
                    <TouchableOpacity onPress = {() => {
                        navigation.navigate('Show',
						  {item: item}
          				)
                    }}>
                        <Card>
                            <Text style = {globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        alignSelf: 'center'
    },
    modelClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
    }
})