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
import {hp} from '@image-loc/utils';

export const Main = () => {
  const sheet = useRef<ActionSheet | null>(null);
  const {lat, lng} = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      ImagePicker.clean();
    };
  }, []);

  const extractLocationFromImage = useCallback(
    (imageData: object) => {
      try {
        let androidImageLat: number | undefined =
          'Latitude' in imageData ? (imageData.Latitude as number) : undefined;
        let androidImageLng: number | undefined =
          'Longitude' in imageData
            ? (imageData.Longitude as number)
            : undefined;
        if (androidImageLat && androidImageLng) {
          dispatch(
            setImageLocationAction({
              lat: androidImageLat,
              lng: androidImageLng,
            }),
          );
        } else {
          dispatch(setImageLocationAction(undefined));
        }
      } catch (error) {
        dispatch(setImageLocationAction(undefined));
      }
    },
    [dispatch],
  );

  const setImageLocation = useCallback(
    (imageData: Record<string, object>) => {
      switch (Platform.OS) {
        case 'android':
          extractLocationFromImage(imageData);
          break;
        case 'ios':
          extractLocationFromImage(imageData['{GPS}']);
          break;
        default:
          break;
      }
    },
    [extractLocationFromImage],
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
              response.exif &&
                setImageLocation(response.exif as Record<string, object>);
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
        height: hp(350),
        width: hp(300),
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
