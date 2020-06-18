
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends React.Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent: "center"}}>
                <Text style={{fontSize: 30}}>Hello World</Text>
                <Button title="<= Back to Splash" 
                onPress = {() => this.props.navigation.navigate("Splash")}
                ></Button>
                <Text style={{height: 30}}> </Text>
                <Button title="Go to Truth=>"
                onPress ={() => this.props.navigation.navigate("Truth")}
                ></Button>
            </View>
        );
    }
}
