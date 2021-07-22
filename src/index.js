import React from 'react';
import ReactDOM from 'react-dom';
import ReduxDemo from './screens/reduxDemo';
import DisplayCounter from './screens/displayCounter';

import { reducer } from "./redux/reducers/reducer";
import { watchCountUp } from "./redux/sagas/saga";

import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchCountUp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1
      }}>
        <ReduxDemo />
        <DisplayCounter />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();