import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import PremiumTable, { Item } from "react-native-premium-table";
import Background from './Background'
import Button from './Button';
import Field from './Field';
import FruitGrid from './TableGrid';

const PaymentAdvice = (props) => {
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
        props.navigation.navigate("PaymentDetail")
    }

  return (
    <View style={{...styles.container, height: windHeight, justifyContent: 'center', alignSelf:'center'}}>
        <View style={{alignItems:'center', marginVertical: 10}}>
            <View style={{display: 'flex', flexDirection:'row'}}>
                <Text style={{fontSize: 16, fontWeight:'500'}}>Payers Name:</Text>
                <Text style={{fontSize: 16, fontWeight:'500', color: 'blue'}}>{" "}Ankit Singh</Text>
            </View>
            <View style={{display: 'flex', flexDirection:'row'}}>
                <Text style={{fontSize: 16, fontWeight:'500'}}>CID / Identity Document Number</Text>
                <Text style={{fontSize: 16, fontWeight:'500', color: 'blue'}}>{" "}345555678</Text>
            </View>
        </View>
        {/* <View style={{}}> */}
            <FruitGrid/>
        {/* </View> */}
        <Button textColor="white" bgColor={"blue"} btnLabel="Proceed To Pay" onPress={payHandler} />
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

export default PaymentAdvice