import React, {useState} from 'react';
import {Modal, View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native"
import OTPVerify from './OTPVerify';

const SimpleModal = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const modalAction = (bool) => {
        props.modalFunc(bool)
        props.navigateTo("PaymentResult")
    }
    return (
        <SafeAreaView style={{...props.style}}>
            <Modal 
                transparent={true}
                animationType='fade'
                visible={props.show}
                onRequestClose={() => {modalAction(false)}}
            >
                <OTPVerify verify={modalAction} />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacity: {
        backgroundColor: 'orange',
        paddingHorizontal: 50
    },
    text: {
        marginVertical: 20,
        fontSize :20
    }
})

export default SimpleModal