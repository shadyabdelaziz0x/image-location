import {Dimensions, Platform} from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

export const IS_ANDROID = Platform.OS === 'android';

export const IS_DEV_ENV = __DEV__ === true;

export const DEVICE_VERSION = Platform.Version;

export const getWindowHeight = () => Dimensions.get('window').height;

export const getWindowWidth = () => Dimensions.get('window').width;
