import React, {useCallback, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {MapViewProps} from './types';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';
import {ImageButton} from '@image-loc/views/atoms';
import {R} from '@image-loc/res';
import {useNavigation} from '@react-navigation/native';

export const MapScreenView = ({}: MapViewProps) => {
  const map = useRef<MapView | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    map.current?.fitToCoordinates();
  }, []);

  const onBackPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageButton
        style={styles.backBtn}
        imageStyle={styles.leftArrow}
        source={R.images.back}
        onPress={onBackPressed}
      />
      <MapView
        ref={map}
        style={styles.container}
        focusable
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          key={'location'}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={'marker.title'}
          description={'marker.description'}
        />
      </MapView>
    </View>
  );
};
