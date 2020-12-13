import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

export default function SwiperComponent() {
    return (
        <Swiper
            style = {StyleSheet.wrapper}
            dotStyle = {{
                margin: -200,
                width: 15,
                height: 5,
                borderRadius: 10,
                backgroundColor: "#fff",

            }}
            activeDotColor = "#fff"
            activeDotStyle = {{
                marginTop: -200,
                width: 30,
                height:6,
                borderRadius: 10,
                backgroundColor: "#fff",
                activeDotColor: "#fff"
            }}
            >
            
            <View style = {style.slide}>
                <Image 
                    source = {require('../images/img-1.png')}
                    style = {{
                        marginLeft:120,
                        marginBottom:130,
                        width:420,
                        height: 720,
                        marginTop:60,
                        resizeMode: "stretch"
                    }}    
                    >

                </Image>
            </View>
            <View style = {style.slide}>
                <Image 
                    source = {require('../images/img2.png')}
                    style = {{
                        marginLeft:120,
                        marginBottom:130,
                        width:420,
                        height: 720,
                        marginTop:60,
                        resizeMode: "stretch"
                    }}    
                    >

                </Image>
            </View>
            <View style = {style.slide}>
                <Image 
                    source = {require('../images/img.png')}
                    style = {{
                        marginLeft:120,
                        marginBottom:130,
                        width:420,
                        height: 720,
                        marginTop:60,
                        resizeMode: "stretch"
                    }}    
                    >

                </Image>
            </View>
            
        </Swiper>
    )
}

const style = StyleSheet.create({
    wrapper:{},
    slide:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
})