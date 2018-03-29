import Login from './Login'
import { connect } from 'react-redux'
import * as actions from './actions'
import { getLogin } from '../../reducers/root.reducer'

const mapStateToProps = (state) => ({
    ...getLogin(state)
})

export default connect(mapStateToProps, actions)(Login)