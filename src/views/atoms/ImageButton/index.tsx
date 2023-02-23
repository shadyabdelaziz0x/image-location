import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ImageButtonProps} from './types';

export const ImageButton = (props: ImageButtonProps) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Image style={props.imageStyle} source={props.source} />
    </TouchableOpacity>
  );
};
