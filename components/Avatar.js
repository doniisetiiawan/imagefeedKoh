import PropTypes from 'prop-types';
import {
  ColorPropType,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

function Avatar({ size, backgroundColor, initials }) {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
}

export default Avatar;

Avatar.propTypes = {
  backgroundColor: ColorPropType.isRequired,
  initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
