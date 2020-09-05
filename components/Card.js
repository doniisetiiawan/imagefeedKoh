import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import AuthorRow from './AuthorRow';

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  handleLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const {
      fullname,
      image,
      linkText,
      onPressLinkText,
    } = this.props;
    const { loading } = this.state;

    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator
              style={StyleSheet.absoluteFill}
              size="large"
            />
          )}
          <Image
            style={StyleSheet.absoluteFill}
            source={image}
            onLoad={this.handleLoad}
          />
        </View>
      </View>
    );
  }
}

export default Card;

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func,
};

Card.defaultProps = {
  linkText: '',
  onPressLinkText: () => {},
};
