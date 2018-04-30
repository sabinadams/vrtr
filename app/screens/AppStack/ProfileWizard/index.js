import ProfileWizardScreen from './ProfileWizard'
import { connect } from 'react-redux'
import * as actions from './actions'

// Connects the Login page to the dispatch, actions, and props we set up 
export default connect(
    state => ({...state.profilewizard}), 
    dispatch => ({dispatch, actions})
)(ProfileWizardScreen)
