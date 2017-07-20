import React from 'react';
import styles from '../styles/styles';
import {WIDTH} from '../styles/styles';

import {
  View,
  ScrollView,
  Image,
  Linking,
  TouchableHighlight,
} from 'react-native';
import Text from '../components/animalText';
import ImageLabel from '../components/imageLabel';
import Hyperlink from 'react-native-hyperlink'

export default class VisitorsScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Pro návštěvníky',
  }

  _openURL(url) {
    Linking.openURL(url);
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;

    return (
      <Image
        source={require('../images/background/about.png')}
        resizeMode="cover"
        style={{flex: 1, width: WIDTH}}
      >
        <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={[styles.contentView, {backgroundColor: undefined}]}>
        <Text style={{fontWeight: '700', paddingTop: 10}}>
          Kdy máme otevřeno?
        </Text>
        <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}} />
        <Text style={{textAlign: 'left', flex: 2}}>
          Listopad-Únor{"\n"}
          Březen, Říjen{"\n"}
          Duben-Září
        </Text>
        <Text style={{textAlign: 'right', flex: 1}}>
        9-16{"\n"}
        9-17{"\n"}
        9-18
        </Text>
        <View style={{flex: 1}} />
        </View>

        <Text style={{fontWeight: '700', paddingTop: 10}}>
          Jak se k nám dostat?
        </Text>
        <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}} />
        <Text style={{textAlign: 'left', flex: 2}}>
          Trolejbus{"\n"}
          Tramvaj{"\n"}
          Autobus
        </Text>
        <Text style={{textAlign: 'right', flex: 1.5}}>
        30{"\n"}
        1, 3, 11{"\n"}
        50, 52, 54
        </Text>
        <View style={{flex: 1}} />
        </View>

        <Text style={{fontWeight: '700', paddingTop: 10}}>
          Jak se s námi spojit?
        </Text>
        <Text style={{textAlign: 'center'}}>
          zoo@zoobrno.cz {"\n"}
          546 432 311
        </Text>
        <Text style={{textAlign: 'center', paddingTop: 10}}>
          Zoo Brno a stanice zájmových činností, příspěvková organizace {"\n"}
          U Zoologické zahrady 46 {"\n"}
          635 00 Brno
        </Text>
        </ScrollView>
      </Image>
    );
  }
}
