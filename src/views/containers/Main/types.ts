import {R} from '@image-loc/res';

export interface MainViewProps {
  onPickImageClicked: () => void;
}

export const sheetOptions = [
  R.strings.openCamera,
  R.strings.openLibrary,
  R.strings.cancel,
];
