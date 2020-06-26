
import React from 'react';
import {View, Text, ScrollView, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import mainStyle from '../assets/scripts/styles';
import Card from '../assets/scripts/card';

export default function Home({navigation}){
    return (  
        <View>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <ScrollView contentContainerStyle={mainStyle.scrollViewStyle}>
                <Text style={{height: 100}}></Text>              
                <Card/>
                <Text style={{height: 30}} />
                <TouchableOpacity style={mainStyle.button}
                onPress ={() => navigation.navigate('CalcMethod')}>
                    <Text style={mainStyle.txtButton}>Go to plus</Text>
                </TouchableOpacity>     
            </ScrollView>
        </View>
    );
}

