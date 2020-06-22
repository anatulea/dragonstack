import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
  <div>
    <h2>Dragon Stack </h2>
    <Generation />
    <Dragon />
  </div>
  </Provider>,
  document.getElementById('root')
);
