import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/root.reducer'

export default function configureStore( initialState = undefined ) {
    const logger = createLogger()
    const enhancer = compose(
        applyMiddleware(logger)
    )
    return createStore(rootReducer, initialState, enhancer)
}