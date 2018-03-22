import HomeScreen from '../screens/Home'
import { StackNavigator } from 'react-navigation'

export const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen,
    }
})