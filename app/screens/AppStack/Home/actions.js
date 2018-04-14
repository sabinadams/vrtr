import * as actionTypes from '../../../shared/actions/actionTypes'
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native'
import NavigationService from '../../../shared/services/NavigationService';

// Async action using thunk
export function logout() {
    return async function (dispatch, getState) {
        await AsyncStorage.clear()
        dispatch({ type: actionTypes.LOGOUT })
        NavigationService.navigate('Auth')
    }
}