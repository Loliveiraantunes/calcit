
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Style from '../assets/styles'

const styles = StyleSheet.create({
    text: {
    fontSize: 42,
    },
});

export default class Home extends React.Component{
    render(){
        return (
            <SafeAreaView style={Style.container}>
                <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <ScrollView>
                    <Text style={{fontSize: 30}}>Hello World</Text>
                    <Button title="<= Back to Splash" 
                    onPress = {() => this.props.navigation.navigate("Splash")}></Button>
                    <Text style={{height: 30}}> </Text>
                    <Button title="Go to Truth=>"
                    onPress ={() => this.props.navigation.navigate("Truth")}></Button>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
