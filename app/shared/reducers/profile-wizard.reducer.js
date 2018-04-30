import * as actionTypes from '../actions/actionTypes'

// Default state
const DEFAULT_STATE = { 
    form_view: 0,
    profile_pic_shape: 'circle',
    personalPass: '',
    securityPass: '',
    progress: ['clean', 'dirty', 'clean', 'error', 'complete']

}

// Reducer (Responds to actions based on type)
export default function( state = DEFAULT_STATE, action ) {
    switch( action.type ) {
        case actionTypes.UPDATE_PROFILE_WIZARD:
            return {...state, ...action.data}
        case actionTypes.CLEAR_PROFILE_WIZARD:
            return DEFAULT_STATE
        default: 
            return state
    }
}

export const getProfileWizardState = state => ({
    testPass: state.testPass,
    securityPass: state.securityPass
})