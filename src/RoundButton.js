import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Dimensions} from "react-native";

const RoundButton = ({bgColor, btnLabel, textColor, onPress}) => {
    const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity style={{...styles.btn,  backgroundColor: pressed ? bgColor : '#FFFFFF' }} onPress={() => {onPress(); setPressed((p) => !p)}}>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 10,
        borderColor: '#666',
        borderWidth: 1,
        alignItems: 'center',
        width: 20,
        height: 20,
        paddingVertical: 7,
        marginVertical:8,
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

export default RoundButton