import {StyleSheet} from 'react-native';
import {
  hp,
  ImageStyleSheet,
  TextStyleSheet,
  ViewStyleSheet,
} from '@image-loc/utils';

const viewStyle = ViewStyleSheet({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const textStyles = TextStyleSheet({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: hp(10),
  },
  description: {
    fontSize: 14,
  },
});

const imageStyles = ImageStyleSheet({
  image: {
    width: 90,
    height: 90,
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...textStyles,
  ...imageStyles,
});
