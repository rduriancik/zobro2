import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AboutScene from './scenes/aboutScene';

export default class zobro2 extends Component {
  render() {
    return (
      <AboutScene />
    );
  }
}

AppRegistry.registerComponent('zobro2', () => zobro2);
