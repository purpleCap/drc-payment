import React, {useState, useCallback, useEffect} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Background from './Background'
import Button from './Button';
import Field from './Field';
import PaymentAdviceService from './services/scanNpaymentadvice';
import axios from 'axios';
import Scanner from './ScannerScreen';
import Loading from './Loading';

const windWidth = Dimensions.get('window').width-20;
const windHeight = Dimensions.get('window').height-100;

const ScanNPay = (props) => {
    const windWidth = Dimensions.get('window').width-20;
    const windHeight = Dimensions.get('window').height-100;
    const [paymentAdviceNum, setPaymentAdviceNum] = useState("");
    const [documentNumber, setDocumentNumber] = useState("");
    const [cid, setCid] = useState("")
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [status, setStatus] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [infoData, setInfoData] = useState("")
    const [loading, setLoading] = useState(false);
    const [showMessage, setShowMessahe] = useState("");
 

    const scanHandler = () => {
        // props.navigation.navigate("Scanner");
        setStatus(true)
    }

    const paymentHandler = (id, docNo) => {
        setLoading(true);
        setShowMessahe("");
        PaymentAdviceService.getDetailsByDocumentNumber(id, docNo).then(res => {
            setLoading(false)
            const data = res.data;
            console.log("data || ", data)
            if(data.status !== null){
                setShowMessahe("");
                setPaymentAdviceNum(data.content.paymentAdviceNo)

                setTimeout(() => {
                    props.navigation.navigate("PaymentAdvice", {info: data, idno: id, docno: docNo});
                }, 1000)
            } else {
                setShowMessahe(data.message);
            }
            
        }).catch(err => {
            setLoading(false)
            console.log("ERROR -> ", JSON.stringify(err))
        })
    }

    const data = [
        { label: 'CID', value: '1' },
        { label: 'TPN', value: '2' },
        { label: 'Payment Advice', value: '3' },
      ];

const giveResponse = (data) => {
    console.log("DATA ||||| ", data)
    let details = {};
    if(data?.data){
        // details = JSON.parse(JSON.stringify('{'+info.data.replaceAll("\n",",")+'}')) ;
        const detailInfo = data.data.replaceAll("\n",":").split(":");
        const filtered = detailInfo.map(val => val.trim())
        for(let i=0; i<(filtered.length/2); i++){
            details = {...details, [filtered[i]]:filtered[i+1]}
        }

        try {
            console.log("HELLO", details["Payment Advice No"]?.trim());
            // setInfoData(details);
            paymentHandler(4, details["Payment Advice No"]?.trim());
            setDocumentNumber(details["Payment Advice No"]?.trim())
        } catch(err){
            console.log(err)
        }

    }
}


if(status){
    return <Scanner giveResponse={giveResponse} setStatus={setStatus}  />
} else {
    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                {/* <View style={{...styles.container}}> */}
                    <View style={{flex: 1, alignItems: 'center', marginTop: 20, height: Dimensions.get('window').width*0.8,}}>
                        <TouchableOpacity onPress={scanHandler}>
                            <Image source={require("./assets/Group_22.png")} style={{alignSelf:'center',  height:Dimensions.get('window').width*0.3, width: Dimensions.get('window').width*0.3, justifyContent:'space-between', alignItems:'center'}}  />
                        </TouchableOpacity>
                        <View style={styles.orContainer}>
                            <Text style={{fontWeight: 'bold', fontSize:16, marginVertical:10, color: '#000'}}>OR</Text>
                        </View>
                        <View style={{width: Dimensions.get('window').width*0.9}}>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: '#1C96E8' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Search by' : '...'}
                                searchPlaceholder="Search..."
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    setIsFocus(false);
                                }}
                            />
                            <View style={{...styles.field, position: 'relative'}}>
                                <Field placeholder="" keyboardType={"email-address"} value={documentNumber} onChangeText={(text) => setDocumentNumber(text)} />
                                {showMessage && <Text  style={styles.warningAlert}>{showMessage}</Text>}
                            </View>
                        </View>
                        
                    </View>
                    {!loading && paymentAdviceNum && <View style={styles.panConatainer}>
                            <Text style={styles.paymentAdviceNum}>PAYMENT ADVICE NUMBER</Text>
                            <Text style={styles.paymentAdv}>{paymentAdviceNum}</Text>
                    </View>}
                    {loading && <Loading/>}
                    <Button style={styles.bottomBtnStyle} textColor="white" bgColor={'#1AA3E8'} btnLabel="Get Payment Advice" onPress={() => paymentHandler('4', documentNumber)} />
                {/* </View> */}
            </ScrollView>
        </Background>
      )
}
 
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
        flex: 1,
        height: Dimensions.get('window').height*0.84,
        alignItems: 'center',
        backgroundColor: '#F1F9FF',
        padding: 5,
    },
    field: {
        width: '100%',
        alignItems: 'center',
        marginHorizontal:'auto',
        
    },
    panConatainer : {
        position: 'absolute',
        bottom: windHeight*0.10,
        borderRadius: 10,
        backgroundColor: "#fff",
        // paddingHorizontal: Dimensions.get('window').width*0.2,
        paddingVertical: 20,
        marginHorizontal: Dimensions.get('window').width*0.04,
        marginVertical: Dimensions.get('window').height*0.04,
        borderWidth: 1,
        borderColor: '#BFBFBF',
        width: windWidth*0.9,
    },
    orContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginVertical: Dimensions.get('window').height*0.024,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderColor: "#D4D4D4",
        borderWidth: 1,
    },
    dropdown: {
        height: 50,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderColor: '#BFBFBF',
        borderWidth: 1,
        marginBottom: 10
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        color: "#BFBFBF",
        letterSpacing:1.2, 
        paddingHorizontal: 10,
        fontSize: 16
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      bottomBtnStyle: {
        position: 'absolute',
        bottom: windHeight*0.03
      },
      warningAlert: {
        color: '#a40e4c',
        fontSize: 14,
        letterSpacing: 1.1,
        textAlign: 'left'
      }
    
   
})

export default ScanNPay