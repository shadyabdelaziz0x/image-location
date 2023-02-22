import {ReducerType} from './types';
import {imageSlice} from '../ducks/image';

const reducers = {
  [ReducerType.Image]: imageSlice.reducer,
} as const;

export default reducers;
