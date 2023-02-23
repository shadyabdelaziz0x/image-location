import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {ImageViewProps, MainScreenNavigationProp} from './types';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '@image-loc/navigation/app/types';
import {EmptyView} from '../EmptyView';
import {useSelector} from 'react-redux';
import {
  selectedImageLocation,
  selectedImageUri,
} from '@image-loc/state/ducks/image';
import {Button} from '@image-loc/views/atoms';
import {R} from '@image-loc/res';

export const ImageView = (props: ImageViewProps) => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const imageUri = useSelector(selectedImageUri);
  const isEmptyImageView = imageUri === undefined;
  const location = useSelector(selectedImageLocation);
  const noLocationAvailable = location === undefined;

  const navigateToMap = () => {
    navigation.navigate(AppRoutes.Map);
  };

  return (
    <View style={[styles.container, props.style]}>
      {isEmptyImageView ? (
        <EmptyView />
      ) : (
        <>
          <Image source={{uri: imageUri}} style={styles.image} />
          <Button
            style={styles.button}
            disabled={noLocationAvailable}
            onPress={navigateToMap}
            text={
              noLocationAvailable
                ? R.strings.noLocationAvailable
                : R.strings.viewLocation
            }
            rightElement={
              !noLocationAvailable ? (
                <Image style={styles.arrow} source={R.images.back} />
              ) : undefined
            }
          />
        </>
      )}
    </View>
  );
};
