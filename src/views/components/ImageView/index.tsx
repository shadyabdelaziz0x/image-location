import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ImageViewProps, MainScreenNavigationProp} from './types';
import {R} from '@image-loc/res';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '@image-loc/navigation/app/types';
import {EmptyView} from '../EmptyView';
import {useSelector} from 'react-redux';
import {selectedImageUri} from '@image-loc/state/ducks/image';

export const ImageView = (props: ImageViewProps) => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const imageUri = useSelector(selectedImageUri);
  const isEmptyImageView = imageUri === undefined;

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
          <TouchableOpacity onPress={navigateToMap} style={styles.button}>
            <Text style={styles.title}>{R.strings.viewLocation}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
