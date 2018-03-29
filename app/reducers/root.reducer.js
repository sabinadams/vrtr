import { combineReducers } from 'redux' 
import login, * as fromLogin from './login.reducer'

export default combineReducers({
    ...login
})

// Login Selectors
export const getLogin = state => 
     fromLogin.getLogin(state.login)

    