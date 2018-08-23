import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        marginTop: 0,
        height: Dimensions.get('window').height
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    header: {flex: 4},
    formContainer: {flex: 6},
    headerText: {
        marginLeft: 30,
        marginTop: 150,
        color: '#000',
        fontSize: 20,
        fontFamily: 'Avenir Next',
        fontWeight: '500'
    },
    headerDesciption: {
        marginLeft: 30,
        marginTop: 30,
        color: '#bbb',
        fontSize: 14,
        fontFamily: 'Avenir',
        width: 180,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

export default styles;