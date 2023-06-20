import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, ScrollView} from "react-native"
import Background from './Background'
import Button from './Button';
import Field from './Field';

const Signup = (props) => {
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
        <ScrollView style={{flex: 1}}>
            <Image style={styles.loginImage} source={require("./assets/567.png")} />
  
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>DRC Payment</Text>
                <Text style={{fontSize: 15, fontWeight: '500', color:"#131313"}}>Please fill the following to register</Text>
            </View>
            
            <View style={styles.fieldContainer}>
                <View style={{position: 'relative'}}>
                    <Field placeholder="CID" />
                    <Image source={require("./assets/Group_50.png")} style={styles.iconImage} />
                </View>
                <View style={{position: 'relative'}}>
                    <Field placeholder="DOB"/>
                    <Image source={require("./assets/Group_49.png")} style={styles.iconImage} />
                </View>
                <View style={{position: 'relative'}}>
                    <Field placeholder="Name"/>
                    <Image source={require("./assets/Group_12.png")} style={styles.iconImage} />
                </View>
                <View style={{position: 'relative'}}>
                    <Field placeholder="Mobile No"/>
                    <Image source={require("./assets/Group_47.png")} style={styles.iconImage} />
                </View>
                <View style={styles.btnContainer}>
                    <Button bgColor={'#1AA3E8'} btnLabel="Get OTP" textColor="#fff" onPress={() => props.navigation.navigate("OTP")} />
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{color: '#292929'}}>Already have an account?{" "}</Text>
                            <Text style={{color: '#1C96E8', fontWeight: '500'}} onPress={() => props.navigation.navigate("Login")}>Login</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        marginTop: '8%',
        width:'95%',
        maxHeight: '45%',
    },
    fieldContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 16,
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
        marginTop: 16,
        paddingBottom :16
    }
    
})

export default Signup