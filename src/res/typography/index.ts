import {TextStyleSheet} from '@image-loc/utils';
import {TextStyle} from 'react-native';
import fonts from '../fonts';

const text: TextStyle = {
  fontFamily: fonts.robotoRegular,
};

const typorgraphy = {
  core: TextStyleSheet({
    text,
  }),
};

export default typorgraphy;
