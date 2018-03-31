// https://reactnavigation.org/docs/hello-react-navigation.html  (basic navigation explanation)
// https://reactnavigation.org/docs/deep-linking.html            (useful for opening app from website)
// https://reactnavigation.org/docs/auth-flow.html               (will be necessary for auth stuff)

import { SwitchNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
// Screens
import AuthLoading from '../screens/Loading/AuthLoading'
import HomeScreen from '../screens/Home'
import LoginScreen from '../screens/Login'

import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addListener } from './nav-utils';

// Stacks
const AppStack = DrawerNavigator({ Home: HomeScreen })
const AuthStack = StackNavigator({ Login: LoginScreen })

// There can also be other sets of routes for other things like Admin users, Premium users, etc...
// These don't need to all be Stack Navigators. They can also just be Screens (Like AuthLoading is)
// SwitchNavigator makes it so that if you are in one Stack and move to a route in another stack it clears the router's state (including history)
export const SwitchNav = SwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack
    }, 
    {
        initialRouteName: 'AuthLoading'
    }
);


class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const { dispatch, nav } = this.props;
        return (
            <SwitchNav
                navigation={{
                    dispatch,
                    state: nav,
                    addListener,
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);