import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/levKonzsky/01.jpg'),
  require('../../images/animals/levKonzsky/02.jpg'),
  require('../../images/animals/levKonzsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/levKonzsky/01-thumb.jpg'),
  require('../../images/animals/levKonzsky/02-thumb.jpg'),
  require('../../images/animals/levKonzsky/03-thumb.jpg'),
];

export default class AnimalDetail extends React.Component {
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Afrika je kontinent dokonalých predátorů. Každý, kdo tu žije, i&nbsp;každý, kdo tudy jen prochází, se dostává do blízkosti obávaných zabijáků. V&nbsp;savanách, řekách, džunglích i&nbsp;pouštích tu žijí tvorové, kteří jsou připraveni zaútočit. Najdeme mezi nimi i&nbsp;největšího predátora Afriky, lva. Nás však nebude zajímat jen tak ledajaký lev, my se podíváme do oblasti Kalahari do smečky lvů konžských.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jen se na něj podívejte, jak líně se válí na sluníčku a užívá si jeho paprsky dopadající na srst a hustou hřívu. Stejně jako každý jiný lev, i&nbsp;ten náš jí jasně dává najevo, kdo je tady pánem. Hříva u&nbsp;lvů zároveň odlišuje samce od samic, které bývají až o&nbsp;čtyřicet procent menší.
        </AnimalText>
        <AnimalText>
          Lvi jsou, na rozdíl od ostatních kočkovitých šelem, společenská zvířata. Žijí ve skupinách obvykle čítajících pět až deset jedinců. Jen výjimečně jich může být až třicet. Jejich počet ve skupině závisí na mnoha okolnostech, jako jsou velikost teritoria nebo dostatek potravy. Takovou skupinu pak ovládá jeden až čtyři dospělí samci – většinou jsou to sourozenci, případně se potkali v &nbsp;období dospívání a vytvořili tzv. koalici. Mají zásadní úkol: uchránit svou smečku před cizími samci a hyenami, které jsou jim konkurencí při lovu potravy.
        </AnimalText>
        <AnimalText>
          Až tři čtvrtiny ulovené potravy, převážně antilop, zeber, pakoňů, gazel a dalších, mají na svědomí lvice. Zatímco samice loví, samci mají při žraní přednost a dokáží na posezení spořádat až čtyřicet pět kilogramů masa, které následně několik dní tráví. Někdy se však na lov vydá celá smečka. Jsou známy případy, kdy se smečka specializuje na lov velké kořisti, například žiraf, slonů nebo buvolů. Tato velká zvířata jsou však lvům nebezpečná a mohou jim přivodit až smrtelná zranění.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Smrtelná zranění však může lvím samcům přivodit i&nbsp;boj o&nbsp;říjnou samici. V rámci smečky si samci neublíží, avšak když se k&nbsp;jejich samicím přiblíží cizí lev, následuje tvrdý souboj, který často končí právě smrtí jednoho ze soupeřů.
        </AnimalText>
        <AnimalText>
          Pár, pracující na zachování rodu, se na několik dní oddělí od smečky a v&nbsp;ústraní se páří přibližně každých dvacet minut. V&nbsp;těchto dnech nepřijímají potravu ani neloví, zvláště pro samce je tak toto období velmi náročné. Po přibližně čtyřměsíční březosti se rodí dvě až čtyři mláďata o&nbsp;hmotnosti do dvou kilogramů. Samice lvíčata porodí v&nbsp;úkrytu a o&nbsp;samotě, poté je často stěhují. Ke smečce se vrací až téměř po dvou měsících. Úmrtnost mláďat je vysoká a až polovina se jich nedožije prvního roku věku. Když mladí samci dospějí, odchází ze smečky a zakládají si svou vlastní, zatímco samičky zůstávají. Smečku též opouští staří samci, kteří se odeberou do ústraní a tam buď o&nbsp;samotě, nebo ve skupině s&nbsp;ostatními starými jedinci dožívají.
        </AnimalText>
        <AnimalText>
          ***
        </AnimalText>
        <AnimalText>
          V&nbsp;naší zoo byli lvi chováni nepřetržitě od roku&nbsp;1953 až do roku&nbsp;2003. Za tu dobu odchovali jedenáct lvíčat. Poslední brněnský lev, samec Bali, tenkrát z&nbsp;důvodu nevyhovujících prostor pro chov odešel do Zoo Les Sables d’Olonne ve Francii.
        </AnimalText>
        <AnimalText>
          V&nbsp;roce&nbsp;2017 se k&nbsp;nám lvi vrátili. Momentálně zde najdete samce Lolka, který se narodil v&nbsp;roce&nbsp;2015 v&nbsp;polském Gdaňsku, a o&nbsp;necelé tři roky starší samici Kivu, která se narodila v&nbsp;Lisabonu a k&nbsp;nám přišla z&nbsp;Ústí nad Labem.
        </AnimalText>
        <AnimalText>
          ***
        </AnimalText>
        <AnimalText>
          Určitě vás napadla otázka, jestli nemá Lolek bratra Bolka. Ano, má! :-)
        </AnimalText>
      </AnimalTemplate>
    );
  }
};
