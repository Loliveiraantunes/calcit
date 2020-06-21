import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Style from '../assets/styles'

export default class Truth extends React.Component{
    render(){
        return(
            <View style={Style.container}>
                <Text style={{fontSize: 30}}>BK > MCDonalds</Text>
                <Button title="<= Back Home"
                onPress = {() => this.props.navigation.navigate("Home")}
                ></Button>
            </View>
        );
    }
}