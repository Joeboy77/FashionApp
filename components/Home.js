import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import { ScrollView } from 'react-native';


export default function Home() {
  return (
    <ScrollView>
    <SafeAreaView>
        <View style={styles.head}>
            <Text style={styles.text1}>FASHI<Text style={{color: '#CD1515'}}>ON</Text></Text>
            <FontAwesome name="shopping-cart" size={24} color="black" />
        </View>
        <View style={styles.head2}>
            <Text>WOMAN</Text>
            <Text>MAN</Text>
            <Text>KIDS</Text>
        </View>
        <View style= {styles.border}></View>
        <View style={styles.main1}>
            <Image source={image1} style={{marginLeft: 90, width: 'auto', height: '100%'}}/>
            <AntDesign name="hearto" size={30} color="black" style={{marginTop: -50, marginLeft: 20}}/>
        </View>
        <View style={styles.details}>
            <Text style={styles.deText1}>Red Long Dress</Text>
            <Text style={styles.deText2}>$60.00</Text>
        </View>
        <View style={styles.stars}>
            <AntDesign name="star" size={20} color="black" />
            <AntDesign name="star" size={20} color="black" />
            <AntDesign name="star" size={20} color="black" />
            <AntDesign name="star" size={20} color="black" />
            <AntDesign name="star" size={20} color="#AAAAAA" />
            <Text style={{paddingLeft: 6, fontSize: 18}}>( 4.0 )</Text>
        </View>
        <Text style={{marginLeft: 20, marginTop: 10}}>Lorem ipsum dolor sit amet, consectetur
        </Text>
        <Text style={{marginLeft: 20}}>adipiscing elit.</Text>
        <View style={styles.main2}>
        <Image source={image2} style={{marginLeft: 90, width: 'auto', height: '100%'}}/>
        <AntDesign name="hearto" size={30} color="black" style={{marginTop: -40, marginLeft: 20}}/>
        </View>
    </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
    text1: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    head2: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around',
        marginTop: 20,
        marginLeft: 5
    },
    border: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    main1: {
        width: 365,
        height: 253,
        backgroundColor: '#EDBD98',
        marginLeft: 10,
        marginTop: 20,
        borderRadius: '15'
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
    deText1: {
        fontSize: 18,
        fontWeight: '600'
    },
    deText2: {
        color: '#E33535',
        fontSize: 18,
        fontWeight: '600'
    },
    stars: {
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginTop: 10,
    },
    main2: {
        width: 365,
        height: 253,
        backgroundColor: '#BCBABA',
        marginLeft: 10,
        marginTop: 20,
        borderRadius: '15'
    },
})
