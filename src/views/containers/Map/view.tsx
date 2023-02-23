import React, {useCallback, useRef} from 'react';
import {View} from 'react-native';
import {MapViewProps} from './types';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles';
import {ImageButton} from '@image-loc/views/atoms';
import {R} from '@image-loc/res';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectedImageLocation} from '@image-loc/state/ducks/image';

export const MapScreenView = ({}: MapViewProps) => {
  const map = useRef<MapView | null>(null);
  const navigation = useNavigation();

  const location = useSelector(selectedImageLocation);

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
          latitude: location!.lat,
          longitude: location!.lng,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}>
        <Marker
          key={'location'}
          coordinate={{
            latitude: location!.lat,
            longitude: location!.lng,
          }}
        />
      </MapView>
    </View>
  );
};
