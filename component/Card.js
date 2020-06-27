import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import mainStyle from '../assets/scripts/styles';


const styles = StyleSheet.create({
    card: {
        width: "90%",
        height: 250,
        elevation: 3,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: '#33cbed',
        borderWidth: 2,
        textAlign: "center",
        alignItems: 'center',
        marginTop:15,
        marginBottom:15 
    },

    cardContent:{
        marginHorizontal: 8,
        marginHorizontal: 10,
    },

    imgCard: {
        marginBottom: 23,
        maxWidth: 120,
        maxHeight: 80
        
    }})
export default class CardHome extends React.Component{

    render(){
        return(
            <View style={styles.card}>
                    <Image style={styles.imgCard} source={this.props.image} />
                    <Text style={{color: '#f31203', fontSize: 15, marginTop: -25}}>{this.props.name}</Text>
                    <Text style={{color: '#191b1c', fontSize: 12}}>{this.props.description}</Text>
            </View>
        )
    }
}