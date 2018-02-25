import React from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import styles from '../styles/styles';
import InPageImage from './inPageImage';

export default class AnimalTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View>
          <InPageImage firstImage={true} indexes={this.props.firstIndex}
            thumbnails={this.props.thumbnails} images={this.props.images} />
        </View>
        <View style={styles.scrollView}>
          {this.props.children}
        </View>
      </View>
    );
  }
};

AnimalTemplate.propTypes = {
    firstIndex: PropTypes.arrayOf(PropTypes.number).isRequired,
    thumbnails: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
