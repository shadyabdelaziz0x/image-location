export interface ImageLocation {
  lat: number;
  lng: number;
}

export interface ImageState {
  uri?: string;
  location?: ImageLocation;
}

export const initialState: ImageState = {
  uri: undefined,
  location: undefined,
};
