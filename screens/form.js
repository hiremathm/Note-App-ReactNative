import React from 'react'
import {View ,Text, Button, TextInput} from "react-native";
import {globalStyles} from '../styles/global'
import { Formik } from 'formik'

import * as yup from 'yup'
const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('1to5','Rating must be between 1 to 5',(val) => {
            return parseInt(val) > 0 && parseInt(val) < 6;
        })
})
export default function Form ({addNote}){
    return (
        <View style={globalStyles.container}>
            <Formik initialValues={{title: '', body: '', rating: ''}}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    console.log(values)
                    addNote(values)
            }}>
                    {
                        (props) => (
                             <View>
                                 <TextInput 
                                    style={globalStyles.input}
                                    placeholder = 'Title'
                                    onChangeText={props.handleChange('title')}
                                    value={props.values.title}
                                    onBlur={props.handleBlur('title')}
                                 />
                                <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                                <TextInput 
                                    multiline minHeight={60}
                                    style={globalStyles.input}
                                    placeholder = 'Description'
                                    onChangeText={props.handleChange('body')}
                                    value={props.values.body}
                                    onBlur={props.handleBlur('body')}
                                 />
                                <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                                <TextInput 
                                    keyboardType='numeric'
                                    style={globalStyles.input}
                                    placeholder = 'Rating'
                                    onChangeText={props.handleChange('rating')}
                                    value={props.values.rating}
                                    onBlur={props.handleBlur('rating')}
                                 />
                                <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                                 <Button title = 'Submit' color = 'maroon' onPress={props.handleSubmit}/>
                             </View>
                        )
                    }
            </Formik>
        </View>
    )
}