import {StyleSheet} from 'react-native';
import {hp, ViewStyleSheet, wp, ImageStyleSheet} from '@image-loc/utils';

const viewStyle = ViewStyleSheet({
  container: {
    flex: 1,
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: wp(10),
    top: hp(25),
    zIndex: 100,
    width: 50,
    height: 50,
  },
});

const imageStyle = ImageStyleSheet({
  leftArrow: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...imageStyle,
});
