import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native'

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

async function navigate(routeName, params) {
    let token = await AsyncStorage.getItem('userToken')
    _navigator.dispatch(
        NavigationActions.navigate({
            type: NavigationActions.NAVIGATE,
            routeName: token ? routeName : 'Auth',
            params: token ? params : {},
        })
    );
}

// add other navigation functions that you need and export them
export default {
    navigate,
    setTopLevelNavigator,
};