import {combineReducers} from 'redux';
import deviceReducer from './device/deviceReducer';
import userReducer from './user/userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['totalEvents'],
};

export const rootReducer = combineReducers({
  device: deviceReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

export type IRootState = ReturnType<typeof rootReducer>;
