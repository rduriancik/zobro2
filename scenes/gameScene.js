import React from 'react';
import styles from '../components/styles';

import {
  View,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import Text from '../components/text'
import InPageImages from '../components/inPageImages'
import Dimensions from 'Dimensions';
import Hyperlink from 'react-native-hyperlink'

export default class AboutScene extends React.Component {
  constructor(props) {
    super(props);
  }

  _openURL(url) {
    Linking.openURL(url);
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    const TEXT_COLOR = 'black';

    const WIDTH = Dimensions.get('window').width - PADDING;
    const PADDING = 20;

    return (
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={styles.contentView}>
        <Text style={{color: TEXT_COLOR}}>
          Čeká na vás spousta zábavy, cesta kolem světa, 10&nbsp;stanovišť a 1&nbsp;lamí píseň.
        </Text><Text style={{color: TEXT_COLOR}}>
          Šifrovací hra je zdarma, platí se jen vstupné do zoo. Potřebujete s&nbsp;sebou dobře nabitý chytrý telefon / tablet s&nbsp;připojením na internet a tužku.
        </Text><Text style={{color: TEXT_COLOR}}>
          Start hry je na konci vstupního esíčka před Tygřími skalami.
        </Text><Text style={{color: TEXT_COLOR}}>
          Více se o&nbsp;šifrovací hře Dotkni se evoluce dozvíte na
        </Text>
        <Hyperlink onPress={() => {this._openURL('http://www.dotkni-se-evoluce.cz')}}>
          <Text style={[styles.ctext, {color: 'blue', textAlign: 'center'}]}>www.dotkni-se-evoluce.cz</Text>
        </Hyperlink>
        <Text style={{color: TEXT_COLOR}}>
          P. S.: Je to opravdu pecka! A jsme první gamifikovaná zoo v&nbsp;ČR.
        </Text>

        <Image source={require('../images/cryptomania.jpg')} style={{width: WIDTH, height: 500, marginRight: 0, marginLeft: 0}} resizeMode='contain'/>
      </ScrollView>
    );
  }
}
