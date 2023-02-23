import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';
import {PickImageButtonProps} from './types';
import {R} from '@image-loc/res';
import {Button} from '@image-loc/views/atoms';

export const PickImageButton = (props: PickImageButtonProps) => {
  return (
    <Button
      style={styles.container}
      leftElement={<Image source={R.images.camera} style={styles.icon} />}
      onPress={props.onPress}
      text={R.strings.pickImage}
    />
  );
};
