import React, {useCallback} from 'react';
import {MainView} from './view';

export const Main = () => {
  const onPickImageClicked = useCallback(() => {
    //TODO:- handle opening image picker
  }, []);

  return <MainView onPickImageClicked={onPickImageClicked} />;
};
