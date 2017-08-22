import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {sceneTitles} from '../scenes';
import {WIDTH} from '../styles/styles';

import AlphabetListView from 'react-native-alphabetlistview';
import animals from '../animals';

var setAnimalTab;

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          setAnimalTab('Text');
          this.props.navigation.navigate(sceneTitles['animal-detail'].name, {animal: this.props.item.animal});
        }}
        underlayColor='#bbbbbb'
      >
      <View style={{height:30, paddingLeft: 5}}>
        <Text style={{color: 'white'}}>{this.props.item.name}</Text>
      </View>
      </TouchableHighlight>
    );
  }
}
class SectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{
          backgroundColor: this.props.bgColor,
          width: 30,
          height: 30,
          borderLeftWidth: 1,
          borderColor: 'white',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontWeight: '700'}}>{this.props.title}</Text>
        </View>
    );
  }
}
class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
      textAlign:'center',
      color:'#fff',
      fontWeight:'700',
      fontSize:24,
      backgroundColor: 'rgba(0,0,0,0)',
    };

    return (
        <Text style={textStyle}>{this.props.title}</Text>
    );
  }
}

export default class AnimalListScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.prepareSortedStructure(animals);
    setAnimalTab = this.props.setAnimalTab;
  }

  prepareSortedStructure(animals) {
    let state = {
      fullData: {}
    };

    const removeAccents = {
      'Č' : 'C',
      'Š' : 'S',
      'Ú' : 'U',
      'Ž' : 'Z',
      'Ě' : 'E',
      'Á' : 'A',
      'Ř' : 'R',
    };

    for (let animalID in animals) {
      let animal = animals[animalID];
      let firstLetter = animal.name.charAt(0).toUpperCase();

      if ((firstLetter === 'C') && (animal.name.charAt(1) === 'h')) {
        firstLetter = 'Ch';
      }

      if (firstLetter in removeAccents) {
        firstLetter = removeAccents[firstLetter];
      }

      if (!(firstLetter in state.fullData)) {
        state.fullData[firstLetter] = [];
      }

      state.fullData[firstLetter].push(animal);
    };

    // Czech sorting
    // @source: https://stackoverflow.com/a/17543552/2466089
    const charMapL = " 0123456789aábcčdďeéěfghiíjklmnňoópqrřsštťuúůvwxyýzž";
    const charMapU = " 0123456789AÁBCČDĎEÉĚFGHIÍJKLMNŇOÓPQRŘSŠTŤUÚŮVWXYÝZŽ";
    var charsOrder = {};
    for(var i in charMapL.split('')) {
        charsOrder[charMapL[i]] = parseInt(i);
        charsOrder[charMapU[i]] = parseInt(i);
    }

    function czechSort(s1, s2) {
        let idx = 0;
        while ( (idx < s1.length) && (idx < s2.length) && (charsOrder[s1[idx]] == charsOrder[s2[idx]])) {
            idx ++;
        }
        if ((idx == s1.length) && (idx == s2.length)) return 0;
        if (idx == s1.length) return 1;
        if (idx == s2.length) return -1;
        return charsOrder[s1[idx]] > charsOrder[s2[idx]] ? 1 : (charsOrder[s1[idx]] < charsOrder[s2[idx]] ? -1 : 0);
    }

    for (let letter in state.fullData) {
      state.fullData[letter].sort(function(a, b) {
        return czechSort(a.name, b.name);
      })
    };

    state['data'] = state.fullData;

    return state;
  }

  setFilter(text) {
    this.setState({
      text: text.text,
      data: this.filter(text.text.toUpperCase()),
    })
  }

  filter(text) {
    let data = {};
    for (let letter in this.state.fullData) {
      for (let idx in this.state.fullData[letter]) {
        const animalName = this.state.fullData[letter][idx].name.toUpperCase();
        if (animalName.includes(' ' + text) || animalName.startsWith(text)) {
          if (!(letter in data)) {
            data[letter] = [];
          }
          data[letter].push(this.state.fullData[letter][idx]);
        }
      }
    }

    if (Object.keys(data).length === 0) {
      data['*'] = [{name: 'Zvíře s požadovaným jménem v aplikaci zatím chybí'}];
    }
    return data;
  }

  static navigationOptions = {
    title: 'Zvířata',
  }

  render() {
    return (
      <Image
        source={require('../images/background/about.png')}
        resizeMode="cover"
        style={{flex: 1, width: WIDTH}}
      >
        <TextInput
          style={{height: 40, textAlign: 'center', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
          onChangeText={(text) => this.setFilter({text})}
          value={this.state.text}
          placeholder='Hledat'
          autoCorrect={false}
        />
        <AlphabetListView
          data={this.state.data}
          cell={Cell}
          cellProps={{navigation: this.props.navigation}}
          cellHeight={30}
          sectionListItem={SectionItem}
          sectionHeader={SectionHeader}
          sectionHeaderHeight={22.5}
          compareFunction={(a,b) => {return a.localeCompare(b); }}
        />
      </Image>
    );
  }
}
