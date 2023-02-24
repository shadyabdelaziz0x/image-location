import {image} from '@image-loc/views/containers/Main/mockData';

export default {
  openPicker: jest.fn().mockImplementation(() => Promise.resolve(image)),
  openCamera: jest.fn().mockImplementation(() => Promise.resolve(image)),
  clean: jest.fn().mockImplementation(() => Promise.resolve()),
};
