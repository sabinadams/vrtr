import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'
import NavigationService from '../../services/NavigationService';

export default class LoginScreen extends React.Component {
    // Custom headers can be included too
    static navigationOptions = { header: null }
    constructor(props) {
        super(props);
    }

    async login() {
        await AsyncStorage.setItem('userToken', '12345')
        NavigationService.navigate('App')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <Button title='Log In' onPress={() => this.login()}></Button>
            </View>
        )
    }

}