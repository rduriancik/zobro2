import React from 'react';
import {Text} from 'react-native';
import styles from '../styles.js';

export default class ourText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.text, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
};
