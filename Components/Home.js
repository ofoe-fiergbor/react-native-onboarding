import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.homeScreenContainer}>
                    <Text style={styles.headingText}>ONLINE SHOPPING</Text>
                <View>
                    <Text style={styles.paragraphText}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ducimus odit assumenda officia. Quam eos nam, alias possimus aperiam,
                        est voluptatum ipsam tempore quo dolor ab delectus repudiandae officia,
                        in quisquam?
                    </Text>
                </View>
                <View>
                    <Image source={require('./../assets/images/onlineShopping.png')} style={styles.image}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.swiperContainer}>
                    <TouchableOpacity style={[styles.swiper, styles.swiperHover]}></TouchableOpacity>
                    <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                    <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                    <Text style={styles.skipText}>Skip</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeScreenContainer:{},
    headingText:{
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10
    },
    paragraphText:{
        color: '#b1bab3',

    },
    image:{
        width: 220,
        height: 250,
        alignSelf: 'center',
        marginVertical: 15
    },
    button:{
        width: 150,
        height: 50,
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: '#8470c4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },
    swiperContainer:{
        flexDirection: 'row',
        position:'absolute',
        top: 540,
        alignSelf: "center"
    },
    swiper:{
        backgroundColor: '#b6a5cc',
        height: 7,
        width:7,
        borderRadius: 40,
        marginHorizontal: 1
    },
    swiperHover:{
        backgroundColor: '#735d8f',
        width: 14
    },
    skipText:{
        position:'absolute',
        left: 160,
        bottom: -10,
        color: '#b8b2bf'
    }
})
