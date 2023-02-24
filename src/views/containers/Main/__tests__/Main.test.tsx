import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {Main} from '../screen';
import {Provider} from 'react-redux';
import {configureAppStore} from '@image-loc/state/storeConfig/store';
import {R} from '@image-loc/res';
import {sheetOptions} from '../types';
import ImagePicker from 'react-native-image-crop-picker';
import {image, position} from '../mockData';

describe('Main Screen', () => {
  test('testing capturing a photo', async () => {
    const store = configureAppStore();
    render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const pickImageButton = screen.getByText(R.strings.pickImage);
    const emptyView = screen.getByText(R.strings.emptyTitle);
    expect(pickImageButton).toBeTruthy();
    expect(emptyView).toBeTruthy();
    fireEvent.press(pickImageButton);
    const actionSheet = screen.getByTestId(R.strings.actionSheet);
    const openCameraButton = screen.getByTestId(`${sheetOptions[0]}-${0}`);
    expect(actionSheet).toBeTruthy();
    expect(openCameraButton).toBeTruthy();
    fireEvent.press(openCameraButton);
    const spy = jest.spyOn(ImagePicker, 'openCamera');
    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
    expect(store.getState().image.uri).toBe(image.path);
    expect(store.getState().image.location).toEqual({
      lat: position.latitude,
      lng: position.longitude,
    });
    const map = screen.getByTestId('map');
    expect(map).toBeTruthy();
  });
});
