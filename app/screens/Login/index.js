import Login from './Login'
import { connect } from 'react-redux'
import * as actions from './actions'
import { getLogin } from '../../reducers/root.reducer'

// Maps values from the state into the props variable on the Login page. We get these from our getLogin function
const mapStateToProps = (state) => ({
    ...getLogin(state)
})

// Connects the Login page to the dispatch, actions, and props we set up 
export default connect(mapStateToProps, actions)(Login)