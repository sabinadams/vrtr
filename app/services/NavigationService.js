import { NavigationActions } from 'react-navigation'
import { AsyncStorage } from 'react-native'

/*********************************************************************************************
 * Using Default Back won't check token. We can build custom header with custom back button. 
 * If we use this service to define back functionality we can check token on back nav.
 * We will probably want a custom header anyways
 * I suggest by default we never show the header/backbutton. We just add it on screens where you 
 * would actually go back
 *********************************************************************************************/

// This should use redux eventually

let _navigator

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef
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
    )
}

// add other navigation functions that you need and export them
export default {
    navigate,
    setTopLevelNavigator,
}