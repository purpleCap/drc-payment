import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image} from "react-native"
import { useRoute } from '@react-navigation/native';
import PremiumTable, { Item } from "react-native-premium-table";
import Background from './Background'
import Button from './Button';
import Field from './Field';
import FruitGrid from './TableGrid';

const PaymentDetail = (props) => {
    const windWidth = Dimensions.get('window').width-20;
    const windHeight = Dimensions.get('window').height-100;

    const route = useRoute()
    let {info, total} = route.params;

    const scanHandler = () => {
        props.navigation.navigate("PaymentAdvice")
    }

    const paymentHandler = () => {
        props.navigation.navigate("PaymentAdvice")
    }

    const payHandler = () => {
        props.navigation.navigate("BankSelection")
    }

  return (
    <Background>
        <View style={styles.container}>
            <View>
                <View style={styles.payersContainer}>
                    <View style={{padding: 15, backgroundColor: '#1AA3E8', borderRadius: 20, paddingRight:10}}>
                        <Image source={require("./assets/user_icon.png")} style={styles.imageIcon} />
                    </View>
                    <View style={{paddingLeft: 10}}>
                        <Text style={styles.payersName}>{info.clientName}</Text>
                        <Text style={{marginTop :5}}>CID / Identily Document No: {info.clientIdentity}</Text>
                        <Text>TPN: {info.clientIdentity}</Text>
                    </View>
                </View>
                <View style={styles.payersDetail}>
                    <Text style={{color: "#878484", fontSize: 15}}>CID / Identily Document No:</Text>
                    <Text style={styles.pan}>{info.clientIdentity}</Text>
                </View>
                <View style={styles.payersDetail}>
                    <Text style={{color: "#878484", fontSize: 15}}>TPN:</Text>
                    <Text style={styles.pan}>{info.clientIdentity}</Text>
                </View>
                <View style={{...styles.payersDetail, borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
                    <Text style={{color: "#878484", fontSize: 15}}>Amount:</Text>
                    <Text style={styles.pan}>BTN {total}</Text>
                </View>
            </View>
            <Button  textColor="white" bgColor={'#1AA3E8'} btnLabel="Proceed To Pay" onPress={payHandler} />
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent: 'space-between',
        height: Dimensions.get('window').height*0.84,
        alignItems: 'center'
    },

    payersName: {
        color: '#131313',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing : 1.3
    },
    payersContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        // justifyContent: 'space-between',
        alignItems :'center',
        padding: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor:"#E4E4E4BF",
        borderWidth:1,
        width: Dimensions.get('window').width*0.92,
        
    },
    imageIcon: {
        height: 15,
        width: 15,
        backgroundColor: '#1AA3E8',
        borderRadius: 10,
        padding: 16
    },
   
    payersDetail: {
        display: 'flex',
        backgroundColor: '#fff',
        padding: 12,
        borderColor:"#E4E4E4BF",
        borderWidth:1,
        width: Dimensions.get('window').width*0.92,
    },
    pan: {
        fontSize: 18,
        color: '#131313',
        fontWeight: '400',
        letterSpacing: 1,
        marginTop:3
    }
})

export default PaymentDetail