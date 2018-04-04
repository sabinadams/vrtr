
import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import { NavigationActions } from 'react-navigation'
import { AsyncStorage } from 'react-native'

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

// Runs on each dispatch to store. Will only listen to Navigation actions in the switch
const nav_auth = store => next => async action => {
    // If there was no token
    if ( !await AsyncStorage.getItem('userToken') ) {
        switch (action.type) {
            // If you were navigating
            case NavigationActions.navigate.toString():
                // Change destination route to Auth
                action.routeName = 'Auth'
                // Clear out all of local storage (logout)
                store.dispatch({ type: 'logout' });
                AsyncStorage.clear()
            break;
            // If you were going back using menu
            case NavigationActions.back.toString():
                // Dispatch a route change to the store
                store.dispatch(NavigationActions.navigate('Auth'))
                // Log out
                store.dispatch({ type: 'logout' });
                AsyncStorage.clear()
                return null;
            break;
        }
    }

    // Return the next stat
    return next(action)
}

export {
    middleware,
    addListener,
    nav_auth
};