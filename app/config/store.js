import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/root.reducer'
import thunk from 'redux-thunk'

export default function configureStore( initialState = undefined ) {
    // Adds in all the middlewares I want to use with Redux
    // Logger for logging redux events, thunk for async actions
    const enhancer = compose(
        // https://redux.js.org/advanced/async-actions#actions.js-(with-fetch)
        applyMiddleware(createLogger(), thunk)
    )
    return createStore(rootReducer, initialState, enhancer)
}