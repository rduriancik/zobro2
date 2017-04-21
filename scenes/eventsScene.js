import React from 'react';
import styles from '../components/styles';

import Accordion from 'react-native-collapsible/Accordion';
import Collapsible from 'react-native-collapsible';

import {
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';
import Text from '../components/text'
import Dimensions from 'Dimensions';
import EVENTS from '../events.js';

const backgroundColors = [
  '#37af54',
  '#2d9946',
  '#267f3b',
  '#20642f',
  '#267f3b',
  '#2d9946',
];

var _this = null;

export default class EventsScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTime: 10,
    }
  }

  isTimeSelected(time) {
    if (time === this.state.selectedTime) {
      return {backgroundColor: '#3cac54'};
    } else {
      return null;
    }
  }

  _renderHeader(section, index) {
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColors[index % backgroundColors.length],
        height: 80,
      }}>
        <Text style={[styles.eventItemText, {fontWeight: 'bold'}]}>{section.name}</Text>
        <Text style={styles.eventItemText}>dnes, {section.time}</Text>
      </View>
    );
  }

  _renderContent(event) {
    const WIDTH = Dimensions.get('window').width;

    return (
      <View style={{backgroundColor: '#1d1b1b'}}>
        <Image
          resizeMode='contain'
          source={event.thumbnail}
          style={{width: WIDTH, height: 120 }}
        />
        <Text style={{fontSize: 22, paddingBottom: 20, paddingTop: 20, color: 'white', textAlign: 'center'}}>
          {event.place}
        </Text>
        <Text style={{fontSize: 16, width: WIDTH, textAlign: 'center', paddingBottom: 20, paddingTop: 20, color: 'white'}}>
          Chcete být upozorněni na začátek krmení?
        </Text>
        <View style={{height: 50, flexDirection: 'row'}}>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton]} onPress={() => _this.abc(event.place, 5)}>
            <Text style={styles.eventButtonText}> 5 minut </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton]} onPress={() => _this.abc(event.place, 10)}>
            <Text style={styles.eventButtonText}> 10 minut </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton]} onPress={() => _this.abc(event.place, 15)}>
            <Text style={styles.eventButtonText}> 15 minut </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  render() {
    _this = this;

    return (
      <ScrollView>
      <Accordion
        sections={EVENTS}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
      </ScrollView>
    );
  }
}
