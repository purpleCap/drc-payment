import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, FlatList, ScrollView} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import PremiumTable, { Item } from "react-native-premium-table";
import Background from './Background'
import Button from './Button';
import Field from './Field';
import RoundButton from './RoundButton';
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

    const billData = [
        {
            id: 1,
            pan: '676634 XXXX78',
            amt: 3500,
            date: '14 June 2023'
        },
        {
            id: 2,
            pan: '676634 XXXX78',
            amt: 3500,
            date: '14 June 2023'
        },
        {
            id:3,
            pan: '676634 XXXX78',
            amt: 3500,
            date: '14 June 2023'
        },
        {
            id:4,
            pan: '676634 XXXX78',
            amt: 3500,
            date: '14 June 2023'
        },
        {
            id:5,
            pan: '676634 XXXX78',
            amt: 3500,
            date: '14 June 2023'
        },
        {
            id:6,
            pan: '676634 XXXX78',
            amt: 3500,
            date: '14 June 2023'
        },
        {
            id:7,
            pan: '676634 XXXX78',
            amt: 3500,
            date: '14 June 2023'
        },
        {
            id:8,
            pan: '676634 XXXX78',
            amt: 3500,
            date: '14 June 2023'
        },
    ]

    const renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <View style={{paddingLeft: 10}}>
                    <View>
                        <Text style={{color: '#131313', fontSize: 18, letterSpacing: 1.1}}>{item.pan}</Text>
                    </View>
                    <View>
                        <Text>BTN {item.amt} Payment advice - {item.date}</Text>
                    </View>
                </View>
                <View style={{display:'flex', justifyContent:'center', marginLeft:'auto', paddingRight: 5}}>
                    <RoundButton bgColor="#1AA3E8" onPress={() => {}} />
                </View>
            </View>
        )
    }

  return (
    <Background>
        <View style={styles.container}>
            <View style={styles.payersContainer}>
                <View style={{padding: 15, backgroundColor: '#1AA3E8', borderRadius: 20, paddingRight:10}}>
                    <Image source={require("./assets/user_icon.png")} style={styles.imageIcon} />
                </View>
                <View style={{paddingLeft: 10}}>
                    <Text style={styles.payersName}>Surojit Das</Text>
                    <Text style={{marginTop :5}}>CID / Identily Document No: 676634XX</Text>
                    <Text>TPN: XX78</Text>
                </View>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList data={billData} renderItem={renderItem} keyExtractor={item => item.id} />
            </View>
            <Button textColor="white" bgColor={'#1AA3E8'} btnLabel="Proceed To Pay" onPress={payHandler} />
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
        borderRadius: 10,
        width: Dimensions.get('window').width*0.92,
        borderColor:"#E4E4E4BF",
        borderWidth:1,
        
    },
    imageIcon: {
        height: 15,
        width: 15,
        backgroundColor: '#1AA3E8',
        borderRadius: 10,
        padding: 16
    },
    itemContainer: {
        display: 'flex',
        flexDirection :'row',
        borderColor: '#E4E4E4BF',
        borderWidth: 1,
        width: Dimensions.get('window').width*0.92,
        backgroundColor: '#FFF',
        paddingVertical:10
    },

    flatListContainer: {
        borderRadius: 10,
        maxHeight: Dimensions.get("window").height*0.5,
    }
   
})

export default PaymentAdvice