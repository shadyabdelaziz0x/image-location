import React from 'react';
import {MapScreenView} from './view';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectedImageLocation} from '@image-loc/state/ducks/image';

export const Map = () => {
  const navigation = useNavigation();
  const location = useSelector(selectedImageLocation);

  return (
    <MapScreenView onBackPressed={navigation.goBack} location={location} />
  );
};
