import * as actionTypes from '../actions/actionTypes'

// Default Login state
const DEFAULT_STATE = { 
    loggedin: false,
    logging_in: false 
}

// Reducer (Responds to actions based on type)
export default function( state = DEFAULT_STATE, action ) {
    switch( action.type ) {
        case actionTypes.LOGIN_SUCCESS:
            return {...state, loggedin: true, logging_in: false}
        case actionTypes.LOGIN_FAIL:
            return {...state, loggedin: false, logging_in: false}
        case actionTypes.LOGOUT:
            return {...state, loggedin: false}
        case actionTypes.LOGIN_ATTEMPT:
            return {...state, logging_in: true}
        case actionTypes.UNAUTHORIZED:
            return {...state, loggedin: false }
        default: 
            return state
    }
}

// Selectors (Returns the Login state. Can return a single value from the state or the whole state)
export const getAuth = state => ({
    loggedin: state.loggedin
})