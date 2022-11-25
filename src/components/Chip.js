import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chip = () => {
  return (
    <View style={styles.container}>
      <Text>Chip</Text>
    </View>
  )
}

export default Chip

const styles = StyleSheet.create({
    container:{
        width:50,
        backgroundColor:"gray"
    }
})