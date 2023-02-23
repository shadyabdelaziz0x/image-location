import {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';
import {Alert} from 'react-native';

export const useLocation = () => {
  const [lng, setLng] = useState<number | undefined>(undefined);
  const [lat, setLat] = useState<number | undefined>(undefined);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 5000,
    })
      .then(response => {
        setLat(response.latitude);
        setLng(response.longitude);
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  }, []);

  return {
    lng,
    lat,
  };
};
