import React from 'react';
import styles from '../styles/styles';

import {
  View,
  ScrollView,
  Image,
  Linking,
  TouchableHighlight,
} from 'react-native';
import Text from '../components/animalText';
import ImageLabel from '../components/imageLabel';
import Dimensions from 'Dimensions';
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
    const TEXT_COLOR = 'white';

    const PADDING = 20;
    const WIDTH = Dimensions.get('window').width - PADDING;

    return (
      <Image
        source={require('../images/background/about.png')}
        resizeMode="cover"
        style={{flex: 1, width: WIDTH+20}}
      >
        <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={[styles.contentView, {backgroundColor: undefined}]}>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', fontWeight: '700', paddingTop: 10}}>
          Kdy máme otevřeno?
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Listopad-Únor 9-16
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Březen, Říjen 9-17
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Duben-Září 9-18
        </Text>

        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', fontWeight: '700', paddingTop: 10}}>
          Jak se k nám dostat?
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Trolejbus 30
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Tramvaj 1, 3, 11
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Autobus 50, 52, 54
        </Text>

        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', fontWeight: '700', paddingTop: 10}}>
          Jak se s námi spojit?
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          zoo@zoobrno.cz
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          546 432 311
        </Text>

          <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center', paddingTop: 10}}>
                    Zoo Brno a stanice zájmových činností, příspěvková organizace {"\n"}
          U Zoologické zahrady 46 {"\n"}
          635 00 Brno
        </Text>
        </ScrollView>
      </Image>
    );
  }
}
