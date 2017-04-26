import React from 'react';
import styles from '../components/styles';

import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import Text from '../components/text';
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
    const TEXT_COLOR = 'black';

    const PADDING = 20;
    const WIDTH = Dimensions.get('window').width - PADDING;
    const ICON_SIZE = 64;
    const ICON_RIGHTMARGIN = 10;

    const ICON_STYLE = {width: ICON_SIZE, height: ICON_SIZE};

    return (
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={styles.contentView}>
        <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', paddingLeft: PADDING/2, fontWeight: 'bold'}}>Co u nás najdete:</Text>
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

        <ImageLabel source={require('../images/icons/vozicek.png')} style={ICON_STYLE}>
          <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', paddingLeft: PADDING/2, fontWeight: 'bold'}}>Půjčování dětských vozíků</Text>
        </ImageLabel>
        <Text style={{color: TEXT_COLOR, paddingBottom: PADDING/2}}>
          Půjčování zdarma pro děti do 30&nbsp;kg.
        </Text>

        <ImageLabel source={require('../images/icons/ponici.png')} style={ICON_STYLE}>
          <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', paddingLeft: PADDING/2, fontWeight: 'bold'}}>Jízda na ponících v Dětské zoo</Text>
        </ImageLabel>
        <Text style={{color: TEXT_COLOR, paddingBottom: PADDING/2}}>
        duben–září denně od 10.00 do 17.30&nbsp;h {'\n'}
        říjen–březen denně od 10.00 do 15.30&nbsp;h {'\n'}
        Platí mimo dny s&nbsp;nepříznivým počasím. {'\n'}
        Jedna jízda stojí 25&nbsp;Kč.
        </Text>

        <ImageLabel source={require('../images/icons/vlacek.png')} style={ICON_STYLE}>
          <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', paddingLeft: PADDING/2, fontWeight: 'bold'}}>Jízda vláčkem</Text>
        </ImageLabel>
        <Text style={{color: TEXT_COLOR, paddingBottom: PADDING/2}}>
        Od 1.&nbsp;4. do 30.&nbsp;4. provoz vláčku pouze o&nbsp;víkendech a svátcích.{'\n'}
        Od 1.&nbsp;5. do 15.&nbsp;9. provoz vláčku denně.{'\n'}
        Od 16.&nbsp;9. do 31.&nbsp;10. provoz vláčku pouze o&nbsp;víkendech a svátcích.{'\n'}
        Od 1.&nbsp;11. do 31.&nbsp;3. vláček mimo provoz.
        </Text>

        <Text style={{color: TEXT_COLOR, textAlignVertical: 'center', paddingLeft: PADDING/2, fontWeight: 'bold'}}>Tohle prosím nedělejte:</Text>
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
    );
  }
}
