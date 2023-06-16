import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import Background from './Background'
import Button from './Button';
import Field from './Field';

const ScanNPay = (props) => {
    const windWidth = Dimensions.get('window').width-20;
    const windHeight = Dimensions.get('window').height-100;

    const [paymentAdviceNum, setPaymentAdviceNum] = useState("123");
    const [cid, setCid] = useState("")

    const scanHandler = () => {
        props.navigation.navigate("ScanNPay")
    }

    const paymentHandler = () => {
        props.navigation.navigate("PaymentAdvice")
    }

  return (
    <View style={{...styles.container, height: windHeight}}>
        <View style={{display:'flex', width:'100%', height:250, justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity onPress={scanHandler}>
                <Image source={require("./assets/qr.png")} style={{height:150, width:150, alignSelf:'center'}}  />
                <Text style={{textAlign:'center', fontSize: 16}}>Click to scan QR</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize:16, marginVertical:10}}>OR</Text>
            <View style={styles.field}>
                <Field  placeholder="Search by CID" keyboardType={"email-address"} onChangeText={(text) => setCid(text)} value={cid} />
            </View>
        </View>
        <View>
            <Text style={styles.paymentAdviceNum}>Payment Advice Number</Text>
            {paymentAdviceNum && <Text style={styles.paymentAdviceNum}>676634xxxx78</Text>}
        </View>
        <Button textColor="white" bgColor={"blue"} btnLabel="Get Payment Advice" onPress={paymentHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
    paymentAdviceNum: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 2,
        textAlign:'center',
        marginTop: 10
    },
    container: {
        // borderRadius: 30,
        // borderColor: 'blue',
        // borderWidth:2,
        // margin: 100
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-around'
    },
    field: {
        width: '100%',
        alignItems: 'center',
        marginHorizontal:'auto',
        
    }
    
   
})

export default ScanNPay