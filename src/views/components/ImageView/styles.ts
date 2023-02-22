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
  },
  button: {
    marginTop: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: R.colors.primaryOrange,
  },
});

const textStyles = TextStyleSheet({
  title: {
    color: R.colors.white,
    fontSize: 15,
  },
});

const imageStyles = ImageStyleSheet({
  image: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...textStyles,
  ...imageStyles,
});
