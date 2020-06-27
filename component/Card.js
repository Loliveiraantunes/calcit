import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import mainStyle from '../assets/scripts/styles';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    card: {
        width: "90%",
        height: 350,
        elevation: 5,
        backgroundColor: '#303030',
        borderRadius: 8,
        textAlign: "center",
        alignItems: 'center',
        marginTop:15,
        marginBottom:15 
    },

    cardContent:{
        width:"100%",
        height:"100%",
        alignItems:"center"
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
                <ImageBackground style={styles.cardContent} source={require("../assets/img/card_bg.png")}>
                    <ScrollView vertical={true} style={{padding:10}}>
                        <Image style={styles.imgCard} source={this.props.image} />
                        <Text style={{color: '#1c95dd', fontSize:16, marginTop: -25}}>{this.props.name}</Text>
                        <Text style={{color: '#fff', fontSize: 12}}>{this.props.description}</Text>
                    </ScrollView>
                  
                </ImageBackground>
            </View>
        )
    }
}