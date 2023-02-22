import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {PickImageButtonProps} from './types';
import {R} from '@image-loc/res';

export const PickImageButton = (props: PickImageButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}>
      <Image source={R.images.camera} style={styles.icon} />
      <Text style={styles.title}>{R.strings.pickImage}</Text>
    </TouchableOpacity>
  );
};
