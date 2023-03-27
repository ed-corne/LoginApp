import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AlertGreen from './AlertGreen';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // declaracion de las variables
            name: "",
            email: "",
            password: "",
            result: "",
            modalVisible: false,
        };
    }

    render() {
        // aqui va la programaion de los objetos 

        const validateData = () => {
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    //document.getElementById("demo").innerHTML = xhttp.responseText;
                    console.log(xhttp.responseText);
                    _this.setState({ result: xhttp.responseText });
                    console.log("resultado = " + _this.state.result);
                    if(_this.state.result == 0){
                        _this.setState({ result: "Empty data" });
                    }else if(_this.state.result == -1){
                        _this.setState({ result: "Invalid credentials or you have not verified your email" });
                    }
                    else {
                        console.log("valid data");
                        //_this.props.navigation.navigate("HomeScreen", {name: _this.state.result});
                        _this.props.navigation.replace('HomeScreen', {name: _this.state.result});
                    }
                }
            };
            xhttp.open("GET", "https://edcorne.000webhostapp.com/Login.php?email=" +
                this.state.email +
                "&password=" +
                this.state.password, true);
            xhttp.send();
            showModal();
        }

        const showModal = () => {
            this.setState({ modalVisible: true })
        }

        return (
            <View style={styles.container}>
                <Image source={require('./assets/logo.png')} style={styles.logo} />

                <View style={styles.containerTittle}>
                    <Text style={styles.txtLogin}>Login</Text>
                    <Text style={styles.txtSubTittle}>Please sing in to continue</Text>
                </View>

                <View style={styles.loginContainer}>

                    <TextInput style={styles.inputData}
                        onChangeText={email => this.setState({ email })}
                        placeholder="Email"
                        keyboardType='email-address'
                    >
                    </TextInput>
                    <TextInput style={styles.inputData}
                        onChangeText={password => this.setState({ password })}
                        placeholder="Password"
                        secureTextEntry={true}
                    >
                    </TextInput>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={validateData}
                    >
                        <Text>Login →</Text>
                    </TouchableOpacity>

                    <AlertGreen 
                    visible={this.state.modalVisible} 
                    onClose={() => this.setState({modalVisible: false})}
                    result={this.state.result}
                    ></AlertGreen>
                    
                    <View style={{ position: 'absolute', bottom: -170, right: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center',  padding: 10 }}>
                            <Text style={{ marginRight: 10 }}>Don't have an account?</Text>
                            <TouchableOpacity title="Presiona aquí" onPress={() => this.props.navigation.navigate('SignUp')} >
                                <Text style={styles.txtSubTittle}>Sing up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //stilos
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    logo: {
        width: 170,
        height: 170,
        position: 'absolute',
        top: 40,
        right: -50
    },
    imgContainer: {
        position: 'relative',

    },
    loginContainer: {
        alignItems: 'flex-end'
    },
    containerTittle: {
        margin: 30
    },
    txtLogin: {
        fontSize: 32,
        color: '#000',
        fontWeight: 'bold',
    },
    txtSubTittle: {
        color: '#7ED957'
    },
    inputData: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        width: 200,
        marginBottom: 20

    },
    btnLogin: {
        alignItems: 'center',
        backgroundColor: '#CCFFB8',
        padding: 10,
        width: 80,
        borderRadius: 20,
        marginTop: 10
    }
})