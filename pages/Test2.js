import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Test2 extends React.Component{
    render(){
        return(
            <View>
                <Text style={{fontSize: 30}}>BK > MCDonalds</Text>
                <Button title="<= Back Home"
                onPress = {() => this.props.navigation.navigate("Home")}
                ></Button>
            </View>
        );
    }
}