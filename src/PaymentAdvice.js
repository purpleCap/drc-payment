import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, FlatList, SafeAreaView} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
import PremiumTable, { Item } from "react-native-premium-table";
import Background from './Background'
import Button from './Button';
import Field from './Field';
import RoundButton from './RoundButton';
import PaymentAdviceService from './services/scanNpaymentadvice';
import FruitGrid from './TableGrid';
import { useRoute } from '@react-navigation/native';
import Loading from './Loading';


const windWidth = Dimensions.get('window').width-20;
const windHeight = Dimensions.get('window').height-100;

const PaymentAdvice = (props) => {


    const route = useRoute()
    let {info, idno, docno} = route.params;
    console.log("INFO", info)
    const [paymentAdviceNum, setPaymentAdviceNum] = useState("123");
    const [bankDetails, setBankDetails] = useState([]);
    const [cid, setCid] = useState("")
    const [total, setTotal] = useState(0);
    const [totalObj, setTotalObj] = useState({});
    const [loading, setLoading] = useState(true)


    const payHandler = () => {
        props.navigation.navigate("PaymentDetail", {info : info?.content, total: total})
    }

    useEffect(() => {
        calcSum(totalObj)
    }, [totalObj])

    useEffect(() => {
        PaymentAdviceService.getDetailsByDocumentNumber(idno, docno).then(res => {
            setLoading(false);
            const data = res.data;
            let bankDet = data.content.paymentAdviceheadDetailsList;
            console.log("detbank", bankDet)
            const f = bankDet.map(val => ({["id"]: val.paymentAdviceHeadDetailsId, ["pan"]:val.accountCode, ["amt"]:val.amount, ["date"]:val.createdOn}))
            console.log("f", f)
            setBankDetails(f)

        }).catch(err => {
            setLoading(false);
            console.log("ERROR ooo -> ", JSON.stringify(err))
        })
    }, [])

    const dateFormatter = (date) => {
        return new Date(date).toDateString();
    }

    function sumOf(id, val){
        console.log(totalObj[id]);
        if(totalObj[id] === undefined){
            setTotalObj((p) => ({...p, [id]:val}))
        } else {
            let filteredObj = {...totalObj};
            delete filteredObj[id];
            setTotalObj(filteredObj);
        }
    }

    const calcSum = (sumObj) => {
        const sumWithInitial = Object.values(sumObj).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        setTotal(sumWithInitial);
    }

    const renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <View style={{paddingLeft: 10}}>
                    <View>
                        <Text style={{color: '#131313', fontSize: 18, letterSpacing: 1.1}}>{item?.pan}</Text>
                    </View>
                    <View>
                        <Text>BTN {item?.amt} Payment advice - {dateFormatter(item?.date)}</Text>
                    </View>
                </View>
                <View style={{display:'flex', justifyContent:'center', marginLeft:'auto', paddingRight: 5}}>
                    <RoundButton bgColor="#1AA3E8" onPress={() => sumOf(item?.id, item?.amt)} />
                </View>
            </View>
        )
    }

  return (
    // <Background>
        <View style={styles.container}>
            <View style={styles.payersContainer}>
                <View style={{padding: 15, backgroundColor: '#1AA3E8', borderRadius: 20, paddingRight:10}}>
                    <Image source={require("./assets/user_icon.png")} style={styles.imageIcon} />
                </View>
                <View style={{paddingLeft: 10}}>
                    <Text style={styles.payersName}>{info?.content?.clientName}</Text>
                    <Text style={{marginTop :5}}>CID / Identity Document No: {info?.content?.clientIdentity}</Text>
                    <Text>TPN: {info?.content?.clientIdentity}</Text>
                </View>
            </View>
            {!loading && <SafeAreaView style={styles.flatListContainer}>
                <FlatList data={bankDetails} renderItem={renderItem} keyExtractor={item => item.id} />
            </SafeAreaView>}
            {loading && <Loading/>}
            <Button style={styles.bottomBtnStyle} textColor="white" bgColor={'#1AA3E8'} btnLabel="Proceed To Pay" onPress={payHandler} />
        </View>
    // </Background>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        height: Dimensions.get('window').height*0.84,
        alignItems: 'center',
        backgroundColor: '#F1F9FF',
        padding: 5,

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
        marginTop: windHeight*0.02
        
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
        flex: 1,
        borderBottomEndRadius: 10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        maxHeight: Dimensions.get("window").height*0.5,
        overflow:'hidden',
        marginTop: windHeight*0.03
    },
    bottomBtnStyle: {
        position: 'absolute',
        bottom: windHeight*0.03
    }
   
})

export default PaymentAdvice