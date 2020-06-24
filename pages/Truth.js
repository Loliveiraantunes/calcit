import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity,StatusBar} from 'react-native';
import mainStyle from '../assets/scripts/styles';

const txtTruth = "BK > McDonalds"

export default class Truth extends React.Component{
    render(){
        return(
            <View style={mainStyle.container}>
                <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <Text style={mainStyle.txtDescription}>{txtTruth}</Text>
                <TouchableOpacity style = {mainStyle.button}
                onPress = {() => this.props.navigation.navigate("Home")}>
                    <Text style={mainStyle.txtButton}>Back Home</Text> 
                </TouchableOpacity>
            </View>
        );
    }
}
