import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, TextInput} from "react-native"
import Background from './Background'
import Button from './Button';
import Field from './Field';

const OTP = (props) => {
    const windWidth = Dimensions.get('window').width;

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
  return (
    <Background>
        <Image style={styles.loginImage} source={require("./assets/Group_46.png")} />
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>DRC Payment</Text>
            <Text style={{fontSize: 16, fontWeight: '500', color: "#292929"}}>We have send OTP to 91-8017460145</Text>
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
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{color: '#292929'}}>Don't get OTP?{" "}</Text>
                <Text style={{color: '#1C96E8', fontWeight: '500'}}>Resend Now</Text>
            </View>
        </View>
         
        <View style={styles.btnContainer}>
            <Button bgColor={'#1AA3E8'} btnLabel="Verify & Proceed" textColor="#fff" />
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 54,
        fontWeight: "bold",
        marginVertical: 20,
    },
    titleStyle: {
        color:"#1C96E8",
        fontWeight:'600',
        fontSize: 35,
        textAlign:'center',
        marginTop: '-2%'
    },
    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginImage: {
        marginTop: '10%',
        width:'90%',
        height: '45%',
    },
    fieldContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 16
    },

    iconImage: {
        height: 47,
        width: 47,
        position:'absolute',
        right: 0,
        top: 6,
        borderTopRightRadius:4,
        borderBottomRightRadius:4,
    },
    btnContainer: {
        paddingBottom: 15
    },

    otpContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 40
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
    }
    
})

export default OTP