import {imageSlice} from './slice';

const {
  setImageUri: setImageUriAction,
  setImageLocation: setImageLocationAction,
} = imageSlice.actions;

export {setImageUriAction, setImageLocationAction};
