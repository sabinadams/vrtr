import React from 'react'
import NavigationService from './app/shared/services/NavigationService';
import { Provider } from 'react-redux'
import configureStore from './app/config/store'
import SwitchNav from './app/config/routes';
import globalStyles from './app/assets/styles/global'
import colors from './app/assets/styles/colors'

// Sets up network debugging in chrome browser
global.XMLHttpRequest = global.originalXMLHttpRequest ?
  global.originalXMLHttpRequest :
  global.XMLHttpRequest;
global.FormData = global.originalFormData ?
  global.originalFormData :
  global.FormData;

// Initializes store
const store = configureStore()

export default class App extends React.Component {
  render() {     
     return (
       <Provider store={store}>
        <SwitchNav ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        screenProps={{colors, globalStyles}}/>
       </Provider>
    )
  }
}
