import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/vlkArkticky/01.jpg'),
  require('../../images/animals/vlkArkticky/02.jpg'),
  require('../../images/animals/vlkArkticky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/vlkArkticky/01-thumb.jpg'),
  require('../../images/animals/vlkArkticky/02-thumb.jpg'),
  require('../../images/animals/vlkArkticky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Milí kamarádi,
        </AnimalText>
        <AnimalText>
          jsem vlk arktický a rád bych vám o&nbsp;sobě a své smečce něco pověděl. Říkají mi Luděk a jsem ze všech největší – nejen proto, že jsem samec, ale také kvůli tomu, že moc rád jím. Nejraději mám soby, pižmoně nebo i&nbsp;menší savce a nějakou tu mršinu. A protože tam, odkud pocházím, bývá dlouho tma a málo potravy, sním své úlovky úplně celé, i&nbsp;s&nbsp;kůží, chlupy a kostičkami. Mňam!
        </AnimalText>
        <AnimalText>
          Se mnou tu trvale žije krásná arktická vlčice jménem Velká, víte proč? Protože je starší než zbylí členové smečky, je to taková "šéfová" mezi samicemi. Ale všichni jsme stejně bílí a chlupatí!
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Bílí proto, že pocházíme z&nbsp;Arktidy a díky tomuto zbarvení nás není v&nbsp;zemi sněhu a ledu vůbec vidět. A chlupatí proto, že je v&nbsp;naší domovině velká zima. Teploty tam většinu času bývají pod bodem mrazu. Představte si, že byste museli bydlet v&nbsp;mrazničce! Všimli jste si našich ocásků? Ty jsou chlupaté nejvíc. Prozradím vám proč: když je nám velká zima, před spánkem se stočíme do klubíčka a  ocáskem si přikryjeme naše čumáčky, aby nám neomrzly.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Sice vypadáme krásně a roztomile, až k&nbsp;pohlazení, ale s&nbsp;lidmi se moc nekamarádíme. Raději žijeme spolu, ve smečce, a pohromadě i&nbsp;lovíme. Většinou se dožíváme 10&nbsp;roků, ale v&nbsp;zoo se nám daří dobře a žijeme tu až 20&nbsp;let. Máme se tu prostě skvěle. Dokonce si občas i&nbsp;zavyjeme. Třeba nás uslyšíte, zkuste poslouchat!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
