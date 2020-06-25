import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import styles from '../scripts/styles';

export default function CardHome(props){
    return(
        <View style={styles.card}>
            <View styles={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}