import React from 'react';
import styles from '../components/styles';

import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import Text from '../components/text'
import InPageImages from '../components/inPageImages'
import Dimensions from 'Dimensions';

export default class AboutScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    const TEXT_COLOR = 'black';

    const PADDING = 20;
    const LOGO_HEIGHT = 90;
    const LOGO_TOPMARGIN = 10;
    const LOGO_RIGHTMARGIN = 5;
    const WIDTH = Dimensions.get('window').width - PADDING;

    const logos = [
      require('../images/logo-zoo.png'),
      require('../images/logo-ctt.png'),
      require('../images/logo-plin.jpg'),
      require('../images/logo-ff.png'),
      require('../images/logo-mu.png'),
      require('../images/logo-kevin.png')
    ];

    return (
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM} style={styles.contentView}>
        <Text style={{paddingTop: 0, color: TEXT_COLOR}}>
          Aplikace vznikla ve spolupráci Zoo Brno a Masarykovy univerzity. Na projektu se podíleli studenti oboru Český jazyk se specializací počítačová lingvistika (PLIN) a pracovníci Ústavu českého jazyka Filozofické fakulty MU. Nasazení aplikace do praxe bylo finančně podpořeno Centrem pro transfer technologií MU.
        </Text>

        <View style={{height: (LOGO_HEIGHT + LOGO_TOPMARGIN), marginTop: LOGO_TOPMARGIN}}>
          <InPageImages sources={logos.slice(0,3)} style={{width: WIDTH/3, height: LOGO_HEIGHT}} marginRight={LOGO_RIGHTMARGIN}/>
        </View>
        <View style={{height: (LOGO_HEIGHT + LOGO_TOPMARGIN), marginTop: LOGO_TOPMARGIN}}>
          <InPageImages sources={logos.slice(3)} style={{width: WIDTH/3, height: LOGO_HEIGHT}} marginRight={LOGO_RIGHTMARGIN}/>
        </View>

        <Text style={{color: TEXT_COLOR}}>
          Koordinace projektu: Dana Hlaváčková
        </Text><Text style={{color: TEXT_COLOR}}>
          Programování aplikace: Marek Grác
        </Text><Text style={{color: TEXT_COLOR}}>
          Design: Kevin W. Scherrer
        </Text><Text style={{color: TEXT_COLOR}}>
          Závěrečné korektury v češtině: Hana Žižková
        </Text><Text style={{color: TEXT_COLOR}}>
          Příprava textů, korektury, překlady do angličtiny a všechny další pomocné práce:
          Babincová Adriana,
          Bendáková Eliška,
          Findejsová Lucie,
          Geržová Helena,
          Holaj Richard,
          Jančová Nikola,
          Kachlířová Miroslava,
          Klement David,
          Konečný Jakub,
          Koníková Michaela,
          Kubešová Nikola,
          Kunovský Adam,
          Masopustová Markéta,
          Novotná Marie,
          Obluková Barbora,
          Paulíčková Lucie,
          Petříková Nikola,
          Plocková Anna,
          Procházková Jana,
          Stará Marie,
          Šebestová Běla,
          Tomečková Kateřina,
          Vacíková Michala,
          Vostřelová Klára
        </Text>
      </ScrollView>
    );
  }
};
