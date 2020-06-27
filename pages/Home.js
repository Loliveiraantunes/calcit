
import React, { useState } from 'react';
import {View, Text, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import mainStyle from '../assets/scripts/styles';
import Card from '../assets/scripts/card';

export default function Home({navigation}){
    const [calcList, setCalclist] = useState([
        {id: 1, image: require('../assets/img/save_image.png'), name: 'sameName1', description: 'description1'},
        {id: 2, image: require('../assets/img/save_image.png'), name: 'sameName2', description: 'description2'},
        {id: 3, image: require('../assets/img/save_image.png'), name: 'sameName3', description: 'description3'}
    ])
    
    return (  
        <View>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <ScrollView contentContainerStyle={mainStyle.scrollViewStyle}>
                <Text style={{height: 100}}></Text>
                {calcList.map(f =>
                    <Card key={f.id} image={f.image} name={f.name} description={f.description} />
                )}
                <Text style={{height: 30}} />
                <TouchableOpacity style={mainStyle.button}
                onPress ={() => navigation.navigate('CalcMethod')}>
                    <Text style={mainStyle.txtButton}>Go to plus</Text>
                </TouchableOpacity>     
            </ScrollView>
        </View>
    );
}

