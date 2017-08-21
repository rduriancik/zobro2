import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/levKonzsky/01.jpg'),
//  require('../../images/animals/levKonzsky/02.jpg'),
//  require('../../images/animals/levKonzsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/levKonzsky/01.jpg'),
//  require('../../images/animals/levKonzsky/02-thumb.jpg'),
//  require('../../images/animals/levKonzsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
         Afrika je kontinent dokonalých predátorů. Každý, kdo tu žije, i&nbsp;každý, kdo tudy jen prochází, se dostává do blízkosti obávaných zabijáků. V&nbsp;savanách, řekách, džunglích i&nbsp;pouštích tu žijí tvorové, kteří jsou připraveni zaútočit. Najdeme mezi nimi i&nbsp;největšího predátora Afriky, lva. Nás však nebude zajímat jen tak ledajaký lev, my se podíváme do oblasti Kalahari do smečky jedněch z nejvzácnějších, lvů konžských.
        </AnimalText>
        <AnimalText>
          Jen se podívejte, jak líně se válí na sluníčku a užívá si jeho paprsky dopadající na srst a hustou hřívu. Na rozdíl od mnoha dalších poddruhů lva, lev konžský nemá břišní hřívu, má ji jen kolem hlavy. Přesto mu slouží úplně stejně jako ostatním&nbsp;– jasně jí dává najevo, kdo je tady pánem. Nemusíme snad zmiňovat, že hříva zároveň odlišuje samce od samic, které bývají až o&nbsp;čtyřicet procent menší.
        </AnimalText>
        <AnimalText>
          Lvi konžští, stejně jako další lvi, žijí ve skupinách obvykle čítajících pět až třicet jedinců. Na rozdíl od ostatních kočkovitých šelem jsou to společenská zvířata. Jejich počet ve skupině závisí na mnoha okolnostech, jako jsou velikost teritoria nebo dostatek potravy. Takovou skupinu ovládá jeden až čtyři dospělí samci&nbsp;– většinou jsou to sourozenci, případně se potkali v&nbsp;období dospívání a vytvořili tzv. koalici. Mají zásadní úkol: uchránit svou smečku před cizími samci a hyenami, které jsou jim konkurencí při lovu potravy.
        </AnimalText>
        <AnimalText>
          Až tři čtvrtiny ulovené potravy, převážně antilop, zeber, pakoňů, gazel a dalších, mají na svědomí lvice. Zatímco samice loví, samci mají při žraní přednost a dokáží na posezení spořádat až čtyřicet pět kilogramů masa, které následně několik dní tráví. Někdy se však na lov vydá celá smečka. Jsou známy případy, kdy se smečka specializuje na lov velké kořisti, například žiraf, slonů nebo buvolů. Tato velká zvířata jsou však lvům nebezpečná a mohou jim přivodit až smrtelná zranění.
        </AnimalText>
        <AnimalText>
          Ačkoliv jindy spolu samci ve smečce vycházejí, nastávají i&nbsp;chvíle, kdy tomu tak není. V období páření mezi nimi probíhají souboje, i&nbsp;když jen naoko, protože jejich postavení ve skupině je již jasně dané. Bez ohledu na výsledek souboje se samice zpravidla páří se všemi samci ze smečky. Zápach, který říjná samice vydává, však může přilákat i&nbsp;cizího lva. Následný souboj už je tvrdý a často končí smrtí jednoho ze soupeřů. Pár, pracující na zachování rodu, se na několik dní oddělí od smečky a v&nbsp;ústraní se páří přibližně každých dvacet minut. V&nbsp;těchto dnech nepřijímají potravu ani neloví, zvláště pro samce je tak toto období velmi náročné. Po přibližně čtyřměsíční březosti se rodí dvě až čtyři mláďata o&nbsp;hmotnosti do dvou kilogramů. Samice lvíčata porodí v&nbsp;úkrytu a o&nbsp;samotě, poté je často stěhuje. Ke smečce se vrací až téměř po dvou měsících. Úmrtnost mláďat je vysoká a až polovina se jich nedožije prvního roku věku. Když mladí samci dospějí, odchází ze smečky a zakládají si svou vlastní, zatímco samičky zůstávají. Smečku též opouští staří samci, kteří se odeberou do ústraní a tam buď o&nbsp;samotě, nebo ve skupině s&nbsp;ostatními starými jedinci dožívají.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
