import React from 'react'
import {View, Text, StyleSheet, TextInput} from "react-native"
import Background from './Background'

const Field = (props) => {
  return (
        <TextInput {...props}
            style={styles.input}
            placeholderTextColor="#2e2e2e"
        />
  )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 100,
        color: "blue",
        paddingHorizontal: 20,
        width: '78%',
        backgroundColor: 'rgb(220, 220, 220)',
        marginVertical: 10,
        letterSpacing:1.2,
        fontWeight:'700'
    }
})

export default Field