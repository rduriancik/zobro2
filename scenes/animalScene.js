import React from 'react';
import { TabNavigator } from 'react-navigation';
import styles from '../components/styles';

import {
  View,
  ScrollView,
  Image,
  Text,
  Alert,
} from 'react-native';

import animals from '../animals';

class TextTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Zvíře',
    tabBarIcon: ({tintColor}) => (
      <Image
          source={require('../images/tab-icons/t.png')}
          style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
  }

  render() {
    const animalName = this.props.navigation.state.params.animal;
    const AnimalDetailAdult = animals[animalName].contentAdult;
    const AnimalDetail = AnimalDetailAdult;

    return (
      <ScrollView>
        <AnimalDetail animal = {animalName} />
      </ScrollView>
    );
  }
}

class QRTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'QR tab',
    tabBarIcon: ({tintColor}) => (
      <Image
          source={require('../images/tab-icons/qr.png')}
          style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
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
    tabBarIcon: ({tintColor}) => (
      <Image
          source={require('../images/tab-icons/neighb.png')}
          style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
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
