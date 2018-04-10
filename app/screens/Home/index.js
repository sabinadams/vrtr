import Home from './Home'
import { connect } from 'react-redux'
import * as actions from './actions'

// Connects the Login page to the dispatch, actions, and props we set up 
export default connect(null, actions)(Home)
