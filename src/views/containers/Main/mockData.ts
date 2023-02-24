import {Location} from 'react-native-get-location';
import {Image} from 'react-native-image-crop-picker';
import {hp} from '@image-loc/utils';

export const image: Image = {
  height: hp(350),
  width: hp(300),
  mime: 'image/png',
  path: 'path',
  size: 1000,
};

export const position: Location = {
  latitude: 57.7,
  longitude: 11.93,
  time: 1,
  accuracy: 0.9,
  speed: 1,
  altitude: 1,
};
