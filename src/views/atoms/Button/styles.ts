import {StyleSheet} from 'react-native';
import {TextStyleSheet, ViewStyleSheet} from '@image-loc/utils';
import {R} from '@image-loc/res';

const viewStyle = ViewStyleSheet({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 50,
    backgroundColor: R.colors.primaryOrange,
  },
  disabled: {
    opacity: 0.5,
  },
});

const textStyles = TextStyleSheet({
  title: {
    ...R.typography.core.text,
    color: R.colors.white,
    fontSize: 15,
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...textStyles,
});
