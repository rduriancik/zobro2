import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppWithNavigationState from './navigation';

import {setAnimalTab, setSelectedAnimal} from './actions';

export default class Zobro2App extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState onNavigationStateChange={(prevState, currentState) => {
          if (currentState.routes[currentState.index].routeName === 'animal-detail') {
            this.store.dispatch(setSelectedAnimal(currentState.routes[currentState.index].params.animal));
            this.store.dispatch(setAnimalTab('Text'));
          }
        }} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('zobro2', () => Zobro2App);
