
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, StatusBar, TouchableOpacity, Image} from 'react-native';
import mainStyle from '../assets/scripts/styles';
import Card from '../assets/scripts/card';

export default function Home({navigation}){

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function plus(){ 
        setResultado(parseInt(n1, 10) + parseInt(n2, 10));
    }

    function ResultPlus(){ //Function who call another part of 'body' using hooks
        return(
        <TouchableOpacity style={mainStyle.button}
            onPress={plus}>
            <Text style={mainStyle.txtButton}>Show result</Text>
        </TouchableOpacity>
        );
    }

    return (  
        <View>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <ScrollView contentContainerStyle={mainStyle.scrollViewStyle}>
                <Text style={{height: 100}}></Text>              
                <Card>
                    <Image style={mainStyle.imgCard} source ={require('../assets/img/save_image.png')} />
                    <Text style={{color: '#f31203', fontSize: 15, marginTop: -25}}>Name Here</Text>
                    <Text style={{color: '#191b1c', fontSize: 12}}>Description here</Text>
                </Card>
                <Text style={{height: 30}} />
                <TouchableOpacity style={mainStyle.button}
                onPress ={() => navigation.navigate('Truth')}>
                    <Text style={mainStyle.txtButton}>Go to Truth</Text>
                </TouchableOpacity>
                <Text style={{height: 30}} />
                <Text style={mainStyle.txtDescription}>Insert first number:</Text>
                <TextInput style={mainStyle.inputTxtStyle}
                    placeholder='' onChangeText={(val) => setN1(val)} />  
                <Text style={{height: 15}} />
                <Text style={mainStyle.txtDescription}>Insert second number:</Text>
                <TextInput style={mainStyle.inputTxtStyle}
                    placeholder='' onChangeText={(val) => setN2(val)}/>
                <Text style={{height: 15}} />
                <ResultPlus/>
                <Text style={mainStyle.txtDescription}>Result: {resultado}</Text>     
            </ScrollView>
        </View>
    );
}

