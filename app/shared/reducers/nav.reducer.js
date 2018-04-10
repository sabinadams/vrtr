// Need to make a nav.actions file so that the same nav actions can be used throughout
import { SwitchNav } from '../../config/routes';
import { NavigationActions } from 'react-navigation';

// Default State to AuthLoading
const DEFAULT_STATE = SwitchNav.router.getStateForAction(
    SwitchNav.router.getStateForAction(
        SwitchNav.router.getActionForPathAndParams('AuthLoading')
    )
);

/*********************** Use Examples ***********************
    // Action with custom logic
    dispatch({
        type: 'test',
        action: NavigationActions.navigate({
            routeName: 'App',
        })
    });

    // Default navigation
    dispatch(NavigationActions.navigate({
        routeName: 'App',
    }));
************************************************************/

export default function (state = DEFAULT_STATE, action) {
    let nextState;
    switch (action.type) {
        // case 'test':
        //     console.log("Custom logic")
        //     nextState = SwitchNav.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'Home'}),
        //         state
        //     )
        //     break;
        default:
            nextState = SwitchNav.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}
