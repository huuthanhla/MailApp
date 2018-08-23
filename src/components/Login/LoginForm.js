import React, { Component } from 'react';
import { 
    View, 
    Image, 
    Text,
    TextInput, 
    TouchableOpacity, 
    Alert, 
    StatusBar
} from 'react-native';

import styles from './../Style/LoginFormStyle'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        iconUsername = require('../../components/Images/icon_username.png')
        iconPassword = require('../../components/Images/icon_password.png')
        iconHelp = require('../../components/Images/icon_help.png')

        this.state = {
            username: "",
            password: ""
        }
    }

    loginButtonDidPress() {        
        if (this.state.username.trim() == "" || this.state.password.trim() == "") {
            Alert.alert("Lỗi đăng nhập", "Bạn vui lòng nhập đầy đủ thông tin.")
        } else {
            Alert.alert("L O G I N", this.state.username + " - " + this.state.password)
        }        
    };

    onAccountPress() {        
        Alert.alert("Tài khoản")
    };

    onForgetPasswordPress() {        
        Alert.alert("Quên mật khẩu")
    };

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content"/>
                    <View style={styles.inputView}>
                        <View style={styles.inputRow}>
                            <Image source={iconUsername} style = {styles.icon} />
                            <TextInput style = {styles.input} 
                                        autoCapitalize="none" 
                                        onSubmitEditing={() => this.passwordInput.focus()}
                                        onChangeText={(value) => this.setState({username: value}) } 
                                        autoCorrect={false} 
                                        keyboardType='email-address' 
                                        returnKeyType="next" 
                                        clearButtonMode='while-editing'
                                        placeholder='Tài khoản' 
                                        placeholderTextColor='#bbb'/>
                        </View>
                        <View style={{backgroundColor: '#e8e8e8', height: 0.7}}></View>
                        <View style={styles.inputRow}>
                            <Image source={iconPassword} style = {styles.icon} />
                            <TextInput style = {styles.input}   
                                    returnKeyType="done" ref={(input)=> this.passwordInput = input} 
                                    clearButtonMode='while-editing'
                                    onChangeText={(value) => this.setState({password: value}) } 
                                    placeholder='Mật khẩu' 
                                    placeholderTextColor='#bbb' 
                                    secureTextEntry/>
                            <Image source={iconHelp} style = {styles.icon} />
                        </View>
                    </View>
                
                </View>
                    
                <View style={styles.controlView}>
                    <View style={styles.controlButton}>
                        <TouchableOpacity style={styles.loginButton} 
                            onPress={this.loginButtonDidPress.bind(this)}>
                            <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.controlText}>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
                            <Text style={styles.bottonText}>
                                Bạn chưa có 
                            </Text>
                            <TouchableOpacity onPress={this.onAccountPress.bind(this)}>
                                <Text style={styles.bottonTextFocus}>
                                    tài khoản 
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.bottonText}>
                                hoặc quên 
                            </Text>
                            <TouchableOpacity onPress={this.onForgetPasswordPress.bind(this)}>
                                <Text style={styles.bottonTextFocus}>
                                    mật khẩu?
                                </Text>
                            </TouchableOpacity>
                        </View>   
                    </View>
                </View>
            </View>
        );
    }
}

export default LoginForm;
