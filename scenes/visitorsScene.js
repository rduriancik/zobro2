import React from 'react';
import styles from '../components/styles';

import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import Text from '../components/text';
import ImageLabel from '../components/imageLabel';
import Dimensions from 'Dimensions';

export default class VisitorsScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Pro návštěvníky',
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    const TEXT_COLOR = 'black';

    const PADDING = 20;
    const WIDTH = Dimensions.get('window').width - PADDING;
    const ICON_SIZE = 64;

    const IMAGE_STYLE = {width: ICON_SIZE, height: ICON_SIZE};

    const data = [
      {source: require('../images/icons/telefon.png'), text: '546 432 311'},
      {source: require('../images/icons/fax.png'), text: '546 210 000'},
      {source: require('../images/icons/gps.png'), text: '49° 13\' 49,6\'\' N\n16° 31\' 59,9\'\' E'},
      {source: require('../images/icons/tramvaj.png'), text: 'č. 1, 3, 11'},
      {source: require('../images/icons/autobus.png'), text: 'č. 50, 52, 54'},
      {source: require('../images/icons/trolejbus.png'), text: 'č. 30'},
      {source: require('../images/icons/doba.png'), text: 'listopad–únor: 9.00–16.00 h\nbřezen, říjen: 9.00–17.00 h\nduben–září: 9.00–18.00 h'}
    ];

    let renderedData = [];
    data.forEach((element, idx) => {
      renderedData.push(
        <ImageLabel key={idx} source={element.source} style={IMAGE_STYLE}>
          <Text style={[{color: TEXT_COLOR, textAlignVertical: 'center', paddingLeft: 10}]}>{element.text}</Text>
        </ImageLabel>
      )
    });

    return (
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={styles.contentView}>
        <Text style={{color: TEXT_COLOR}}>
          Zoo Brno a stanice zájmových činností, příspěvková organizace {"\n"}
          U Zoologické zahrady 46 {"\n"}
          635 00 Brno
        </Text>
        {renderedData}
      </ScrollView>
    );
  }
}
