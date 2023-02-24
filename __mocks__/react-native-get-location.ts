import {position} from '@image-loc/views/containers/Main/mockData';

export default {
  getCurrentPosition: jest
    .fn()
    .mockImplementation(() => Promise.resolve(position)),
};
