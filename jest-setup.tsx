import React from 'react';
import {jest} from '@jest/globals';

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MockMapView = (props: any) => {
    return <View testID={'map'}>{props.children}</View>;
  };
  const MockMarker = (props: any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

jest.mock('react-native-actionsheet', () => {
  const {View, TouchableHighlight, Text} = require('react-native');
  const {R} = require('@image-loc/res');
  const ActionSheetOption = (
    title: string,
    index: number,
    onPress: (index: number) => void,
  ) => {
    return (
      <TouchableHighlight
        testID={`${title}-${index}`}
        onPress={() => onPress(index)}
        key={index}>
        <Text>{title}</Text>
      </TouchableHighlight>
    );
  };
  const ActionSheet = (props: any) => {
    return (
      <View testID={R.strings.actionSheet}>
        {props.options.map((option: string, index: number) => {
          return ActionSheetOption(option, index, props.onPress);
        })}
      </View>
    );
  };
  return {
    __esModule: true,
    default: ActionSheet,
  };
});

jest.mock('@image-loc/hooks/useLocation', () => {
  const {position} = require('@image-loc/views/containers/Main/mockData');
  return {
    useLocation: jest.fn().mockImplementation(() => ({
      lat: position.latitude,
      lng: position.longitude,
    })),
  };
});
