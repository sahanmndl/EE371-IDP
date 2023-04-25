import React from "react";
import {Image, Text, View} from "react-native";

const SplashView = () => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Image
                style={{height: 100, width: 100, marginBottom: 20}}
                source={require('../../assets/logo.png')}
            />
            <Text style={{fontSize: 32, fontWeight: "700"}}>
                EE371-IDP
            </Text>
            <Text style={{marginTop: 16, fontSize: 14, color: '#212121'}}>
                Sahan Mondal
            </Text>
            <Text style={{fontSize: 14, color: '#212121'}}>
                Tanishq Mohan Mehta
            </Text>
            <Text style={{fontSize: 14, color: '#212121'}}>
                Shivank Shukla
            </Text>
            <Text style={{fontSize: 14, color: '#212121'}}>
                Aditya Mishra
            </Text>
        </View>
    )
}

export default SplashView