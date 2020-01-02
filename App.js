import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './app/reducers';
import rootSaga from './app/sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
import AppNavigator from '@navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

const sagaMiddleware = createSagaMiddleware();
let enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
