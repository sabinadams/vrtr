import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends React.Component {
    // Custom headers can be included too
    static navigationOptions = { header: null }
    constructor(props) {
        super(props)
        this.state = { email: 'Email', password: 'Password' };
    }

    alertSocialTemp(social) {
        Alert.alert(
            'Social Login',
            social,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <Text style={styles.signup}>Sign Up</Text>
                <Image style={{ width: 180, height: 180 }} source={require('./logo-dark.png')} />

                <View style={styles.spacer}></View>
            
                <View style={styles.socialSection}>
                    <Icon.Button onPress={() => this.alertSocialTemp('Twitter')} style={[styles.socialLogin, { borderColor: '#2AA3F0' }]} color='#2AA3F0' name="twitter" backgroundColor="transparent">
                    </Icon.Button>
                    <Icon.Button onPress={() => this.alertSocialTemp('Facebook')} style={[styles.socialLogin, { borderColor: '#3b5998' }]} color='#3b5998' name="facebook" backgroundColor="transparent">
                    </Icon.Button>
                    <Icon.Button onPress={() => this.alertSocialTemp('Google')} style={[styles.socialLogin, { borderColor: '#D75452' }]} color='#D75452' name="google" backgroundColor="transparent">
                    </Icon.Button>
                </View>
                
                <View style={styles.spacer}></View>

                <TextInput
                    style={styles.textInput}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
            
                <TextInput
                    style={styles.textInput}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.login()}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#ccd9e7',
        paddingTop: 25
    },
    textInput: {
        height: 60,
        width: 300,
        paddingLeft: 40,
        marginBottom: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 30,
        color: '#ccd9e7'
    },
    forgotPassword: {
        alignSelf: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
    loginButtonText: {
        color: '#ccd9e7'
    },
    signup: {
        textAlign: 'right',
        width: '100%',
        padding: 20,
        fontWeight: 'bold'
    },
    loginButton: {
        alignSelf: 'center',
        width: 250,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    socialLogin: {
        height: 75,
        width: 75,
        borderRadius: 50,
        margin: 5,
        borderWidth: 3,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 16
    },
    socialSection: {
        display: 'flex',
        flexDirection: 'row'
    },
    spacer: { flex: 1 }
})