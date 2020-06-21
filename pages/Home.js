
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Style from '../assets/styles'

export default class Home extends React.Component{
    render(){
        return (
            <SafeAreaView style={Style.container}>
                <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <ScrollView>
                    <Text style={{fontSize: 30}}>Hello World!</Text>
                    <TouchableOpacity style={styles.button} 
                    onPress = {() => this.props.navigation.navigate("Splash")}>
                        <Text style={styles.txtButton}> Back home </Text>
                    </TouchableOpacity>
                    <Text style={{height: 30}} />
                    <TouchableOpacity style={styles.button}
                    onPress ={() => this.props.navigation.navigate("Truth")}>
                        <Text style={styles.txtButton}>Go to Truth</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    button: {
        width: '100%',
        alignItems: "center",
        backgroundColor: "#ff5725",
        padding: 10,
        fontSize: 22,
        color: "#3f2e29",
        borderRadius: 10,
    },

    txtButton: {
        fontWeight: "bold",
        color: "#f3f9f2",
    }

});
