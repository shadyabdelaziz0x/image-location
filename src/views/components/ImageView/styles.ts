import {StyleSheet} from 'react-native';
import {hp, ImageStyleSheet, ViewStyleSheet} from '@image-loc/utils';

const viewStyle = ViewStyleSheet({
  container: {
    flex: 1,
  },
});

const imageStyles = ImageStyleSheet({
  image: {
    width: hp(350),
    height: hp(350),
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...imageStyles,
});
