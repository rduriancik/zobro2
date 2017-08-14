import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import styles from '../styles/styles';
import AnimalNeighbourScene from '../components/animalNeighbourScene';

import {
  View,
  ScrollView,
  Image,
  Text,
  Alert,
  TouchableHighlight,
} from 'react-native';

import animals from '../animals';

class TextTab extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = (navigation) =>
    ({
      title: 'Text',
    tabBarIcon: ({tintColor}) => (
      <Image
          source={require('../images/tab-icons/t.png')}
          style={[styles.tabIcons, {backgroundColor: tintColor}]}
      />
    )
  })

  render() {
    let AnimalDetail;
    const animalName = this.props.screenProps.animal;

    if (!(animalName in animals)) {
        return (
          <Text>Neznámý QR kód načten: {animalName}</Text>
        );
    }

    if (this.props.screenProps.readerLevel === "adult") {
      AnimalDetail = animals[animalName].contentAdult;
    } else {
      AnimalDetail = animals[animalName].contentChild;
    }

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
    if (this.props.screenProps.cameraReady) {
        return <Text>Camera is ON</Text>
    } else {
      return <Text>QR tab:: OFF</Text>
    }
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
    const animalName = this.props.screenProps.animal;

    if (!(animalName in animals)) {
        return (
          <Text>Neznámý QR kód načten: {animalName}</Text>
        );
    }

    return (
      <AnimalNeighbourScene
        navigation={this.props.screenProps.parentNavigation}
        setAnimalTab={this.props.screenProps.setAnimalTab}
        animal={animalName} />
    );
  }
}

export default class AnimalMainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let animalName;
    let image;

    if ((this.props.animal in animals)) {
      animalName = animals[this.props.animal].name;
    } else {
      animalName = 'Chybný QR kód';
    }

      if ( this.props.readerLevel === 'adult') {
        image = require('../images/tab-icons/adult.png');
      } else {
        image = require('../images/tab-icons/child.png');
      }

      const MainScreenNavigator = TabNavigator({
        Text: { screen: TextTab },
        QR: { screen: QRTab },
        Neighbour: { screen: NeighbourTab }
      }, {
        initialRouteName: this.props.tabName
      });

    const MainStack = StackNavigator({
      Main: { screen: MainScreenNavigator },
    }, {
      navigationOptions: {
        title: animalName,
        headerLeft: <TouchableHighlight onPress={ () => {
          return this.props.navigation.goBack();
        }}><Text style={{color: 'red'}}>BACK</Text></TouchableHighlight>,
        headerRight: <TouchableHighlight onPress={ () => {
          if (this.props.readerLevel === 'adult') {
              this.props.setReaderLevel('child');
          } else {
              this.props.setReaderLevel('adult');
          }
        }}><Image source={image} resizeMode='cover' style={{backgroundColor:'black'}}/></TouchableHighlight>
      }
    });

    const p = {};
    p.animal = this.props.animal;
    p.readerLevel = this.props.readerLevel;
    p.cameraReady = this.props.cameraReady;
    p.setCameraReady = this.props.setCameraReady;
    p.setReaderLevel = this.props.setReaderLevel;
    p.setAnimalTab = this.props.setAnimalTab;
    p.parentNavigation = this.props.navigation;
    return (
      <MainStack
        screenProps={p}
        onNavigationStateChange={(prevState, currentState) => {
          if ('QR' === prevState.routes[0].routes[prevState.routes[0].index].key) {
            p.setCameraReady(true);
          }
          p.setAnimalTab(currentState.routes[0].routes[currentState.routes[0].index].key);
        }}
      />
    );
  }
}
