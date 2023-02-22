import React, {useCallback, useRef} from 'react';
import {MainView} from './view';
import ActionSheet from 'react-native-actionsheet';
import {ImageSource, sheetOptions} from './types';
import {R} from '@image-loc/res';
import ImagePicker, {Image, Options} from 'react-native-image-crop-picker';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setImageUriAction} from '@image-loc/state/ducks/image';

export const Main = () => {
  const sheet = useRef<ActionSheet | null>(null);
  const dispatch = useDispatch();

  const onPickImageClicked = useCallback(() => {
    sheet.current?.show();
  }, []);

  const onSheetOptionIndexClicked = useCallback(
    (index: number) => {
      const options: Options = {
        height: 300,
        width: 300,
        mediaType: 'photo',
        useFrontCamera: true,
        includeExif: true,
      };

      const onImageSelected = (action: Promise<Image>, source: ImageSource) => {
        action
          .then(response => {
            dispatch(setImageUriAction(response.path));
            switch (source) {
              case ImageSource.Camera:
                break;
              case ImageSource.Picker:
                console.log('DATA => ', response.exif);
                break;
            }
          })
          .catch(error => {
            Alert.alert('Error:', error.message);
          })
          .finally(() => {
            ImagePicker.clean();
          });
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
    [dispatch],
  );

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
