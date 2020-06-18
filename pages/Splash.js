import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
  
export default class Splash extends React.Component{

    componentDidMount(){
        setTimeout(() => {
                this.props.navigation.navigate("Home");
            }, 2500)
    }
      render(){
        return (
            <View style={styles.container}>
                <Image source={require("../img/splash_img.png")} style={styles.bgImage}>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
    },
});
  
