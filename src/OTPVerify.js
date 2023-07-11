import React, {useRef, useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, SafeAreaView, Dimensions, StyleSheet, TextInput} from "react-native";
import Button from './Button';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150
const OTPVerify = (props) => {

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const [pin1, setPin1] = useState("")
    const [pin2, setPin2] = useState("")
    const [pin3, setPin3] = useState("")
    const [pin4, setPin4] = useState("")
    useEffect(() => {
        pin1Ref.current.focus();
    },[])

    const navigateNCloseModal = () => {
        props.verify(false)
    }

  return (
    <TouchableOpacity disabled={true} style={styles.container}>
        <View style={styles.modal}>
            <View style={{borderColor: '#000', borderWidth:1}}>
                <Text style={{...styles.heading}}>Enter OTP</Text>
            </View>
            <View style={{...styles.otpContainer}}>
                <View style={styles.otpInputWrap}>
                    <TextInput
                        ref={pin1Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin) => {
                            setPin1(pin);
                            if(pin !== ""){
                                pin2Ref.current.focus();
                            }
                        }}
                        style={styles.textInputOtp}
                        />
                </View>
                <View style={styles.otpInputWrap}>
                    <TextInput
                        ref={pin2Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin) => {
                            setPin2(pin);
                            if(pin !== ""){
                                pin3Ref.current.focus();
                            }
                        }}
                        style={styles.textInputOtp}
                        />
                </View>
                <View style={styles.otpInputWrap}>
                    <TextInput 
                        ref={pin3Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin) => {
                            setPin3(pin);
                            if(pin !== ""){
                                pin4Ref.current.focus();
                            }
                        }}
                        style={styles.textInputOtp}
                    />
                </View>
                <View style={styles.otpInputWrap}>
                    <TextInput
                        ref={pin4Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin) => {
                            setPin4(pin);
                        }}
                        style={styles.textInputOtp}
                    />
                </View>
            </View>
        <Button bgColor={'#1AA3E8'} btnLabel="Verify" textColor="#fff" style={{width: '95%', marginTop: 12}} onPress={navigateNCloseModal} />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor : '#555',
        position:'relative',
    },
    modal: {
        height: HEIGHT_MODAL+25,
        width: WIDTH - 80,
        paddingTop :10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#BFBFBF',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
        position:'absolute',
        zIndex:9,
        opacity: 1
    },
    otpContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 40,
    },

    otpInputWrap: {
        width: 50,
        borderBottomWidth :2,
        borderBottomColor: '#1C96E8',
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal:6
    },

    textInputOtp: {
        fontSize: 30,
        color:"#292929"
    },

    heading: {
        textAlign :'center',
        fontSize :16,
        color: 'black',
        fontWeight: '500',
        letterSpacing :1
    }
})
export default OTPVerify