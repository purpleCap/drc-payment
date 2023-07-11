import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Dimensions} from "react-native"
import Background from './Background'

const Field = (props) => {
    const [isFocus, setIsFocus] = useState(false);
  return (
        <TextInput {...props}
            style={[styles.input, isFocus && { borderColor: '#1C96E8' }]}
            placeholder={props.placeholder}
            placeholderTextColor="#BFBFBF"
            // onFocus={props.onFocus}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
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