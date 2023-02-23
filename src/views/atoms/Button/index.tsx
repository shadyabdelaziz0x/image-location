import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {ButtonProps} from './types';

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}>
      {props.leftElement && props.leftElement}
      <Text style={styles.title}>{props.text}</Text>
      {props.rightElement && props.rightElement}
    </TouchableOpacity>
  );
};
