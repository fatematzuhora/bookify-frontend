import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from 'store';

import App from 'App';

// antd css
import 'assets/css/antd.css';
// app css
import 'assets/css/styles.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
