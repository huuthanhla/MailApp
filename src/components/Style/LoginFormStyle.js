import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {padding: 40},
    controlView: {},
    inputView: {
        height: 109,
        backgroundColor: 'white',
        shadowColor: '#bbb',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.95,
        shadowRadius: 3,
        borderRadius: 8,
    },
    input:{
        flex: 1,
        backgroundColor: 'transparent',
        paddingLeft: 7,
        paddingRight: 3,
        color: '#000'
    },
    inputRow: {flexDirection:'row', height: 54},
    icon: {marginLeft: 7, marginTop: 15, width: 22, height: 22},
    controlButton:{},
    controlText: {marginTop: 20},
    loginButton: {
        marginTop: 64,
        height: 54,
        backgroundColor: '#3fb1fa',
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 27,
        shadowColor: '#bbb',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.95,
        shadowRadius: 3,
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 18,
        fontFamily: 'Avenir Next',
        fontWeight: '500'
    }, 
    bottonTextFocus:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        fontWeight: '500',
        paddingLeft: 5,
        paddingRight: 5
    }, 
    bottonText:{
        color: '#707070',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14
    }, 
});

export default styles;