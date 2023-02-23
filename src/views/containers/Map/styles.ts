import {StyleSheet} from 'react-native';
import {hp, ViewStyleSheet, wp, ImageStyleSheet} from '@image-loc/utils';
import {R} from '@image-loc/res';

const viewStyle = ViewStyleSheet({
  container: {
    flex: 1,
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: wp(30),
    top: hp(55),
    zIndex: 100,
    width: 50,
    height: 50,
    backgroundColor: R.colors.appBackground,
    borderRadius: 10,
  },
});

const imageStyle = ImageStyleSheet({
  leftArrow: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
    tintColor: R.colors.primaryOrange,
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...imageStyle,
});
