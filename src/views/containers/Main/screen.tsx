import React, {useCallback, useEffect, useRef} from 'react';
import {MainView} from './view';
import ActionSheet from 'react-native-actionsheet';
import {ImageSource, sheetOptions} from './types';
import {R} from '@image-loc/res';
import ImagePicker, {Image, Options} from 'react-native-image-crop-picker';
import {Alert, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  setImageLocationAction,
  setImageUriAction,
} from '@image-loc/state/ducks/image';
import {useLocation} from '@image-loc/hooks/useLocation';

export const Main = () => {
  const sheet = useRef<ActionSheet | null>(null);
  const {lat, lng} = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      ImagePicker.clean();
    };
  });

  const extractLocationFromLibraryIOS = useCallback(
    (imageData: object) => {
      try {
        let iosImageLat: number | undefined = (imageData as any)['{GPS}']
          .Latitude;
        let iosImageLng: number | undefined = (imageData as any)['{GPS}']
          .Longitude;
        if (iosImageLat && iosImageLng) {
          dispatch(
            setImageLocationAction({
              lat: iosImageLat,
              lng: iosImageLng,
            }),
          );
        }
      } catch (error) {
        dispatch(setImageLocationAction(undefined));
      }
    },
    [dispatch],
  );

  const extractLocationFromLibraryAndroid = useCallback(
    (imageData: object) => {
      try {
        let androidImageLat: number | undefined = (imageData as any).latitude;
        let androidImageLng: number | undefined = (imageData as any).longitude;
        if (androidImageLat && androidImageLng) {
          dispatch(
            setImageLocationAction({
              lat: androidImageLat,
              lng: androidImageLng,
            }),
          );
        }
      } catch (error) {
        dispatch(setImageLocationAction(undefined));
      }
    },
    [dispatch],
  );

  const setImageLocation = useCallback(
    (imageData: object) => {
      switch (Platform.OS) {
        case 'android':
          extractLocationFromLibraryAndroid(imageData);
          break;
        case 'ios':
          extractLocationFromLibraryIOS(imageData);
          break;
        default:
          break;
      }
    },
    [extractLocationFromLibraryAndroid, extractLocationFromLibraryIOS],
  );

  const setCurrentLocation = useCallback(() => {
    if (lat && lng) {
      dispatch(
        setImageLocationAction({
          lat: lat,
          lng: lng,
        }),
      );
    }
  }, [dispatch, lat, lng]);

  const onImageSelected = useCallback(
    (action: Promise<Image>, source: ImageSource) => {
      action
        .then(response => {
          dispatch(setImageUriAction(response.path));
          switch (source) {
            case ImageSource.Camera:
              setCurrentLocation();
              break;
            case ImageSource.Picker:
              response.exif && setImageLocation(response.exif);
              break;
          }
        })
        .catch(error => {
          Alert.alert(error.message);
        });
    },
    [dispatch, setCurrentLocation, setImageLocation],
  );

  const onSheetOptionIndexClicked = useCallback(
    (index: number) => {
      const options: Options = {
        height: 300,
        width: 300,
        mediaType: 'photo',
        useFrontCamera: true,
        includeExif: true,
      };
      switch (index) {
        case 0:
          onImageSelected(ImagePicker.openCamera(options), ImageSource.Camera);
          break;
        case 1:
          onImageSelected(ImagePicker.openPicker(options), ImageSource.Picker);
          break;
        default:
          break;
      }
    },
    [onImageSelected],
  );

  const onPickImageClicked = useCallback(() => {
    sheet.current?.show();
  }, []);

  return (
    <>
      <MainView onPickImageClicked={onPickImageClicked} />
      <ActionSheet
        ref={sheet}
        title={R.strings.pickOption}
        options={sheetOptions}
        cancelButtonIndex={2}
        onPress={onSheetOptionIndexClicked}
      />
    </>
  );
};
