import React from 'react'
import {View, StyleSheet, ImageBackground, Image, Dimensions, ScrollView} from 'react-native'

const image = {uri: 'https://reactjs.org/logo-og.png'}

const Background = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.backgroundStyle}>
            {props.children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F1F9FF',
      padding: 10,
      // height:Dimensions.get('window').height,
      // width: Dimensions.get('window').width,
    }

})

export default Background