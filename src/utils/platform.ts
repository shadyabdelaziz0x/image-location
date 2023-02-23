import {Dimensions, Platform, PixelRatio} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent: number) => {
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

const heightPercentageToDP = (heightPercent: number) => {
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

export const IS_IOS = Platform.OS === 'ios';

export const IS_ANDROID = Platform.OS === 'android';

export const IS_DEV_ENV = __DEV__ === true;

export const DEVICE_VERSION = Platform.Version;

export const getWindowHeight = () => Dimensions.get('window').height;

export const getWindowWidth = () => Dimensions.get('window').width;

// The dimensions of the provided designs screen
const DESIGN_SCREEN_WIDTH = 375;
const DESIGN_SCREEN_HEIGHT = 869;

// Calculate the adaptive width given the design screen width dimension.
// To be used for style props like: width, marginHorizontal, fontSize, ...
export const wp = (designWidth: number) => {
  return widthPercentageToDP((designWidth * 100) / DESIGN_SCREEN_WIDTH);
};

// Calculate the adaptive height given the design screen height dimension.
// To be used for style props like: height, marginVertical, ...
export const hp = (designHeight: number) => {
  return heightPercentageToDP((designHeight * 100) / DESIGN_SCREEN_HEIGHT);
};
