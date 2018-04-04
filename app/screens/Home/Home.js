import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

export default class HomeScreen extends React.Component {
    // Custom headers can be included too
    static navigationOptions = {
        title: 'Home Screen'
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title='Log Out' onPress={() => this.props.logout()}></Button>
                <Button title='Clear Token' onPress={() => AsyncStorage.clear()}></Button>
                <Button title='Home' onPress={() => this.props.navigation.navigate('Home')}></Button>
                <Button title="Toggle Menu" onPress={() => this.props.navigation.navigate('DrawerToggle')}></Button>
            </View>
        )
    }

}