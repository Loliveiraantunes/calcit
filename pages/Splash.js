import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, Image,StatusBar, ImageBackground } from 'react-native';
  
export default class Splash extends React.Component{

    componentDidMount(){
        setTimeout(() => {
                this.props.navigation.navigate("Home");
            }, 2800)
    }
      render(){
        return (
            <ImageBackground source={require("../img/splash_img.png")} style={styles.bgImage}>
                <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            </ImageBackground>
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
  
