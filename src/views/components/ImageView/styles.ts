import {StyleSheet} from 'react-native';
import {hp, ImageStyleSheet, ViewStyleSheet, wp} from '@image-loc/utils';

const viewStyle = ViewStyleSheet({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: wp(15),
    marginTop: hp(45),
  },
});

const imageStyles = ImageStyleSheet({
  image: {
    width: 300,
    height: 300,
  },
  arrow: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
    marginLeft: 10,
  },
});

export const styles = StyleSheet.create({
  ...viewStyle,
  ...imageStyles,
});
