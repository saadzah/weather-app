import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers';
import createSagaMiddelware from 'redux-saga';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddelware();
const middleware = [sagaMiddleware];

const store = createStore(appReducer, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
