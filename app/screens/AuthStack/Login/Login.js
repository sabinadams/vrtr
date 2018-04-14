import React from 'react'
import { ScrollView, Keyboard, View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends React.Component {
    // Custom headers can be included too
    static navigationOptions = { header: null }
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' };
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

    gotoRegister() {
        console.log("Registering....")
        this.props.navigation.navigate('Register')
    }
    
    render() {
        return (
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.viewContainer}>
                <TouchableOpacity style={styles.signupContainer} onPress={() => this.gotoRegister()}>
                    <Text style={styles.signup}>Sign Up</Text>
                </TouchableOpacity>
                <Image style={styles.logo} source={require('./logo-color-blue.png')} />

                <View style={styles.spacer}></View>
                
                <TextInput
                    style={styles.textInput}
                    onChangeText={(email) => this.setState({ email })}
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Email"
                    value={this.state.email}
                />
            
                <TextInput
                    style={styles.textInput}
                    onChangeText={(password) => this.setState({ password })}
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Password"
                    value={this.state.password}
                />

                <TouchableOpacity style={styles.signInButton} onPress={() => this.props.login()}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>FORGOT PASSWORD?</Text>
                </TouchableOpacity>

                <View style={styles.socialSection}>
                    <Icon.Button onPress={() => this.alertSocialTemp('Twitter')} style={[styles.socialLogin, { borderColor: '#2AA3F0' }]} color='#2AA3F0' name="twitter" backgroundColor="transparent" />
                    <Icon.Button onPress={() => this.alertSocialTemp('Facebook')} style={[styles.socialLogin, { borderColor: '#3b5998' }]} color='#3b5998' name="facebook" backgroundColor="transparent"/>
                    <Icon.Button onPress={() => this.alertSocialTemp('Google')} style={[styles.socialLogin, { borderColor: '#D75452' }]} color='#D75452' name="google" backgroundColor="transparent"/>
                </View>   

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    logo: {
        width: 210,
        height: 210
    },
    viewContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#252c38',
        paddingTop: 25
    },
    textInput: {
        height: 60,
        width: '85%',
        borderBottomColor: 'rgba(86, 103, 132, 0.4)',
        borderBottomWidth: 1,
        color: 'rgba(86, 103, 132, 0.4)'
    },
    forgotPassword: {
        width: '85%',
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    forgotPasswordText: {
        color: 'rgba(86, 103, 132, 0.4)'
    },
    signInText: {
        color: 'rgba(86, 103, 132, 1)',
        fontWeight: '800',
        fontSize: 17
    },
    signup: {
        textAlign: 'right',
        width: '100%',
        padding: 20,
        fontWeight: 'bold',
        fontSize:  15,
        color: 'rgba(86, 103, 132, 0.4)'
    },
    signupContainer: {
        alignSelf: 'flex-end'
    },
    signInButton: {
        alignSelf: 'center',
        width: '85%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginBottom: 30,
        marginTop: 30,
        backgroundColor: '#53ddf4'
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
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-around',
        width: '80%'
    },
    spacer: { flex: 1 }
})