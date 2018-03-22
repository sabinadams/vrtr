import HomeScreen from '../screens/Home'
import { StackNavigator } from 'react-navigation'

// https://reactnavigation.org/docs/hello-react-navigation.html
export const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen // Can be a screen or another StackNavigator for subrouting
    }
})