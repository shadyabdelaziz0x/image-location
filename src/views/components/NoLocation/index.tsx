import React from 'react';
import {Text, View} from 'react-native';
import {R} from '@image-loc/res';
import {styles} from './styles';

export const NoLocationView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{R.strings.noLocationAvailable}</Text>
    </View>
  );
};
