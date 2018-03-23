import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native'

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

async function navigate(routeName, params) {
    // Grabs token (Could be from Redux store)
    let token = await AsyncStorage.getItem('userToken')
    // If you had a token, woot woot, else go to login page and clear router state
    routeName = token ? routeName : 'Auth'
    // If you have a token and were trying to go to login page, too bad
    if (['Auth', 'Login'].indexOf(routeName) > -1 && token) return
    // Perform navigation
    _navigator.dispatch(
        NavigationActions.navigate({
            type: NavigationActions.NAVIGATE,
            routeName: routeName,
            params: token ? params : {},
        })
    );
}

// add other navigation functions that you need and export them
export default {
    navigate,
    setTopLevelNavigator,
};