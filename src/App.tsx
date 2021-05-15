import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './_AppNavigator/AppNavigator';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent={true} />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
