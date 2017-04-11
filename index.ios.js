import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AboutScene from './scenes/aboutScene';
import VisitorsScene from './scenes/visitorsScene';

export default class zobro2 extends Component {
  render() {
    return (
      <VisitorsScene />
    );
  }
}

AppRegistry.registerComponent('zobro2', () => zobro2);
