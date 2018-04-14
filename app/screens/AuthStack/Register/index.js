
import Register from './Register'
import { connect } from 'react-redux'
import * as actions from './actions'

// Maps values from the state into the props variable on the Login page. We get these from our getLogin function
// const mapStateToProps = (state) => ({
//     ...getAuth(state)
// })

// If I did that, in the view file I could do this because loggedin is returned in getAuth and then mapped to the component's props object
/*
    constructor(props) {
        super(props)
    }

    ...

    render(){
        return (
            <Text>{this.props.loggedin}</Text>
        )
    }
*/

// Connects the Login page to the dispatch, actions, and props we set up 
export default connect(null, actions)(Register)