import React from 'react'
import {View, Text, StyleSheet, TextInput, Dimensions} from "react-native"
import Background from './Background'

const Field = (props) => {
  return (
        <TextInput {...props}
            style={styles.input}
            placeholder={props.placeholder}
            placeholderTextColor="#BFBFBF"
            onFocus={props.onFocus}
        />
  )
}

const styles = StyleSheet.create({
    input: {
        color: "#333",
        letterSpacing:1.2, 
        paddingHorizontal: 20,
        width: Dimensions.get('window').width*0.9,
        height:48,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderColor: '#BFBFBF',
        borderWidth: 1,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    }
})

export default Field