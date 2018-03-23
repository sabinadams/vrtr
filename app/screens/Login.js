import React from 'react'
import { View, Text } from 'react-native'

export default class LoginScreen extends React.Component {

    // Custom headers can be included too
    static navigationOptions = { header: null }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
            </View>
        )
    }

}