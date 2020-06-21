
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    imgCard: {
        marginBottom: 23,
        
    },  

    container: {
        flex: 1,
        backgroundColor: '#242424',
        color:'#fff',
        paddingTop:80,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        },

    transition:{
        backgroundColor:'red'
    },

    button: {
        width: '85%',
        alignItems: "center",
        backgroundColor: "#ff5725",
        padding: 10,
        fontSize: 22,
        color: "#3f2e29",
        borderRadius: 10,
        marginBottom: 5,
    },

    txtButton: {
        fontWeight: "bold",
        color: "#f3f9f2",
    },

    txtDescription: {
        fontSize: 15,
        color: "#edf6f8"
    },

    scrollViewStyle: {
        flexGrow: 1, 
        justifyContent: "center",
        alignItems: "center", 
    }

  });
  
  export default styles;