import React from 'react'
import SwitchNav from './app/config/routes';
import NavigationService from './app/services/NavigationService';

export default class App extends React.Component {

  render() {
     return <SwitchNav 
       ref={navigatorRef => {
         NavigationService.setTopLevelNavigator(navigatorRef);
       }}
     />
  }

}