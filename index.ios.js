import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';

import AboutScene from './scenes/aboutScene';
import VisitorsScene from './scenes/visitorsScene';
import ServicesScene from './scenes/servicesScene';
import GameScene from './scenes/gameScene';
import EventsScene from './scenes/eventsScene';
import MenuScene from './scenes/menuScene';

//import * as scenes from './scenes.js';

const zobro2 = StackNavigator({
  MAIN_MENU: { screen: MenuScene },
  ABOUT: { screen: AboutScene },
  EVENTS: { screen: EventsScene },
  SERVICES: { screen: ServicesScene },
  GAME: { screen: GameScene },
  VISITORS: { screen: VisitorsScene },
}, {
  initialRouteName: 'MAIN_MENU',
});

AppRegistry.registerComponent('zobro2', () => zobro2);
