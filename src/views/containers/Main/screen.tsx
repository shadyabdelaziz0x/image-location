import React, {useCallback, useRef} from 'react';
import {MainView} from './view';
import ActionSheet from 'react-native-actionsheet';
import {sheetOptions} from './types';
import {R} from '@image-loc/res';

export const Main = () => {
  const sheet = useRef<ActionSheet | null>(null);

  const onPickImageClicked = useCallback(() => {
    sheet.current?.show();
  }, []);

  const onSheetOptionIndexClicked = useCallback((index: number) => {
    switch (index) {
      case 0:
        console.log('ZERO');
        break;
      case 1:
        console.log('1');
        break;
      default:
        console.log('2');
        break;
    }
  }, []);

  return (
    <>
      <MainView onPickImageClicked={onPickImageClicked} />
      <ActionSheet
        ref={sheet}
        title={R.strings.pickOption}
        options={sheetOptions}
        cancelButtonIndex={2}
        onPress={onSheetOptionIndexClicked}
      />
    </>
  );
};
