import React from 'react'
import { View, Text, Button } from 'react-native'

export default class LoginScreen extends React.Component {
    // Custom headers can be included too
    static navigationOptions = { header: null }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* 
                    this.props.loggedin is a variable mapped to this.props in the mapStateToProps 
                    and applied in the connect() function. See index.js 
                */}
                <Text>Login Screen {this.props.loggedin.toString()}</Text>
                <Button title='Log In' onPress={() => this.props.getTest()}></Button>
            </View>
        )
    }

}