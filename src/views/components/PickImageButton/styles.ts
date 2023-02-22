import {StyleSheet} from 'react-native';
import {
  ImageStyleSheet,
  TextStyleSheet,
  ViewStyleSheet,
  wp,
} from '@image-loc/utils';
import {R} from '@image-loc/res';

const viewStyle = ViewStyleSheet({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    borderRadius: 15,
    height: 50,
    backgroundColor: R.colors.primaryOrange,
  },
});

const textStyles = TextStyleSheet({
  title: {
    fontSize: 15,
    color: R.colors.white,
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
  ...textStyles,
  ...imageStyles,
});
