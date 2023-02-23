import {ViewStyle} from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  text: string;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  style?: ViewStyle;
  disabled?: boolean;
}
