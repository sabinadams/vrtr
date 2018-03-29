import * as actionTypes from '../../actionTypes'
import {getLogin} from '../../reducers/root.reducer'

export const login = dispatch => {
    dispatch({type: actionTypes.ON_LOGGIN})
}