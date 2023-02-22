import {StyleSheet} from 'react-native';
import {
  ImageStyleSheet,
  TextStyleSheet,
  ViewStyleSheet,
} from '@image-loc/utils';

const viewStyle = ViewStyleSheet({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

const textStyles = TextStyleSheet({});

const imageStyles = ImageStyleSheet({});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...textStyles,
  ...imageStyles,
});
