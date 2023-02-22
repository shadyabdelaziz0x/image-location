import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {PickImageButton} from '@image-loc/views/components';
import {MainViewProps} from './types';

export const MainView = (props: MainViewProps) => {
  return (
    <View style={styles.container}>
      <PickImageButton onPress={props.onPickImageClicked} />
    </View>
  );
};
