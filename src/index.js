import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/app';
import 'tachyons';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { searchCat } from './reducers/reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(searchCat, applyMiddleware(logger));
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
