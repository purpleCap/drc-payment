import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color='#1C96E8' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });

export default Loading