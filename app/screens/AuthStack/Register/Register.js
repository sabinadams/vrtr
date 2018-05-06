
import React from 'react'
import { ScrollView, TouchableOpacity, View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { globalStyles, colors } from '../../../assets/styles'
export default class RegisterScreen extends React.Component {
    // Custom headers can be included too
    static navigationOptions = { header: null }
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.viewContainer}>

                <Image style={styles.logo} source={require('../Login/logo-color-blue.png')} />
                <Text style={styles.title}>Scry</Text>
                <Text style={styles.headertext}>Stay for a while!</Text>
                <View style={styles.spacer}></View>
                
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Email"
                    style={[globalStyles.textInput, {marginBottom: 10}]}
                />
               <View style={[styles.iconinput, {width: '85%'}]}>
                    <View style={styles.attachedicon}>
                        <Text style={styles.attachedicontext}>@</Text>
                    </View>
                    <TextInput
                        placeholderTextColor="rgba(86, 103, 132, 0.4)"
                        placeholder="Username"
                        style={[globalStyles.textInput, {
                            borderTopLeftRadius: 0, 
                            borderBottomLeftRadius: 0, 
                            marginBottom: 10,
                            margin: 0
                        }]}
                    />
                </View>
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Password"
                    style={[globalStyles.textInput, {marginBottom: 10}]}
                />
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Repeat Password"
                    style={globalStyles.textInput}
                />

                <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.signInText}> Create Account </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.headertext}>Back to Login</Text>
                </TouchableOpacity>
                <View style={styles.spacer}></View>
            
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    attachedicon: {
        width: 50,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.darkBackground,
        paddingLeft: 25,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30
    },
    attachedicontext: {
        fontSize: 20,
        fontWeight: '700',
        color: '#53ddf4',
    },
    iconinput: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        color: 'rgba(86, 103, 132, 1)',
        fontWeight: '900',
        fontSize: 30
    },
    headertext: {
        color: 'rgba(86, 103, 132, 1)',
    },
    signInText: {
        color: 'rgba(86, 103, 132, 1)',
        fontWeight: '800',
        fontSize: 17
    },
    signInButton: {
        alignSelf: 'center',
        width: '85%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 30,
        marginTop: 30,
        backgroundColor: '#53ddf4'
    },
    logo: {
        width: 190,
        height: 190
    },
    viewContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#252c38',
        paddingTop: 25
    },
    spacer: { flex: 1 }
})