import React from 'react'
import { Animated, Image, ScrollView, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { PersonalInfoForm, SettingsInfoForm } from './forms'
import { globalStyles, colors } from '../../../assets/styles'
import WizardBubble from './WizardBubble'

export default class ProfileWizardScreen extends React.Component {
    squarifyCircle = new Animated.Value(75)
    formViews = [
       <PersonalInfoForm/>,
       <SettingsInfoForm/>
    ]
    
    constructor(props) { super(props) }

    reshapeProfilePic( val ) {
        this.props.dispatch({
            type: 'update_profile_wizard',
            data: { profile_pic_shape: val == 10 ? 'squareish' : 'circle' }
        })
        Animated.timing(                 
            this.squarifyCircle,           
            { toValue: val, duration: 300 }
        ).start();   
    }

    getShapeOptionColor( shape ) {
        return { borderColor: 
            this.props.profile_pic_shape == shape ?
            colors.primaryHighlight :  
            'rgba(86, 103, 132, 0.4)'
        }
    }
 
    render() {
        return (
            <ScrollView scrollEnabled={false} contentContainerStyle={globalStyles.viewContainer}>
                <View style={styles.circlesContainer}>
                    <View style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
                        <Animated.View style={[styles.centerCircle, globalStyles.centerHV, {borderRadius: this.squarifyCircle}]}>
                            <TouchableOpacity>
                                <Image style={styles.logo} source={require('./slr-camera.png')} />
                            </TouchableOpacity>
                        </Animated.View>
                        <TouchableOpacity style={[styles.circularPic, this.getShapeOptionColor('circle')]} onPress={() => this.reshapeProfilePic(75)}/>
                        <TouchableOpacity style={[styles.squareishPic, this.getShapeOptionColor('squareish')]} onPress={() => this.reshapeProfilePic(10)}/>
                    </View>
                    { [...Array(5).keys()].map(i => <WizardBubble index={i} key={i} status={this.props.progress[i]}/>) }
                </View>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10} contentContainerStyle={styles.formAnimatedContent} style={styles.formAnimatedContainer}>
                    <ScrollView style={styles.formContainer}>{ this.formViews[this.props.form_view] }</ScrollView>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    circlesContainer: {
        width: '100%',
        height: 380
    },
    centerCircle: {
        position: 'absolute',
        top: 140,
        left:  '50%',
        marginLeft: -75,
        width: 150,
        height: 150,
        backgroundColor: colors.darkBackground,
        borderWidth: 3,
        borderColor: colors.primaryHighlight
    },
    formAnimatedContainer: {
        display: 'flex',
        flexDirection: 'row', 
        flex: 1,
    },
    formAnimatedContent: {
        width: '100%',
        borderColor: 'red',
        shadowOffset: {height: -5},
        shadowColor: colors.primaryBackground,
        shadowOpacity: 1
    },
    formContainer: {
        flex: 1,
        backgroundColor: colors.primaryBackground
    },
    logo: {
        width: 75,
        height: 75
    },
    circularPic: {
        borderRadius: 15,
        height: 30,
        width: 30,
        backgroundColor: 'transparent',
        borderWidth: 3,
        marginTop: 305,
        marginRight: 15
    },
    squareishPic: {
        borderRadius: 5,
        height: 30,
        width: 30,
        backgroundColor: 'transparent',
        borderWidth: 3,
        marginTop: 305
    }
})