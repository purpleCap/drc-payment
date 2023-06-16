import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity} from "react-native"
import Background from './Background'
import Button from './Button';
import Field from './Field';

const Login = (props) => {
    const windWidth = Dimensions.get('window').width;

    const [cid, setCid] = useState("");
    const [password, setPassword] = useState("")

    const loginHandler = () => {
        if(cid === '123456' && password === '123456'){
            props.navigation.navigate("ScanNPay");
        }
    }
  return (
    <Background>
        <View style={{...styles.textContainer, width: windWidth}}>
            <Text style={styles.text}>Login</Text>
        </View>
        <View style={{...styles.loginContainer, width: windWidth}}>
            <Text style={styles.titleLogin}>DRC Payment</Text>
            <Text style={styles.textLogin}>Login to your account</Text>
            <Field placeholder="Email / Username" keyboardType={"email-address"} onChangeText={(text) => setCid(text)} value={cid} />
            <Field placeholder="password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password} />
            <View style={styles.forgotContainer}>
                <Text style={styles.forgotPassText}>Forgot Password ?</Text>
            </View>

            <Button textColor="white" bgColor={"blue"} btnLabel="Login" onPress={loginHandler} />
            <View style={styles.signupContainer}>
                <Text styles={{fontSize: 16, fontWeight: 'bold'}}>Don't have an account ?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                    <Text style={styles.signupStyleText}>Signup</Text>
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

export default Login