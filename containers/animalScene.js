import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AnimalScene from '../scenes/animalScene';
import { setReaderLevel, setCameraReady, setAnimalTab } from '../actions'

import animals from '../animals';

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setReaderLevel,
    setCameraReady,
    setAnimalTab,
  }, dispatch);
}

class AnimalContainer extends React.Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    header: null,
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.navigation.state.params.animal !== nextProps.configuration.selectedAnimal) {
      // This animal is not on the top of the stack so it makes no sense to update content
      return false;
    } else {
      // On every other change of props or state it should be updated
      return true;
    }
  }

  render() {
    return (
      <AnimalScene
        animal={this.props.navigation.state.params.animal}
        readerLevel={this.props.configuration.readerLevel}
        setReaderLevel={this.props.setReaderLevel}
        cameraReady={this.props.configuration.cameraReady}
        setCameraReady={this.props.setCameraReady}
        tabName={this.props.configuration.tabName}
        setAnimalTab={this.props.setAnimalTab}
        navigation={this.props.navigation}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer)
