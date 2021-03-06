// First Name, Last Name, DOB, Bio
import React from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { globalStyles } from '../../../../assets/styles'

class PersonalInfoForm extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={styles.header}>Personal</Text>
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="First Name"
                    style={[globalStyles.textInput, {marginBottom: 10}]}
                    value={this.props.testPass}
                    onChangeText={ text => this.props.dispatch({
                        type: 'update_profile_wizard',
                        data: { testPass: text }
                    })}
                />
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Last Name"
                    style={[globalStyles.textInput, {marginBottom: 10}]}
                    value={this.props.testPass}
                    onChangeText={ text => this.props.dispatch({
                        type: 'update_profile_wizard',
                        data: { testPass: text }
                    })}
                />
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Age"
                    style={[globalStyles.textInput, {marginBottom: 10}]}
                    value={this.props.testPass}
                    onChangeText={ text => this.props.dispatch({
                        type: 'update_profile_wizard',
                        data: { testPass: text }
                    })}
                />
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="About"
                    style={[globalStyles.textInput, {marginBottom: 10}]}
                    value={this.props.testPass}
                    onChangeText={ text => this.props.dispatch({
                        type: 'update_profile_wizard',
                        data: { testPass: text }
                    })}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: '800',
        color: 'rgba(86, 103, 132, 0.4)',
        marginBottom: 20
    }
})

export default connect(
    state => ({...state.profilewizard}), 
    dispatch => ({dispatch, actions})
)(PersonalInfoForm)