import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ImageView, PickImageButton} from '@image-loc/views/components';
import {MainViewProps} from './types';

export const MainView = (props: MainViewProps) => {
  return (
    <View style={styles.container}>
      <ImageView />
      <PickImageButton
        style={styles.pickButton}
        onPress={props.onPickImageClicked}
      />
    </View>
  );
};
