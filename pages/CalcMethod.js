import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,StatusBar} from 'react-native';
import mainStyle from '../assets/scripts/styles';

const txtTruth = "BK > McDonalds"

export default function Truth({navigation}){

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
    
    return(
        <View style={mainStyle.container}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Text style={mainStyle.txtDescription}>{txtTruth}</Text>
            <TouchableOpacity style = {mainStyle.button}
            onPress = {() => navigation.navigate("Home")}>
                <Text style={mainStyle.txtButton}>Back Home</Text> 
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
        </View>
    );
}
