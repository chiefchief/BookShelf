import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';
import rootSaga from './reducers/sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  timeout: 10000,
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'], // ADD WHITE LIST IF YOU NEED
};

const persistedReducer = persistReducer(persistConfig, reducers);

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
export {store, persistor};
