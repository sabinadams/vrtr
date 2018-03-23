import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'
import NavigationService from '../services/NavigationService';

export default class HomeScreen extends React.Component {
    // Custom headers can be included too
    static navigationOptions = { title: 'Home Screen' }
    constructor(props) {
        super(props);
    }

    async logout() {
        await AsyncStorage.clear()
        NavigationService.navigate('Auth')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title='Log Out' onPress={() => this.logout()}></Button>
                <Button title='Clear Token' onPress={() => AsyncStorage.clear()}></Button>
                <Button title='Home' onPress={() => NavigationService.navigate('Home')}></Button>
            </View>
        )
    }

}