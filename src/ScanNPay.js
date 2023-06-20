import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, ScrollView} from "react-native"
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
    <Background>
        <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}>
            {/* <View style={{...styles.container}}> */}
                <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
                    <TouchableOpacity onPress={scanHandler}>
                        <Image source={require("./assets/Group_22.png")} style={{alignSelf:'center',  height:Dimensions.get('window').width*0.4, width: Dimensions.get('window').width*0.4, justifyContent:'space-between', alignItems:'center'}}  />
                    </TouchableOpacity>
                    <View style={styles.orContainer}>
                        <Text style={{fontWeight: 'bold', fontSize:16, marginVertical:10}}>OR</Text>
                    </View>
                    <View style={{...styles.field, position: 'relative'}}>
                        {/* <Text style={{position: 'absolute', color:'#333', bottom:15, left:10}}>Search by CID</Text> */}
                        <Field placeholder="Search by CID" keyboardType={"email-address"} onChangeText={(text) => setCid(text)} value={cid} />
                    </View>
                </View>
                <View style={styles.panConatainer}>
                    <Text style={styles.paymentAdviceNum}>PAYMENT ADVICE NUMBER</Text>
                    <Text style={styles.paymentAdv}>676634xxxx78</Text>
                </View>
                <Button textColor="white" bgColor={'#1AA3E8'} btnLabel="Get Payment Advice" onPress={paymentHandler} />
            {/* </View> */}
        </ScrollView>
    </Background>
  )
}

const styles = StyleSheet.create({
    paymentAdviceNum: {
        marginTop:10,
        color: "#1AA3E8",
        fontSize: 16,
        textAlign: 'center'
    },
    paymentAdv: {
        textAlign: 'center',
        color: '#1C1B1B',
        fontSize: 18
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
        
    },
    panConatainer : {
        borderRadius: 10,
        backgroundColor: "#fff",
        // paddingHorizontal: Dimensions.get('window').width*0.2,
        paddingVertical: 20,
        marginHorizontal: Dimensions.get('window').width*0.04,
        marginVertical: Dimensions.get('window').height*0.04
    },
    orContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderColor: "#D4D4D4",
        borderWidth: 1,

    }
    
   
})

export default ScanNPay