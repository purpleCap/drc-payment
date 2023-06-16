import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const Button = ({bgColor, btnLabel, textColor, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.btn,  backgroundColor: bgColor }} onPress={onPress}>
        <Text style={{...styles.btnText, color: textColor}}>{btnLabel}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 10,
        alignItems: 'center',
        width: 350,
        paddingVertical: 7,
        marginVertical:8
    },
    btnText:{
        fontSize: 20,
        fontWeight:'500',
        letterSpacing: 1.2
    }
})

export default Button