import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = { loggedin: false }

// Reducer
export default function( state = DEFAULT_STATE, action ) {
    switch( action.type ) {
        case actionTypes.ON_LOGGIN:
            return {...state, loggedin: true}
        default:
            return state
    }
}

// Selectors
export const getLogin = state => ({
    loggedin: state.loggedin
})