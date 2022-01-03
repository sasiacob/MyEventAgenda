import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
// eslint-disable-file @typescript-eslint/no-unsafe-assignment

import {reactotron} from '../ReactotronConfig';

const middlewares = [applyMiddleware(thunk)];

if (__DEV__) {
  const reactotronMiddleware = reactotron.createEnhancer();
  middlewares.push(reactotronMiddleware);
}
export default function configureStore(initialState = {}) {
  return createStore(rootReducer, compose(...middlewares));
}
