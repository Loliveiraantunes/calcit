import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert } from 'react-native';
  export default class Home extends React.Component{
      render(){
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 30}}>Home Page guys :D</Text>
                <Button title='To another page =>'
                onPress = {() => this.props.navigation.navigate("Test")}
                ></Button>
                <Button title='Go to truth =>'
                onPress = {() => this.props.navigation.navigate("Test2")}
                ></Button>
            </View>
        );
    }
}
  
