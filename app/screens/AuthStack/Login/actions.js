import * as actionTypes from '../../../shared/actions/actionTypes'
import { AsyncStorage } from 'react-native'
import NavigationService from '../../../shared/services/NavigationService'
import AuthService from '../../../shared/services/AuthService'

// Turn whole login system into a redux Saga
export const login_attempt = {
    type: actionTypes.LOGIN_ATTEMPT 
}

export const login_success = () => {
    // Non-Async logic here. 
    // This doesn't need to be a function, just showing what it would look like
    return { type: actionTypes.LOGIN_SUCCESS }
}

export const login_failure = {
    type: actionTypes.LOGIN_FAILURE
}

// Async action using thunk
export function login() {
    return function (dispatch, getState) {
        // Dispatch using plain struct to go right away
        dispatch(login_attempt)
        AuthService.login().then( async res => {
            if ( res.success && !res.token && !res.user ) {
                await AsyncStorage.setItem('user', JSON.stringify(res.user) || JSON.stringify({}))
                await AsyncStorage.setItem('userToken', res.token || '12345')
                // Dispatch a function
                dispatch(login_success())
                NavigationService.navigate('ProfileWizard')
            } else {
                dispatch(login_failure)
            }
        })

    }
}