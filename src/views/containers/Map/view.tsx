import React from 'react';
import {View} from 'react-native';
import {MapViewProps} from './types';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';
import {ImageButton} from '@image-loc/views/atoms';
import {R} from '@image-loc/res';
import {NoLocationView} from '@image-loc/views/components/NoLocation';

export const MapScreenView = (props: MapViewProps) => {
  return (
    <View style={styles.container}>
      <ImageButton
        style={styles.backBtn}
        imageStyle={styles.leftArrow}
        source={R.images.back}
        onPress={props.onBackPressed}
      />
      {props.location ? (
        <MapView
          style={styles.container}
          focusable
          initialRegion={{
            latitude: props.location.lat,
            longitude: props.location.lng,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}>
          <Marker
            key={'location'}
            coordinate={{
              latitude: props.location.lat,
              longitude: props.location.lng,
            }}
          />
        </MapView>
      ) : (
        <NoLocationView />
      )}
    </View>
  );
};
