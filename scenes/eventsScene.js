import React from 'react';
import styles, { WIDTH } from '../styles/styles';

import Accordion from 'react-native-collapsible/Accordion';
import PushNotification from 'react-native-push-notification';

import {
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  ImageBackground,
  Alert
} from 'react-native';
import Text from '../components/animalText';

import events from '../events.js';

var _this = null;

export default class EventScene extends React.Component {
  constructor(props) {
    super(props);

    PushNotification.configure({
      onNotification: function(notification) {
            Alert.alert(notification.message);
        },

        permissions: {
            alert: true,
            badge: false,
            sound: true
        },
    });
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
      <ImageBackground
        source={section.thumbnail}
        style={{width: WIDTH, height: 80 }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#144d22B0',
            height: 80,
          }}
          ref={(component) => {
            if (!(_this.eventHeader.includes(component)) && (component !== null)) {
              _this.eventHeader.push(component);
            }
          }}
        >
          <Text style={[styles.eventItemText, {fontWeight: 'bold'}]}>
            {section.name}
          </Text>
          <Text style={styles.eventItemText}>dnes, {section.time}</Text>
        </View>
      </ImageBackground>
    );
  }

  _renderContent(event) {
    return (
      <View style={{backgroundColor: '#1d1b1b'}}>
        <Image
          resizeMode='contain'
          source={event.thumbnail}
          style={{width: WIDTH, height: 120 }}
        />
        <Text style={{fontSize: 22, paddingBottom: 20, paddingTop: 20,
          color: 'white', textAlign: 'center'}}>
          {event.place}
        </Text>
        <Text style={{fontSize: 16, width: WIDTH, textAlign: 'center',
          paddingBottom: 20, paddingTop: 20, color: 'white'}}>
          Chcete být upozorněni na začátek krmení?
        </Text>
        <View style={{height: 62, flexDirection: 'row'}}>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton, _this.styleEvent(event, 5)]} 
            onPress={() => _this.toggleEvent(event, 5)}>
            <Text style={styles.eventButtonText}> 5 minut </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton, _this.styleEvent(event, 10)]}
            onPress={() => _this.toggleEvent(event, 10)}>
            <Text style={styles.eventButtonText}> 10 minut </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton, _this.styleEvent(event, 15)]}
            onPress={() => _this.toggleEvent(event, 15)}>
            <Text style={styles.eventButtonText}> 15 minut </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  toggleEvent(zooEvent, deltaTime) {
    if (this.checkEventNotification(zooEvent, deltaTime)) {
      this.props.removeNotification(zooEvent, deltaTime);
      PushNotification.cancelLocalNotifications(
        { id: this._createNotificationID(zooEvent, deltaTime)}
      );
    } else {
      const deltas = [5, 10, 15];
      // @todo: fix - android issue, ID have to be integer
      // remove notifications for same zooEvent but different deltaTime
      deltas.forEach((value) => {
          PushNotification.cancelLocalNotifications(
            { id: this._createNotificationID(zooEvent, value)}
          );
      });

      // add new local notification
      let fireTime = new Date(Date.now());
      const p = zooEvent.time.split(':');
      fireTime.setHours(p[0]);
      fireTime.setMinutes(p[1]);
      fireTime.setSeconds(0);

      let z = {
        id: this._createNotificationID(zooEvent, deltaTime),
        vibrate: true,
        message: (zooEvent.name + '\n' + zooEvent.place + '\n' + zooEvent.time),
        userInfo: {id: this._createNotificationID(zooEvent, deltaTime)},
        // @fix: this is for testing purposes; run alarm in 10 seconds
//        date: new Date(Date.now() + 1000 * 10),
        date: new Date(fireTime - ((deltaTime + 0) * 60 * 1000)),
      };
      PushNotification.localNotificationSchedule(z);

      this.props.addNotification(zooEvent, deltaTime)
    }
  }

  checkEventNotification(zooEvent, deltaTime) {
    return (this.props.notifications[zooEvent.id] === deltaTime);
  }

  _createNotificationID(zooEvent, deltaTime) {
    const x = 100 * 1 * zooEvent.nid;
    return x.toString();
  }

  _onEventChange(newIndex) {
    const HEIGHT_HEADER = 80;

    for (headerIndex in _this.eventHeader) {
      if (('' + headerIndex) === ('' + newIndex)) {
          _this.refs.list.scrollTo({
              x: 0,
              y: (newIndex * HEIGHT_HEADER),
          });
      }
    }
  }

  styleEvent(zooEvent, deltaTime) {
    if (this.checkEventNotification(zooEvent, deltaTime)) {
      return ({
        backgroundColor: '#3cac54',
      });
    } else {
      return ({
      });
    }
  }

  render() {
    _this = this;
    _this.eventHeader = [];

    const currentDate = new Date();
    const SHOW_RUNNING = 30;
    let filteredEvents = events.filter((event) => {
      const matchingDay = event['weekdays'].includes(currentDate.getDay());

      const eventHour = event['time'].split(":")[0];
      const eventMinutes = event['time'].split(":")[1];
      const eventTime = 60 * parseInt(eventHour) + parseInt(eventMinutes) + SHOW_RUNNING
      const currentTime = 60 * currentDate.getHours() + currentDate.getMinutes();

      const startDate = new Date(event.startDate); // include this day
      const endDate = new Date(event.endDate);  // do not include this day

      const result = (
          matchingDay &&
          (eventTime >= currentTime) &&
          (+startDate <= +currentDate) &&
          (+endDate > +currentDate)
        );
      return result;
    });

    filteredEvents.sort((a,b) => {
      if (a.time < b.time) {
        return -1;
      } else if (a.time > b.time) {
        return 1;
      } else {
        return 0;
      }
    });

    return (
      <ImageBackground
        source={require('../images/background/about.png')}
        style={{flex: 1, width: WIDTH}}
      >
        {
          filteredEvents.length === 0
          ? (
            <View style={[styles.eventItem, {flex:1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0)'}]}>
              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.eventItemText}>Je nám líto,</Text>
                <Text style={styles.eventItemTextTime}>dnes už jsme nakrmení.</Text>
              </View>
            </View>
          ) : (
            <ScrollView ref="list">
              <Accordion
                sections={filteredEvents}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._onEventChange}
              />
            </ScrollView>
          )
        }
      </ImageBackground>
    );
  }
}
