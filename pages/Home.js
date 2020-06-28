
import React, { useState } from 'react';
import {View, Text, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import mainStyle from '../assets/scripts/styles';
import Card from '../component/Card';

export default function Home({navigation}){
    const [calcList, setCalclist] = useState([
        {id: 1, image: require('../assets/img/fwh1_dividido.png'), name: 'Fórmula de Fair-Whipple-Hsiao (Rugosas)', description: `Cálculo de perda de carga distribuída em tubulações rugosas em sistemas de água fria.\n
        J = Perda de carga, em kPa/m
        Q = vazão, em L/s
        d = diâmetro interno, em mm`},
        {id: 2, image: require('../assets/img/fwh2_dividido.png'), name: 'Fórmula de Fair-Whipple-Hsiao (Lisas)', description: `Cálculo de perda de carga distribuída em tubulações lisas em sistemas de água fria.\n
        J = Perda de carga, em kPa/m
        Q = vazão, em L/s
        d = diâmetro interno, em mm`},
        {id: 3, image: require('../assets/img/save_image.png'), name: 'N/A', description: `Cálculo da vazão em tubulações de água fria e água quente.\n
        Q = vazão, em L/s
        EP = somatório dos pesos das peças de utilização,
        sem unidade`},
        {id: 4, image: require('../assets/img/save_image.png'), name: 'Fórmula de Hazen-Williams', description: `Cálculo de perda de carga distribuída em tubulações de água quente.\n
        J = perda de carga, em m.c.a.
        Q = vazão, em m^3/s
        C = coeficiente de perda de carga, sem unidade
        d = diâmetro interno, em m`}
    ])
    
    return (  
        <View style={mainStyle.content}>
            <StatusBar  barStyle="light-content" backgroundColor="#242424" translucent={true} />
            <ScrollView  vertical={true} contentContainerStyle={mainStyle.scrollViewStyle}>
                {calcList.map(f =>
                    <Card key={f.id} image={f.image} name={f.name} description={f.description} />
                )}
            </ScrollView>
            <TouchableOpacity style={mainStyle.button}
                onPress ={() => navigation.navigate('CalcMethod')}>
                    <Text style={mainStyle.txtButton}>Go to plus</Text>
            </TouchableOpacity>     
        </View>
    );
}

