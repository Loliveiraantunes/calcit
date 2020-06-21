import React, {Component} from 'react';
import Style from '../assets/styles'
import {View, Text, Button, StyleSheet, TouchableOpacity,StatusBar} from 'react-native';

const txtTruth = "BK > McDonalds"

export default class Truth extends React.Component{
    render(){
        return(
            <View style={Style.container}>
                <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <Text style={{fontSize: 30}}>{txtTruth}</Text>
                <TouchableOpacity style = {styles.button}
                onPress = {() => this.props.navigation.navigate("Home")}>
                    <Text style={styles.txtButton}>Back Home</Text> 
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 185,
        alignItems: "center",
        backgroundColor: "#ff5725",
        padding: 10,
        fontSize: 22,
        color: "#3f2e29",
        borderRadius: 10,
    },
    txtButton: {
        fontWeight: "bold",
        color: "#f3f9f2"
    }
});