import React from 'react';
// import {View} from 'react-native';
import {MapViewProps} from './types';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';
import {NoLocationView} from '@image-loc/views/components/NoLocation';

export const MapScreenView = (props: MapViewProps) => {
  return (
    <>
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
    </>
  );
};
