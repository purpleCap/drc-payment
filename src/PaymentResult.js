import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import PremiumTable, { Item } from "react-native-premium-table";
import Background from './Background'
import Button from './Button';
import Field from './Field';
import FruitGrid from './TableGrid';

const PaymentResult = (props) => {
    const windWidth = Dimensions.get('window').width-20;
    const windHeight = Dimensions.get('window').height-100;

    const [paymentAdviceNum, setPaymentAdviceNum] = useState("123");
    const [cid, setCid] = useState("")

    const scanHandler = () => {
        props.navigation.navigate("PaymentAdvice")
    }

    const paymentHandler = () => {
        props.navigation.navigate("PaymentAdvice")
    }

    const payHandler = () => {
        
    }

  return (
    <Background>
        <View style={{...styles.container, padding: 0}}>
            <View style={{display: 'flex', alignItems: 'center'}}>
                <View style={{...styles.messageContainer}}>
                    <Image source={require("./assets/check-mark.png")} style={styles.icon} />
                    <Text style={styles.textDetail}>Your payment for the advice is successful</Text>
                    <Text style={{...styles.textDetail, fontSize :14, marginBottom: 5}}>14 June 2023</Text>
                </View>
                <View style={styles.payersContainer}>
                    <View style={{paddingLeft: 10}}>
                        <Text style={styles.headingBold}>Transaction Reference Number</Text>
                        <Text style={{color:'#878484', marginTop: 4}}>TRN676634 XXXX78</Text>
                    </View>
                </View>
                <View style={{position: 'relative', borderColor:'#1AA3E8', borderWidth:1, marginTop: 20}}>
                    <View style={styles.b1}></View>
                    <View style={styles.b2}></View>
                    <Image source={require("./assets/qr.png")} style={styles.qr} />
                </View>
            </View>
            
            <Button textColor="white" bgColor={'#1AA3E8'} btnLabel="Download receipt" onPress={payHandler} />
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    b1: {
        height: 150,
        width: 212,
        backgroundColor:'#F1F9FF',
        position: 'absolute',
        zIndex:10,
        top:24,
        left:-4

    },
    b2: {
        height: 225,
        width: 160,
        backgroundColor:'#F1F9FF',
        position: 'absolute',
        zIndex:10,
        left: 18,
        top: -5

    },
    container: {
        display:'flex',
        justifyContent: 'space-between',
        height: Dimensions.get('window').height*0.84,
        alignItems: 'center'
    },

    messageContainer: {
        display: 'flex',
        height: Dimensions.get('window').height*0.24,
        width: Dimensions.get('window').width,
        backgroundColor: '#5EAA46',
        padding: 10,
        alignItems: 'center'
    },
    icon: {
        marginVertical:20, 
        height: Dimensions.get('window').width*0.16,
        width: Dimensions.get('window').width*0.16
    },
    textDetail: {
        color: '#FFFFFF',
        fontSize: 17,
        letterSpacing: 1,
        fontWeight:'500'
    },
    payersContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems :'center',
        padding: 12,
        borderRadius: 8,
        borderColor:"#E4E4E4BF",
        borderWidth:1,
        width: Dimensions.get('window').width*0.92,
        marginTop: 12
    },
    headingBold: {
        color: '#131313',
        letterSpacing: 1,
        fontSize: 16,
        fontWeight:'500'
    },

    qr: {
        height: Dimensions.get('window').width*0.50,
        width: Dimensions.get('window').width*0.50,
        zIndex:10,
        
    },

})

export default PaymentResult