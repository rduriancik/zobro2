import React from 'react';
import {Text, View, Image, Alert} from 'react-native';
import Lightbox from 'react-native-lightbox';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import styles from '../styles/styles';
import stylePropType from 'react-style-proptype';

export default class AnimalImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Lightbox
          swipeToDismiss={false}
          renderContent={this.renderModal}
          activeProps={this.props}
          style={this.props.lightboxStyle}
        >
          <Image
            source={this.props.thumbnails[this.props.index]}
            resizeMode='cover'
            style={this.props.thumbnailStyle}
          />
        </Lightbox>
      );
  }

  renderModal(props) {
    const WINDOW_WIDTH = Dimensions.get('window').width;
    const WINDOW_HEIGHT = Dimensions.get('window').height;

    const rightArrow = (<Text style={styles.buttonText}>›</Text>);
    const leftArrow = (<Text style={styles.buttonText}>‹</Text>);

    return (
      <Swiper showsButtons={true} index={props.index} prevButton={leftArrow} nextButton={rightArrow} showsPagination={false}>
        {props.images.map((image, index) => (
            <View key={index} style={{flex: 1}}>
              <Image
                source={image}
                resizeMode='contain'
                style={{width: WINDOW_WIDTH, height: WINDOW_HEIGHT}}
              />
            </View>
        ))}
      </Swiper>
    );
  }
};

AnimalImage.propTypes = {
    images: React.PropTypes.array.isRequired,
    index: React.PropTypes.number.isRequired,
// @bug: warnings
/*    thumbnailStyle: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(stylePropType),
      stylePropType
    ]).isRequired,
    lightboxStyle: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(stylePropType),
      stylePropType
    ]),
*/    navigator: React.PropTypes.object.isRequired,
};
