import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/velbloudDvouhrby/01.jpg'),
  require('../../images/animals/velbloudDvouhrby/02.jpg'),
  require('../../images/animals/velbloudDvouhrby/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/velbloudDvouhrby/01-thumb.jpg'),
  require('../../images/animals/velbloudDvouhrby/02-thumb.jpg'),
  require('../../images/animals/velbloudDvouhrby/03-thumb.jpg'),
];

export default class AnimalDetail extends React.Component {
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj děti!
        </AnimalText>
        <AnimalText>
          Jak se dneska máte? Jmenuji se Dred a sem do Brna jsem přijel z&nbsp;Polska. Jsem velbloud dvouhrbý, stejně jako Salika, Fatima, Majda, Bella, Valerie, Báhir a Fariha, se kterými zde v&nbsp;zoo sdílím výběh.
        </AnimalText>
        <AnimalText>
          My velbloudi dvouhrbí pocházíme z&nbsp;Asie, kde se potulujeme po pouštích a stepích. Aby nám nebylo smutno, nikdy nechodíme sami – vždy je nás celé stádo. V&nbsp;Asii nás však čím dál více ubývá, a tak jsme se stali zvířaty ohroženými, které je potřeba chránit a dobře se o&nbsp;ně starat.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Když máme hlad, dáme si k&nbsp;snědku nějaké byliny, ty máme totiž moc rádi! Pitný režim moc řešit nemusíme, bez vody totiž vydržíme velmi dlouho, dokonce i&nbsp;několik týdnů. Když pak ale máme žízeň, vypijeme naráz klidně celý sud vody! A když není zrovna nablízku voda sladká, nevadí nám napít se aspoň té slané, co jí je plné moře.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Tak co, holky? Řekl jsem našim nejmenším návštěvníkům vše, co jsem měl? Jé, málem bych zapomněl! Chtěl jsem totiž ještě říct, že z&nbsp;nás velbloudů v&nbsp;brněnské zoo jsou nejmladší Valerie, Báhir a Fariha, kteří se narodili v&nbsp;roce 2017 maminkám Majdě, Belle (ta je shodou okolností taky dcerou Majdy) a Fatimě.
        </AnimalText>
        <AnimalText>
          A teď už je to snad vše. Tak ahoj, děti, a pozdravujte od nás ostatní zvířátka!
        </AnimalText>
      </AnimalTemplate>
    );
  }
};
