import React from 'react'
import {View, StyleSheet, ImageBackground, Image} from 'react-native'

const image = {uri: 'https://reactjs.org/logo-og.png'}

const Background = (props) => {
  return (
    <View style={styles.backgroundStyle}>
        {/* <ImageBackground source={require("./assets/background.jpg")} style={styles.image}/> */}
        <View style={{position: 'absolute'}}>
            {props.children}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height: "100%"
    },
    backgroundStyle: {
      backgroundColor: '#F0F8FE',
      height:'100%'
    }

})

export default Background