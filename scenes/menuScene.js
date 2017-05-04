import React from 'react';
import styles from '../styles/styles';

import {
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';
import Text from '../components/animalText';

import * as scenes from '../scenes';

class MainMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgColor = scenes.sceneTitles[this.props.scene].bgColor;
    const title = scenes.sceneTitles[this.props.scene].title;

    return (
      <TouchableHighlight
        underlayColor='#aaaaaa'
        onPress={() => {this.props.navigation.navigate(scenes.sceneTitles[this.props.scene].name, {animal: 'tygrSumatersky'})}}
        >
          <View style={[styles.mainMenuItem, {backgroundColor: bgColor}]}>
            <Text style={[styles.mainMenuItemText, {
              textAlign: this.props.alignText,
              paddingRight: 32,
              paddingLeft: 32,
            }]}>{title}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

export default class MenuScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerVisible: false,
    headerMode: 'screen',
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    const TEXT_COLOR = 'black';

    const PADDING = 20;
    const menuItems = [scenes.ANIMAL_DETAIL, scenes.ANIMAL_LIST, scenes.EVENTS, scenes.GAME, scenes.SERVICES, scenes.VISITORS, scenes.ABOUT];

    return (
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={styles.contentView}>
        {
        menuItems.map((itemInMenu, index) => (
          <MainMenuItem
            key={index}
            alignText={index % 2 ? 'left' : 'right'}
            scene={itemInMenu}
            navigation={this.props.navigation}
          />
        ))
        }
      </ScrollView>
    );
  }
}
