import React, { Component } from 'react';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';

import Login from './src/components/Login/Login';

export default class DemoLogin extends Component {
  render() {
    return (
     <Login />
    );
  }
}

AppRegistry.registerComponent(appName, () => DemoLogin);