import React from 'react'
import SwitchNav from './app/config/routes';
import NavigationService from './app/services/NavigationService';
import { Provider, connect } from 'react-redux'
import configureStore from './app/config/store'

const store = configureStore()

export default class App extends React.Component {

  render() {     
     return (
       <Provider store={store}>
        <SwitchNav ref={NavigationService.setTopLevelNavigator}/>
       </Provider>
    )
  }

}