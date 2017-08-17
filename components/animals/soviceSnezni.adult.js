import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/soviceSnezni/01.jpg'),
  require('../../images/animals/soviceSnezni/02.jpg'),
  require('../../images/animals/soviceSnezni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/soviceSnezni/01-thumb.jpg'),
  require('../../images/animals/soviceSnezni/02-thumb.jpg'),
  require('../../images/animals/soviceSnezni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Sovice sněžní se nejvíce proslavily díky Hedvice, sově Harryho Pottera. To na nich ale zdaleka není to nejzajímavější.
        </AnimalText>
        <AnimalText>
          S&nbsp;délkou dosahující k&nbsp;70&nbsp;cm a váhou až 3&nbsp;kg patří k&nbsp;největším z&nbsp;řádu sov. Na rozdíl například od sovy pálené však nepatří do čeledi sovovitých (latinsky <Text style={styles.italic}>Tytonidae</Text>), ale mezi puštíkovité, a nedávno byla přeřazena z rodu sovice (latinsky <Text style={styles.italic}>Nyctea</Text>) do rodu výr (latinsky <Text style={styles.italic}>Bubo</Text>), i&nbsp;když její český název se nezměnil.
        </AnimalText>
        <AnimalText>
          Spolu s&nbsp;lumíky, zajíci a polárními liškami obývají sovice sněžní tundru, i&nbsp;když na zimu se přesouvají jižněji – do Skandinávie, na Sibiř, Aljašku a v&nbsp;Kanadě až k&nbsp;hranicím s&nbsp;USA. Živí se převážně lumíky. Když se lumíci přemnoží, zvětší se i&nbsp;populace sovic; když je ale lumíků málo, vezmou sovy zavděk jinými živočichy včetně ptáků – třeba sov pálených. V&nbsp;případě nouze se ale uživí i&nbsp;mršinami, v&nbsp;záloze přesto mají další svébytný způsob obživy: sledují polární lišky na lovu a kradou jim jejich kořist. 
        </AnimalText>
       <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Sovice nejsou v&nbsp;přírodě naštěstí příliš ohroženy, i&nbsp;tak je ale zasáhl posun civilizace do oblastí jejich zimovišť a hnízdišť. Občas jsou sovice popáleny nebo usmrceny elektrickým proudem, když se dotknou elektrických drátů, někdy se zapletou do rybářského vybavení. Mají však i&nbsp;přirozené nepřátele – lišky. Sovice si totiž staví hnízda na skalních výběžcích nebo na zemi a lišky jim z&nbsp;nich kradou vajíčka.
        </AnimalText>
        <AnimalText>
          Pokud však vajíčka udrží sovice před liškami v&nbsp;bezpečí, zhruba po měsíci se vylíhnou mláďata; obvykle jich je kolem pěti (jsou-li přemnoženi lumíci, může jich však být i&nbsp;třikrát víc). Po tři týdny se mláďata nehnou z&nbsp;tepla peřím vystlaného hnízda. Pak už jsou dost velká na to, aby mohla vyletět ven a během následujícího měsíce se naučit obstarávat si potravu.
        </AnimalText>
       <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pokud patříte k&nbsp;lidem, kteří rádi hledají chyby ve filmech, určitě vás potěší, že Hedvika je ve filmovém Harrym Potterovi sameček. Poznáte to podle zbarvení – samci jsou bílí jen s&nbsp;několika černými skvrnami, zatímco samice jsou kropenaté (stejně tak i&nbsp;čerstvě vylíhnutá mláďata).
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
