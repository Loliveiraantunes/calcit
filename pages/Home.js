
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';


export default class Home extends React.Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
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
        color: "#f3f9f2",
    }

});
