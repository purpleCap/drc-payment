import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Dimensions} from "react-native";

const Button = ({bgColor, btnLabel, textColor, onPress, style}) => {
  return (
    <TouchableOpacity style={{...styles.btn,  backgroundColor: bgColor, ...style }} onPress={onPress}>
        <Text style={{...styles.btnText, color: textColor}}>{btnLabel}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 5,
        alignItems: 'center',
        width: Dimensions.get('window').width*0.9,
        paddingVertical: 7,
        marginVertical:8,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal:10
    },
    btnText:{
        fontSize: 16,
        fontWeight:'400',
        letterSpacing: 1.2,
    }
})

export default Button