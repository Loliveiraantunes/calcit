import React, {Component, useState} from 'react';
import {View, Text, Image} from 'react-native';
import mainStyle from '../scripts/styles';
import {calcList} from '../scripts/Calcs';

export default function CardHome(){
    return(
        calcList.map(f => (
            <View key={f.id} style={mainStyle.card}>
                <View styles={mainStyle.cardContent}>
                    <Image style={mainStyle.imgCard} source ={f.image} />
                    <Text style={{color: '#f31203', fontSize: 15, marginTop: -25}}>{f.name}</Text>
                    <Text style={{color: '#191b1c', fontSize: 12}}>{f.description}</Text>
                </View>
            </View>
         ))
    )
}