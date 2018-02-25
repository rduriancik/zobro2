import React from 'react';
import styles, { WIDTH } from '../styles/styles';

import {
  ScrollView,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import Text from '../components/animalText';

import {scenes, sceneTitles} from '../scenes';

class MainMenuItem extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const bgColor = sceneTitles[this.props.scene].bgColor;
    const title = sceneTitles[this.props.scene].title;

    return (
      <TouchableHighlight
        underlayColor='#aaaaaa'
        onPress={() => {this.props.navigation.navigate(sceneTitles[this.props.scene].name, {animal: 'tygrSumatersky'})}}
        >
          <ImageBackground
            style={styles.mainMenuItem}
            source={sceneTitles[this.props.scene].background}
          >
            <Text style={[styles.mainMenuItemText, {
              textAlign: this.props.alignText,
              paddingRight: 32,
              paddingLeft: 32,
            }]}>{title}</Text>
          </ImageBackground>
        </TouchableHighlight>
    );
  }
}

export default class MenuScene extends React.Component {
  constructor(props) {
      super(props);
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    const TEXT_COLOR = 'black';

    const PADDING = 20;
    const WIDTH_WITH_PADDING = WIDTH - PADDING;
    const menuItems = [scenes.QR_READER, scenes.ANIMAL_LIST, scenes.EVENTS,
      scenes.GAME, scenes.SERVICES, scenes.VISITORS, scenes.ABOUT];

    return (
      <ImageBackground
        source={require('../images/background/about.png')}
        style={{flex: 1, width: WIDTH}}
      >
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM}
       style={[styles.contentView,{paddingLeft: 0, paddingRight: 0, paddingTop: 0,
       backgroundColor: undefined}]}>
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
      </ImageBackground>
    );
  }
}
