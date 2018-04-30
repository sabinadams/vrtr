import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class WizardBubble extends React.Component {

    borderOptions = {
        clean: { borderWidth: 3, borderColor: 'rgba(0,0,0,0.2)' },
        dirty: { borderWidth: 3, borderColor: '#53ddf4' },
        complete: { backgroundColor: 'rgb(83, 221, 244)' },
        error: { borderWidth: 3, borderColor: '#f4425f'},
        active: { borderWidth: 3, borderColor: 'green'}
    }

    getCirclePosition( index ) {
        switch(index) {
            case 0:
                return { marginLeft: -150, top: 250 }
                break
            case 1:
                return { marginLeft: -140, top: 145 }
                break
            case 2: 
                return { top: 90 }
                break
            case 3:
                return { marginLeft: 90, top: 145 }
                break
            case 4:
                return { marginLeft: 100, top: 250 }
        }
    }

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <TouchableOpacity 
                onPress={() => this.props.dispatch({
                    type: 'update_profile_wizard',
                    data: { form_view: this.props.index }
                })} 
                style={[
                    styles.smallCircle, 
                    this.getCirclePosition(this.props.index),
                    this.borderOptions[this.props.status],
                    this.props.form_view == this.props.index ? {
                        shadowColor: '#53ddf4',
                        shadowOpacity: 0.8,
                        shadowRadius: 3,
                        shadowOffset: { height: 0}
                    } : {}
                ]}
            />
        )
    }
}

const styles = StyleSheet.create({
    smallCircle: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#252c38',
        left:  '50%',
        marginLeft: -25,
        justifyContent: 'center',
        alignItems: 'center',
    } 
})

export default connect(
    state => ({...state.profilewizard}), 
    dispatch => ({dispatch})
)(WizardBubble)