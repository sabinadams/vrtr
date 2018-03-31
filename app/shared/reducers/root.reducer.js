import { combineReducers } from 'redux' 
import login, * as fromLogin from './login.reducer'
import nav from './nav.reducer'

// Combines all the reducers into one so that we can just include this root reducer instead of 
// including them all
export default combineReducers({
    login, 
    nav
})

// Wraps the individual reducers' selectors into functions so that we can tell it which state to grab from
// This is also done so that we don't have to import each individual reducer's selectors
// For example, getLogin is passed the Login state so that the reducer's function can pull from that state
export const getLogin = state => 
     fromLogin.getLogin(state.login)

    