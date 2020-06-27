import React from 'react';
import {View, Text, Image} from 'react-native';
import mainStyle from '../scripts/styles';

export default class CardHome extends React.Component{
    render(){
        return(
            <View style={mainStyle.card}>
                <View styles={mainStyle.cardContent}>
                    <Image style={mainStyle.imgCard} source={this.props.image} />
                    <Text style={{color: '#f31203', fontSize: 15, marginTop: -25}}>{this.props.name}</Text>
                    <Text style={{color: '#191b1c', fontSize: 12}}>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}