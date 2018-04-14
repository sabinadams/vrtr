import React from 'react'
import NavigationService from './app/shared/services/NavigationService';
import { Provider } from 'react-redux'
import configureStore from './app/config/store'
import SwitchNav from './app/config/routes';


// Initializes store
const store = configureStore()

export default class App extends React.Component {

  render() {     
     return (
       <Provider store={store}>
        <SwitchNav ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
       </Provider>
    )
  }

}