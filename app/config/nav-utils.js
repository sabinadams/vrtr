
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
    // console.log(action) <-- Uncomment to see printouts of each dispatch to the store (including non-nav things)
    // If there was no token
    if ( !await AsyncStorage.getItem('userToken') ) {
        switch (action.type) {
            // If you were navigating
            case NavigationActions.navigate.toString():
                if (action.routeName && ['Login', 'Auth'].indexOf(action.routeName) > -1) return next(action)
                // Change destination route to Auth
                action.routeName = 'Auth'
                // Clear out all of local storage (logout)
                store.dispatch({ type: 'unauthorized' });
                AsyncStorage.clear()
            break;
            // If you were going back using menu
            case NavigationActions.back.toString():
                if (action.routeName && ['Login', 'Auth'].indexOf(action.routeName) > -1) return next(action)
                // Dispatch a route change to the store
                store.dispatch(NavigationActions.navigate({ routeName: 'Auth' }))
                // Log out
                store.dispatch({ type: 'unauthorized' });
                AsyncStorage.clear()
                return null;
            break;
        }
    }

    // Return the next state
    return next(action)
}

export {
    middleware,
    addListener,
    nav_auth
};