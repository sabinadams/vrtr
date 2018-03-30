import * as actionTypes from '../actionTypes'

// Default Login state
const DEFAULT_STATE = { loggedin: false }

// Reducer (Responds to actions based on type)
export default function( state = DEFAULT_STATE, action ) {
    switch( action.type ) {
        case actionTypes.LOGIN_SUCCESS:
            return {...state, loggedin: true}
        case actionTypes.LOGIN_FAIL:
        case actionTypes.LOGOUT:
            return {...state, loggedin: false}
        case actionTypes.LOGIN_ATTEMPT:
        default: 
            return state
    }
}

// Selectors (Returns the Login state. Can return a single value from the state or the whole state)
export const getLogin = state => ({
    loggedin: state.loggedin
})