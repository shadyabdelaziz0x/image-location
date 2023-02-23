import {StyleSheet} from 'react-native';
import {ImageStyleSheet, ViewStyleSheet, wp} from '@image-loc/utils';
import {R} from '@image-loc/res';

const viewStyle = ViewStyleSheet({
  container: {
    width: 180,
  },
});

const imageStyles = ImageStyleSheet({
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: wp(10),
    tintColor: R.colors.white,
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...imageStyles,
});
