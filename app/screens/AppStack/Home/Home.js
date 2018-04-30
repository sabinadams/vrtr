import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    // Custom headers can be included too
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.navigation.state.routeName}</Text>
                <Button title='Log Out' onPress={() => this.props.logout()}></Button>
                <Button title='Clear Token' onPress={() => AsyncStorage.clear()}></Button>
                <Button title='Home' onPress={() => this.props.navigation.navigate('Home')}></Button>
            </View>
        )
    }

}