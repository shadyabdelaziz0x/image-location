import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ImageViewProps, MainScreenNavigationProp} from './types';
import {R} from '@image-loc/res';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '@image-loc/navigation/app/types';

export const ImageView = (props: ImageViewProps) => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  const navigateToMap = () => {
    navigation.navigate(AppRoutes.Map);
  };

  return (
    <View style={[styles.container, props.style]}>
      <Image source={{uri: undefined}} style={styles.image} />
      <TouchableOpacity onPress={navigateToMap} style={styles.button}>
        <Text style={styles.title}>{R.strings.viewLocation}</Text>
      </TouchableOpacity>
    </View>
  );
};
