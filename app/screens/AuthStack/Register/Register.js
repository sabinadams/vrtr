
import React from 'react'
import { ScrollView, Keyboard, View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RegisterScreen extends React.Component {
    // Custom headers can be included too
    static navigationOptions = { header: null }
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' };
    }

   

    render() {
        return (
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.viewContainer}>

               <Text>This is the Register Screen</Text>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#252c38',
        paddingTop: 25
    }
})