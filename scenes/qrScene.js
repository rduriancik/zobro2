import React from 'react';
import { WIDTH } from '../styles/styles';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Camera from 'react-native-camera';
import { NavigationActions } from 'react-navigation';
import { scenes, sceneTitles } from '../scenes';

var setSelectedAnimal;

export default class QrScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCamera: true,
    }

    setSelectedAnimal = this.props.setSelectedAnimal;
  }

  onBarCodeRead(barcode) {
    this.setState({showCamera: false});
    setSelectedAnimal(barcode.data);
    
    // We want to prevent state when camera is reloaded with back-button
    // This scenarios points back-button to main menu what is fine (and work-around)
    // Look at https://stackoverflow.com/questions/44034430/react-navigation-and-component-lifecycle
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: sceneTitles[scenes.MAIN_MENU].name,
        }),
        NavigationActions.navigate({
          routeName: sceneTitles[scenes.ANIMAL_DETAIL].name,
          params: {animal: barcode.data},
        })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const PADDING = 20;
    const WIDTH_WITH_PADDING = WIDTH - PADDING;


    if (this.state.showCamera) {
      return (
        <View style={styles.container}>
          <Camera
            style={styles.preview}
            onBarCodeRead={(barcode) => this.onBarCodeRead(barcode)}
            aspect={Camera.constants.Aspect.fill}>
          </Camera>
        </View>
      );
    } else {
      return (
        <Text>Loading</Text>
      );
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
    }
  });