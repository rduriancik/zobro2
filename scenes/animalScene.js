import React from 'react';
import styles from '../components/styles';

import {
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';

import { TabNavigator } from 'react-navigation';

class TextTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Zvíře',
  }

  render() {
    return (
      <Text>Text tab</Text>
    );
  }
}

class QRTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'QR tab',
  }

  render() {
    return (
      <Text>QR tab</Text>
    );
  }
}

class NeighbourTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Sousedi',
  }

  render() {
    return (
      <Text>Sousedi</Text>
    );
  }
}

const MainScreenNavigator = TabNavigator({
	Text: { screen: TextTab },
  QR: { screen: QRTab },
  Neighbour: { screen: NeighbourTab }
});

export default MainScreenNavigator;
