import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/ustricnikVelky/01.jpg'),
  require('../../images/animals/ustricnikVelky/02.jpg'),
  require('../../images/animals/ustricnikVelky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/ustricnikVelky/01-thumb.jpg'),
  require('../../images/animals/ustricnikVelky/02-thumb.jpg'),
  require('../../images/animals/ustricnikVelky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Zdravím tě, bezkřídlý dvounohý tvore! Já jsem ústřičník velký, latinsky <Text style={styles.italic}>Haematopus ostralegus</Text>. Těší mě. Pocházím z&nbsp;pražské zoo, zde v&nbsp;brněnské jsem asi šest let a žiju si tu spolu s&nbsp;ostatními bahňáky. Říká se nám bahňáci, protože se vyskytujeme v&nbsp;mokřadních a pobřežních oblastech.
        </AnimalText>
        <AnimalText>
          Velký jsem přibližně jako vrána a stejně tak černý, jen mám bílé břicho. Zdobí mne svítivě oranžový zobák, který je silný, jelikož ho využívám k&nbsp;otevírání ulit měkkýšů. Používám ho také, když bráním své malé potomstvo před vylupovači hnízd – například před racky nebo vránami. Mám nad očima dobře vyvinuté solné žlázy, jimiž se separuje přebytečná sůl, které je někdy moc z&nbsp;pití mořské vody a ulovené kořisti. Když roztáhnu svá křídla, zabral bych skoro celou šíři postele – rozpětí křídel mám až 83&nbsp;cm.
        </AnimalText>
        <AnimalText>
          Vylíhl jsem se z&nbsp;vejce, které bylo ještě menší než slepičí a bylo kropenaté, aby splynulo s&nbsp;okolím. Do 24&nbsp;hodin jsem již dokázal čile běhat a brzy i&nbsp;létat, avšak rodiče mne ještě dva měsíce krmili různými korýši, měkkýši, červy, hmyzem a ostatními drobnými živočichy a já se od nich pozorováním učil techniku sběru potravy a otvírání schránek mlžů.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Když jsem dospěl, začal jsem vytvářet vlastní hnízda. A to jako mělké důlky v&nbsp;zemi, které jsem někdy vystlal tím, co jsem měl zrovna při křídle. Různými listy, trusem malých savců, často jsem též použil nějaké kamínky či lastury. Ve svém hnízdě však málokdy odpočívám, raději si pospávám jen tak vestoje na jedné noze. Hnízda totiž slouží především vejcím a mláďatům.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Když se vyskytují ústřičníci u&nbsp;moře, není žádnou výjimkou, že jich má mnoho hodně poškozené nohy, nebo dokonce amputované některé prsty. Je to způsobeno pohybem na ostrých útesech a polámaných lasturách. Přesto se dožíváme průměrně až 40&nbsp;let.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
