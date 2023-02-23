import {ImageSourcePropType, ImageStyle, ViewStyle} from 'react-native';

export interface ImageButtonProps {
  onPress: () => void;
  source: ImageSourcePropType;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
}
