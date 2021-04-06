import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import {store, persistor} from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/* null passed to loading, persistor is being used here*/}
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
