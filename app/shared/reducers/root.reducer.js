import { combineReducers } from 'redux' 
import login, * as fromAuth from './auth.reducer'
import profilewizard, * as fromProfileWizard from './profile-wizard.reducer'

// Combines all the reducers into one so that we can just include this root reducer instead of 
// including them all
export default combineReducers({
    login,
    profilewizard
})

// Wraps the individual reducers' selectors into functions so that we can tell it which state to grab from
// This is also done so that we don't have to import each individual reducer's selectors
// For example, getLogin is passed the Login state so that the reducer's function can pull from that state
export const getAuth = state => 
     fromAuth.getAuth(state.login)

export const getProfileWizardState = state => 
    fromProfileWizard.getProfileWizardState(state.profilewizard)
