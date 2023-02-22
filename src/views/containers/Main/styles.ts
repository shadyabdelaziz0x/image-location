import {StyleSheet} from 'react-native';
import {
  hp,
  ImageStyleSheet,
  TextStyleSheet,
  ViewStyleSheet,
} from '@image-loc/utils';
import {R} from '@image-loc/res';

const viewStyle = ViewStyleSheet({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: R.colors.appBackground,
    paddingVertical: hp(44),
    justifyContent: 'space-between',
  },
});

const textStyles = TextStyleSheet({});

const imageStyles = ImageStyleSheet({});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...textStyles,
  ...imageStyles,
});