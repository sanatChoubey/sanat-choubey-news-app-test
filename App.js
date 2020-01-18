import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import NewsList from './Container/newsList';
import NewOne from './Container/newOne';
import rootReducer from './redux/reducer/index';
import { rootSaga } from './redux/Saga/index';

export default function App(props) {
  const StackList = createStackNavigator({
    Home: {
      screen: NewsList
    },
    Detail: {
      screen: NewOne
    }
  })
  const ContainerApp = createAppContainer(StackList);
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare))
  sagaMiddleWare.run(rootSaga);

  return (
    <Provider store={store}>
      <ContainerApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
