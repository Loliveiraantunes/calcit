
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    content:{
        flex:1,
        paddingTop:20
    },
 
    container: {
        flex: 1,
        backgroundColor: '#242424',
        color:'#fff',
        paddingTop:80,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        },

    transition:{
        backgroundColor:'red'
    },

    button: {
        width: '80%',
        alignSelf:"center",
        backgroundColor: "#ff5725",
        padding: 10,
        fontSize: 22,
        color: "#3f2e29",
        borderRadius: 10,
        margin:20
    },

    txtButton: {
        fontWeight: "bold",
        color: "#f3f9f2",
        textAlign:"center"
    },

    txtDescription: {
        fontSize: 15,
        color: "#edf6f8"
    },

    scrollViewStyle: {
        flexGrow: 1, 
        justifyContent: "center",
        alignItems: "center",
    },

    inputTxtStyle: {
        width: "67%",
        height: "10%",
        backgroundColor: "#fff"
    },

  });
  
  export default styles;