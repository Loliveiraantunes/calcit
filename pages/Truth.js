import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity,StatusBar} from 'react-native';
import mainStyle from '../assets/scripts/styles';

const txtTruth = "BK > McDonalds"

export default function Truth({navigation}){
    
    return(
        <View style={mainStyle.container}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Text style={mainStyle.txtDescription}>{txtTruth}</Text>
            <TouchableOpacity style = {mainStyle.button}
            onPress = {() => navigation.navigate("Home")}>
                <Text style={mainStyle.txtButton}>Back Home</Text> 
            </TouchableOpacity>
        </View>
    );
}
