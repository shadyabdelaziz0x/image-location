import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {ButtonProps} from './types';

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.button, props.style, props.disabled && styles.disabled]}>
      {props.leftElement && props.leftElement}
      <Text style={styles.title}>{props.text}</Text>
      {props.rightElement && props.rightElement}
    </TouchableOpacity>
  );
};
