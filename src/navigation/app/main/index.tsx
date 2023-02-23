import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from '../types';
import {Main} from '@image-loc/views/containers';

export const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={AppRoutes.Main} component={Main} />
    </MainStack.Navigator>
  );
};
