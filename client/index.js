import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import store from './store';
import { Provider } from 'react-redux';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

render(
  <Provider store = {store}>
     <App />
  </Provider>,
  document.getElementById('root')
);



// render(
//   // wrap the App in the Provider and pass in the store
//   <Provider store = {store}>
//     <App />
//   </Provider>,
//   document.getElementById('contents')
// );