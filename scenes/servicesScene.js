import React from 'react';
import styles from '../styles/styles';

import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import Text from '../components/animalText';
import ImageLabel from '../components/imageLabel';
import InPageImages from '../components/inPageImages'
import Dimensions from 'Dimensions';

export default class AboutScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Služby',
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    const TEXT_COLOR = 'white';

    const PADDING = 20;
    const WIDTH = Dimensions.get('window').width - PADDING;
    const ICON_SIZE = 64;
    const ICON_RIGHTMARGIN = 10;

    const ICON_STYLE = {width: ICON_SIZE, height: ICON_SIZE};

    return (
      <Image
        source={require('../images/background/about.png')}
        resizeMode="cover"
        style={{flex: 1, width: WIDTH+PADDING}}
      >

      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={[styles.contentView, , {backgroundColor: undefined}]}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: PADDING/2, justifyContent: 'center'}}>
          <InPageImages
            sources={[
              require('../images/icons/restaurace.png'),
              require('../images/icons/obcerstveni.png'),
              require('../images/icons/obchod.png'),
            ]}
            style={ICON_STYLE} marginRight={ICON_RIGHTMARGIN}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: PADDING/2, justifyContent: 'center'}}>
          <InPageImages
            sources={[
              require('../images/icons/toalety.png'),
              require('../images/icons/wifi.png'),
              require('../images/icons/pes.png'),
            ]}
            style={ICON_STYLE} marginRight={ICON_RIGHTMARGIN}/>
        </View>

        <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15}}>Jízda na ponících v Dětské zoo</Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Březen, Říjen 10-15:30
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Duben-Září 10-17:30
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center'}}>
          Cena 25 Kč
        </Text>

      <Text style={{color: TEXT_COLOR, paddingBottom: PADDING/2, backgroundColor: 'rgba(0,0,0,0)'}}>
        Platí mimo dny s nepříznivým počasím
      </Text>

        <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15}}>Půjčování dětských vozíků</Text>
        <Text style={{color: TEXT_COLOR, paddingBottom: PADDING/2, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 10}}>
          Půjčování zdarma pro děti do 30&nbsp;kg.
        </Text>

        <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15}}>Jízda vláčkem</Text>
        <Text style={{color: TEXT_COLOR, paddingBottom: PADDING/2, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 10}}>
        Od 1.&nbsp;4. do 30.&nbsp;4. provoz vláčku pouze o&nbsp;víkendech a svátcích.{'\n'}
        Od 1.&nbsp;5. do 15.&nbsp;9. provoz vláčku denně.{'\n'}
        Od 16.&nbsp;9. do 31.&nbsp;10. provoz vláčku pouze o&nbsp;víkendech a svátcích.{'\n'}
        Od 1.&nbsp;11. do 31.&nbsp;3. vláček mimo provoz.
        </Text>

        <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', paddingLeft: PADDING/2, fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15}}>Tohle prosím nedělejte:</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: PADDING/2, justifyContent: 'center'}}>
          <InPageImages
            sources={[
              require('../images/icons/brusle_zakaz.png'),
              require('../images/icons/kolo_zakaz.png'),
              require('../images/icons/kolobezka_zakaz.png'),
            ]}
            style={ICON_STYLE} marginRight={ICON_RIGHTMARGIN}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: PADDING/2, paddingBottom: PADDING, justifyContent: 'center'}}>
          <InPageImages
            sources={[
              require('../images/icons/odrazedlo_zakaz.png'),
              require('../images/icons/skateboard_zakaz.png'),
            ]}
            style={ICON_STYLE} marginRight={ICON_RIGHTMARGIN}/>
        </View>
      </ScrollView>
      </Image>
    );
  }
}
