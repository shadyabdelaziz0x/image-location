import {IAppState} from '@image-loc/state/storeConfig/types';
import {ImageLocation} from './types';

export const selectedImageUri = ({image}: IAppState): string | undefined =>
  image.uri;

export const selectedImageLocation = ({
  image,
}: IAppState): ImageLocation | undefined => image.location;
