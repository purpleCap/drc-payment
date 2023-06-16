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
    <View style={{...styles.container, height: windHeight, justifyContent: 'center', alignSelf:'center'}}>
        <Text style={styles.paymentAdviceNum}>Your payment for the payment advice is successful.</Text>
        <Text style={{textAlign: 'center', fontSize:16}}>The transaction reference number is 12345678</Text>
        <Image source={require("./assets/qr.png")} style={{height:150, width:150, alignSelf:'center'}}  />
        <Button textColor="white" bgColor={"blue"} btnLabel="Download recipt" onPress={payHandler} />
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
        // display: 'flex',
        // alignItems:'center',
        // justifyContent: 'space-around'
    },
    field: {
        width: '100%',
        alignItems: 'center',
        marginHorizontal:'auto',    
    }
    
   
})

export default PaymentResult