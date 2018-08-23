import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ImageBackground, 
    KeyboardAvoidingView 
} from 'react-native';

import LoginForm from './LoginForm';
import styles from './../Style/LoginStyle'

class Login extends Component {
    constructor(props) {
        super(props);
        background = require('../../components/Images/logo-dark-bg.png')
    }

    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.loginContainer}>
                <ImageBackground resizeMode="cover" 
                    style={styles.backgroundImage} source={background} >
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Đăng nhập</Text>
                        <Text style={styles.headerDesciption}>
                            Nhập thông tin tài khoản email vào ô trống bên dưới
                        </Text>
                    </View>
                    
                    <View style={styles.formContainer}>
                        <LoginForm />
                    </View>

                </ImageBackground>                
            </View>
        </KeyboardAvoidingView>
        );
    }
}

//make this component available to the app
export default Login;
