import { View, Text, StyleSheet, SafeAreaView, Button, Pressable } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>FASHI<Text style={{color: '#CD1515'}}>ON</Text> APP</Text>
        <Text style={styles.text2}>Where combination becomes fashion </Text>
      </View>
      <View style={styles.Button}>
        <Button title='Lets Get Started' />
      </View>
      <Text style={{marginTop: 100}}>Powered by Joe</Text>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 260,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text1: {
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: '5%',
      marginLeft: 47,
    },
    text2: {
      marginTop: 40,
      fontSize: 16,
      fontWeight: '500',
      fontStyle: 'italic'
    },
    Button: {
      marginTop: 70,
    }
})