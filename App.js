import { StackNavigator, SwitchNavigator } from 'react-navigation';

// Screens
import HomeScreen from './app/screens/Home'
import LoginScreen from './app/screens/Login'
import AuthLoading from './app/screens/Loading/AuthLoading'

// https://reactnavigation.org/docs/hello-react-navigation.html  (basic navigation explanation)
// https://reactnavigation.org/docs/deep-linking.html            (useful for opening app from website)
// https://reactnavigation.org/docs/auth-flow.html               (will be necessary for auth stuff)

// Set of routes for Authenticated Users
const AppStack = StackNavigator({ Home: HomeScreen });
// Set of routes for Unauthenticated Users
const AuthStack = StackNavigator({ Login: LoginScreen });

// There can also be other sets of routes for other things like Admin users, Premium users, etc...
export default SwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);