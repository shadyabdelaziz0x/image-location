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
  pickButton: {
    marginTop: hp(10),
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
});
