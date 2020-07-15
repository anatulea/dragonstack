import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Root from './components/Root';
import rootReducer from './reducers';
import { fetchAuthenticated } from './actions/account';
import './index.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

store.dispatch(fetchAuthenticated()).then(() => {
  render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('root')
  );
});
