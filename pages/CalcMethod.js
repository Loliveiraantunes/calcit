import React, {useState, Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar, Submit} from 'react-native';
import mainStyle from '../assets/scripts/styles';
import getRealm from '../services/RealmDb';

const txtTruth = "BK > McDonalds"

export default function CalcMethod({navigation}){
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function plus(){ 
        setResultado(parseInt(n1, 10) + parseInt(n2, 10));
    }

    async function saveRepository(){
    
        const realm = await getRealm();

        realm.write(() => {
            stringResult = "" + resultado
            let auto_increment = realm.objects('History').length + 1;
            realm.create('History', {id: auto_increment, name: "Soma", result: stringResult});
        });
    }

    async function handleAddRepository(){
        try{
            await saveRepository(resultado)
            alert('Deu certo! :D');
            setN1('');
            setN2('');
        }catch(error){
            alert('Error to conect to database-> ' + error);
        }
        
    }

    function ResultPlus(){ //Function who call another part of 'body' using hooks
    return(
    <TouchableOpacity style={mainStyle.button}
        onPress={plus}>
        <Text style={mainStyle.txtButton}>Show result</Text>
    </TouchableOpacity>
    );
}

parseInt(resultado, 10)
    
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
            <Text style={{height: 15}} ></Text>
            <ResultPlus/>
            
            <Text onPress={handleAddRepository}>Add to database</Text>
            
            <Text style={mainStyle.txtDescription}>Result= {resultado}</Text>
        </View>
    );
}
