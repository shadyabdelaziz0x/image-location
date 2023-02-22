import {combineReducers} from 'redux';
import reducers from './reducers';

const appReducer = combineReducers(reducers);

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
export default rootReducer;
