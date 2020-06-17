
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Test extends React.Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 30}}>Hello World</Text>
                <Button title="<= Back to Home" 
                onPress = {() => this.props.navigation.navigate("Home")}
                ></Button>
            </View>
        );
    }
}
