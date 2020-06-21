
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import mainStyle from '../assets/styles'

export default class Home extends React.Component{
    render(){
        return (  
            <View style={mainStyle.container}>
                <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <ScrollView contentContainerStyle={mainStyle.scrollViewStyle}>
                    <TouchableOpacity style={mainStyle.button} 
                    onPress = {() => this.props.navigation.navigate("Splash")}>
                        <Text style={mainStyle.imgCard}>Image here</Text>
                        <Text style={mainStyle.txtDescription}>Cálculo de perda de carga distribuída em tubulações rugosas em sistemas de água fria </Text>
                    </TouchableOpacity>
                    <Text style={{height: 30}} />
                    <TouchableOpacity style={mainStyle.button}
                    onPress ={() => this.props.navigation.navigate("Truth")}>
                        <Text style={mainStyle.txtButton}>Go to Truth</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

