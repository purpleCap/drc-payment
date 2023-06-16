import React from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Alert} from "react-native"
import Background from './Background'
import Button from './Button';
import Field from './Field';

const Signup = (props) => {
    const windWidth = Dimensions.get('window').width;

    const otpHandler = () => {
        // props.navigation.navigate("Login")
    }

  return (
    <Background>
        <View style={{...styles.textContainer, width: windWidth}}>
            <Text style={styles.text}>Signup</Text>
        </View>
        <View style={{...styles.loginContainer, width: windWidth}}>
            <Text style={styles.titleLogin}>DRC Payment</Text>
            <Text style={styles.textLogin}>Signup for an account</Text>
            <Field placeholder="CID" keyboardType={"email-address"} />
            <Field placeholder="DOB" keyboardType="date" />
            <Field placeholder="Name" keyboardType={"email-address"} />
            <Field placeholder="Mobile Number" keyboardType={"numeric"} />
            {/* <View style={styles.forgotContainer}>
                <Text style={styles.forgotPassText}>Forgot Password ?</Text>
            </View> */}

            <Button textColor="white" bgColor={"blue"} btnLabel="Get OTP" onPress={otpHandler} />
            <View style={styles.signupContainer}>
                <Text styles={{fontSize: 16, fontWeight: 'bold'}}>Already have an account ?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.signupStyleText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 54,
        fontWeight: "bold",
        marginVertical: 20
    },
    textContainer: {
        alignItems: "center",
        width: 460
    },
    loginContainer: {
        backgroundColor: 'white',
        height: 700,
        width: "100%",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        paddingTop: 100,
        alignItems: 'center',
        opacity: 0.9
    },
    textLogin: {
        color: "grey",
        fontSize: 19,
        fontWeight: "bold",
        marginBottom:20
    },
    titleLogin: {
        fontSize: 30, color: "blue", fontWeight: "bold"
    },
    forgotContainer: {
        alignItems: 'flex-end',
        width: '78%',
        paddingRight: 16,
        marginBottom:100
    },
    forgotPassText: {
        color: "blue",
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 1.2
    },
    signupContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 2,
        alignItems: 'center'
    },
    signupStyleText: {
        color: 'blue',
        fontWeight: 'bold',
        letterSpacing: 1.2,
        marginLeft: 2,
        fontSize: 16
    }
})

export default Signup