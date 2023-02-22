import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {EmptyViewProps} from './types';
import {R} from '@image-loc/res';

export const EmptyView = (props: EmptyViewProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image source={R.images.imagePlaceholder} style={styles.image} />
      <Text style={styles.title}>{R.strings.emptyTitle}</Text>
      <Text style={styles.description}>{R.strings.emptyDescription}</Text>
    </View>
  );
};
