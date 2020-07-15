import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Root from './components/Root';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
