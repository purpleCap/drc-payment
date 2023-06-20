import React, {useState} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, TextInput, ScrollView, Pressable} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
// import PremiumTable, { Item } from "react-native-premium-table";
import Background from './Background'
import Button from './Button';
import Dropdown from './Dropdown';
import CustomDropdown from './CustomDropdown';
import Field from './Field';
import FruitGrid from './TableGrid';
import RoundButton from './RoundButton';


const BankSelection = (props) => {

    const [banks, setBank] = useState([
        {
            bank:'Bank of Bhutan',
            isSelected: false
        },
        {
            bank:'Bhutan Nation Bank',
            isSelected: false
        },
        {
            bank:'Druk Pnb',
            isSelected: false
        },
        {
            bank:'Bhutan Development Bank',
            isSelected: false
        }
    ])

    const [transition, setTransition] = useState(false);

    const payHandler = () => {
        props.navigation.navigate("PaymentResult")
    }


    const selectBank = (key) => {
        const updateState = banks.map((item, index) => {
            if(index != key) return ({...item, isSelected:false});
            else return ({...item, isSelected: true})
        })

        setBank([...updateState])
    }

  return (
    <Background>
         <View style={styles.container}>
            <View>
                <Field placeholder="Payer Name" />
                <Field placeholder="Amount" />
            </View>
            <ScrollView contentContainerStyle={{display: 'flex', alignItems:'flex-start', paddingHorizontal: 10, backgroundColor: '#fff', marginTop:12 }}>
                <Text style={styles.heading}>Please Select Bank</Text>
                <ScrollView>
                    {banks.map((item, index) => {
                        return (
                        <Pressable key={index} style={styles.bankContainer} onPress={() => selectBank(index)}>
                            <View style={{padding: 10, backgroundColor: item.isSelected ? '#1AA3E8':'#E4E4E4', borderRadius: 50}}>
                                {item.isSelected ? <Image source={require("./assets/bank.png")} style={styles.icon} /> :
                                <Image source={require("./assets/bank-1.png")} style={styles.icon} />}
                            </View>
                            <View style={{paddingLeft: 10}}>
                                <Text style={styles.bankName}>{item.bank}</Text>
                            </View>
                            <View style={{display:'flex', justifyContent:'center', marginLeft:'auto', paddingRight: 5}}>
                                {item.isSelected && <Image source={require("./assets/checked.png")} style={styles.checkedIcon} />}
                            </View>
                        </Pressable>
                        )
                    })}
                </ScrollView>
            </ScrollView>
            <View>
                <View style={{position:'relative'}}>
                    <Field placeholder="Account Number" onFocus={() => {setTransition(true)}} />
                    {/* <Text style={{position:'absolute', top: transition?-6:18, left: 20, letterSpacing:1.2, backgroundColor: '#fff',}}>Account Number</Text> */}
                </View>
                <Field placeholder="Enter OTP" />
            </View>
            <Button textColor="white" bgColor={'#1AA3E8'} btnLabel="Continue" onPress={payHandler} />
         </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent: 'space-between',
        height: Dimensions.get('window').height*0.84,
        alignItems: 'center',
        // backgroundColor: '#fff',
        // borderRadius: 8
    },
    icon: {
        height: 30,
        width: 30
    },
    checkedIcon: {
        height: 20,
        width: 20
    },
    bankContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal:5,
        backgroundColor: '#fff',
        borderColor:'#fff',
        borderBottomColor:"#E4E4E4",
        borderWidth: 1,
        width: Dimensions.get('window').width*0.84,

    },
    heading: {
        color: '#292929',
        fontSize: 18,
        marginTop: 5,
        marginBottom :4

    },
    bankName: {
        color: '#292929',
        fontSize: 16
    }

})

export default BankSelection