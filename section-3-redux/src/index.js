import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app.js';
import reducers from './reducers';

// Attach the component to the DOM
ReactDOM.render(
  // Provider makes the store available to each component for easy accessibility.
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container'));
