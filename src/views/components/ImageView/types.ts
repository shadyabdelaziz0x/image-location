import {AppRoutes, AppStackParams} from '@image-loc/navigation/app/types';
import {NavigationProp} from '@react-navigation/native';
import {ViewStyle} from 'react-native';

export type MainScreenNavigationProp = NavigationProp<
  AppStackParams,
  AppRoutes.Main
>;

export interface ImageViewProps {
  style?: ViewStyle;
}
