import React from 'react'
import { View, Text } from 'react-native'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Page'
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}