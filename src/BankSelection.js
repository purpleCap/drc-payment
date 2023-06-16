import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, TextInput} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
// import PremiumTable, { Item } from "react-native-premium-table";
import Background from './Background'
import Button from './Button';
import Dropdown from './Dropdown';
import CustomDropdown from './CustomDropdown';
import Field from './Field';
import FruitGrid from './TableGrid';


const BankSelection = (props) => {
    const windWidth = Dimensions.get('window').width-20;
    const windHeight = Dimensions.get('window').height-100;

    const [paymentAdviceNum, setPaymentAdviceNum] = useState("123");
    const [cid, setCid] = useState("")

    const radio_props = [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
      ];

    const payHandler = () => {
        props.navigation.navigate("PaymentResult")
    }

  return (
    <View style={{...styles.container, height: windHeight, justifyContent: 'center', alignSelf:'center'}}>
        <View style={{ marginVertical: 10}}>
            <View style={{display: 'flex', flexDirection:'row'}}>
                <Text style={{fontSize: 20, fontWeight:'500'}}>Payers Name</Text>
                <Text style={{fontSize: 20, fontWeight:'500', color: 'blue'}}>{" "}Ankit Singh</Text>
            </View>
            <View style={{display: 'flex', flexDirection:'row'}}>
                <Text style={{fontSize: 20, fontWeight:'500'}}>Amount</Text>
                <Text style={{fontSize: 20, fontWeight:'500', color: 'blue'}}>{" "}100</Text>
            </View>
            <View style={{display: 'flex'}}>
                <Text style={{fontSize: 20, fontWeight:'500'}}>Select Bank</Text>
                <View>
                </View>
            </View>
            <View style={{display: 'flex'}}>
                <Text style={{fontSize: 20, fontWeight:'500'}}>Account Number</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={{display: 'flex'}}>
                <Text style={{fontSize: 20, fontWeight:'500'}}>Enter OTP</Text>
                <TextInput style={styles.input} />
            </View>
        </View>
        <Button textColor="white" bgColor={"blue"} btnLabel="Continue" onPress={payHandler} />
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
    },
    input: {
        borderRadius: 10,
        color: "blue",
        paddingHorizontal: 20,
        width: '50%',
        backgroundColor: 'rgb(220, 220, 220)',
        marginVertical: 5,
        letterSpacing:1.2,
        fontWeight:'300'
    }
    
   
})

export default BankSelection