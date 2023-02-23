import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {ImageViewProps} from './types';
import {EmptyView} from '../EmptyView';
import {useSelector} from 'react-redux';
import {
  selectedImageLocation,
  selectedImageUri,
} from '@image-loc/state/ducks/image';
import {MapScreenView} from '@image-loc/views/components';

export const ImageView = (props: ImageViewProps) => {
  const imageUri = useSelector(selectedImageUri);
  const isEmptyImageView = imageUri === undefined;
  const location = useSelector(selectedImageLocation);

  return (
    <View style={[styles.container, props.style]}>
      {isEmptyImageView ? (
        <EmptyView />
      ) : (
        <>
          <Image source={{uri: imageUri}} style={styles.image} />
          <MapScreenView location={location} />
        </>
      )}
    </View>
  );
};
