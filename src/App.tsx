import React from 'react';
import {Provider} from 'react-redux';
import {ApplicationNavigator} from './navigation';
import configureStore from './store/store';
if (__DEV__) {
  //import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
};

export default App;
