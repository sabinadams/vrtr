import React from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class SecurityInfoForm extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <View style={{width: '100%', alignItems:'center'}}>
                <Text style={styles.header}>Security</Text>
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Some Field"
                    style={styles.textInput}
                    value={this.props.testPass}
                    onChangeText={ text => this.props.dispatch({
                        type: 'update_profile_wizard',
                        data: { testPass: text }
                    })}
                />
                <TextInput
                    placeholderTextColor="rgba(86, 103, 132, 0.4)"
                    placeholder="Another Field"
                    style={styles.textInput}
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
    textInput: {
        height: 60,
        width: '85%',
        borderBottomColor: 'rgba(86, 103, 132, 0.4)',
        borderBottomWidth: 1,
        color: 'rgba(86, 103, 132, 0.4)',
        marginBottom: 20
    },
    header: {
        fontSize: 30,
        fontWeight: '800',
        color: 'rgba(86, 103, 132, 0.4)'
    }
})

export default connect(
    state => ({...state.profilewizard}), 
    dispatch => ({dispatch, actions})
)(SecurityInfoForm)
