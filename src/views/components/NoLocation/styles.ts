import {StyleSheet} from 'react-native';
import {TextStyleSheet, ViewStyleSheet} from '@image-loc/utils';
import {R} from '@image-loc/res';

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
    ...R.typography.core.text,
    color: R.colors.black,
    fontWeight: 'bold',
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...textStyles,
});
