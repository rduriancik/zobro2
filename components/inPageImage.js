import React from 'react';
import {View} from 'react-native';
import styles from '../styles/styles';
import AnimalImage from './animalImage';

export default class InPageImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.firstImage) {
      return (
        <View>
          <AnimalImage
            index={this.props.indexes[0]}
            images={this.props.images}
            thumbnails={this.props.thumbnails}
            thumbnailStyle={[styles.inPageSingleThumbnail, {width: styles.WIDTH - 92}]}
            lightboxStyle={{borderColor: '#3cac54', borderRightWidth: 12}}
            navigator={this.props.navigator}
          />
        </View>
      );
    } else if (this.props.indexes.length === 1) {

      return (
        <View>
          <AnimalImage
            index={this.props.indexes[0]}
            images={this.props.images}
            thumbnails={this.props.thumbnails}
            thumbnailStyle={styles.inPageSingleThumbnail}
            navigator={this.props.navigator}
          />
        </View>
      );
    } else if (this.props.indexes.length === 2) {
      return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <AnimalImage
          index={this.props.indexes[0]}
          images={this.props.images}
          thumbnails={this.props.thumbnails}
          thumbnailStyle={styles.inPageDuoThumbnailLeft}
          navigator={this.props.navigator}
        />
        <AnimalImage
          index={this.props.indexes[1]}
          images={this.props.images}
          thumbnails={this.props.thumbnails}
          thumbnailStyle={styles.inPageDuoThumbnailRight}
          navigator={this.props.navigator}
        />
      </View>
    );
    } else {
      // More pictures are not supported yet because they are not needed
      return null;
    }
  }
};

InPageImage.propTypes = {
    indexes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    thumbnails: React.PropTypes.array.isRequired,
    images: React.PropTypes.array.isRequired,
    navigator: React.PropTypes.object.isRequired,
};
