import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AnimalListScene from '../scenes/animalListScene';
import {setAnimalTab, setSelectedAnimal} from '../actions';
import {HEADER_STYLE} from '../styles/styles';

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setAnimalTab,
    setSelectedAnimal,
  }, dispatch);
}

class AnimalListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
      return ({
        title: `Zvířata`,
        ...HEADER_STYLE,
      });
  }

  render() {
    return (
        <AnimalListScene
          setAnimalTab={this.props.setAnimalTab}
          setSelectedAnimal={this.props.setSelectedAnimal}
          navigation={this.props.navigation}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalListContainer)
