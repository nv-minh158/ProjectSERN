import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';
import userReducer from './userReducer';
import authReducer from './authReducer';

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: 'auth',
  whitelist: ['isLoggedIn', 'accessToken'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
});

export default rootReducer;
