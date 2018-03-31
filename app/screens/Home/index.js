import Home from './Home'
import { connect } from 'react-redux'
import * as actions from './actions'
import { getLogin } from '../../shared/reducers/root.reducer'
// import * as authActions from '../../shared/actions/auth.actions'
// Maps values from the state into the props variable on the Login page. We get these from our getLogin function
const mapStateToProps = (state) => ({
    ...getLogin(state)
})

// This is how we'd combine different action files to make available to the screen
// const mapDispatchToProps = () => ({
//     ...actions,
//     ...navActions
// })

// Connects the Login page to the dispatch, actions, and props we set up 
export default connect(mapStateToProps, actions)(Home)

// How we would connect with combined actions
// export default connect(mapStateToProps, mapDispatchToProps)(Home)