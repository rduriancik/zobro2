import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AboutScene from './scenes/aboutScene';
import VisitorsScene from './scenes/visitorsScene';
import ServicesScene from './scenes/servicesScene';

export default class zobro2 extends Component {
  render() {
    return (
      <ServicesScene />
    );
  }
}

AppRegistry.registerComponent('zobro2', () => zobro2);
