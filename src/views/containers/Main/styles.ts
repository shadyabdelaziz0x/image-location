import {StyleSheet} from 'react-native';
import {hp, ViewStyleSheet} from '@image-loc/utils';
import {R} from '@image-loc/res';

const viewStyle = ViewStyleSheet({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: R.colors.appBackground,
    paddingTop: hp(60),
    paddingBottom: hp(44),
    justifyContent: 'space-between',
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
});
