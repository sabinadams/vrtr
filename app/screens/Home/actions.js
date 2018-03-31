import * as actionTypes from '../../shared/actions/actionTypes'
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native'

// Async action using thunk
export function navHome() {
    return function (dispatch, getState) {
        dispatch(NavigationActions.navigate({ routeName: 'Home' }))
    }
}

export function logout() {
    return async function (dispatch, getState) {
        await AsyncStorage.clear()
        dispatch({ type: actionTypes.LOGOUT })
        dispatch(NavigationActions.navigate({ routeName: 'Auth' }))
    }
}