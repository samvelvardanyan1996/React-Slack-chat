import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { watchLoadData } from './redux/sagas/channels';
import { watchLoadMessagesData } from './redux/sagas/messages';
import rootReducer from './redux/rootReducer';
import { BrowserRouter as Router } from "react-router-dom";
import RouteWithAuth from "./components/Root";


const SagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, SagaMiddleware)));
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(SagaMiddleware)));

SagaMiddleware.run(watchLoadData);
SagaMiddleware.run(watchLoadMessagesData);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RouteWithAuth />
    </Router>
  </Provider>,
  document.getElementById('root')
);