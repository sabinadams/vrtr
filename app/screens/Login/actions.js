import * as actionTypes from '../../shared/actions/actionTypes'
import { AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation';
 
export const login_attempt = {
    type: actionTypes.LOGIN_ATTEMPT 
}

export const login_success = () => {
    // Any logic I wanna do before this
    return { type: actionTypes.LOGIN_SUCCESS }
}

export const login_failure = {
    type: actionTypes.LOGIN_FAILURE
}

// Async action using thunk
export function getTest() {
    return async function (dispatch, getState) {
        // Dispatch using plain struct to go right away
        dispatch(login_attempt)
        await AsyncStorage.setItem('userToken', '1234')
        if ( await AsyncStorage.getItem('userToken') == '1234') {
            dispatch(login_success())
            dispatch(NavigationActions.navigate({
                routeName: 'App',
            }));
        } else {
            dispatch(login_failure)
        }
    }
}