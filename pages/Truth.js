import React, {Component} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import Style from '../assets/styles'

export default class Truth extends React.Component{
    render(){
        return(
            <View style={Style.container}>
                <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <Text style={{fontSize: 30}}>BK > MCDonalds</Text>
                <Button title="<= Back Home"
                onPress = {() => this.props.navigation.navigate("Home")}
                ></Button>
            </View>
        );
    }
}