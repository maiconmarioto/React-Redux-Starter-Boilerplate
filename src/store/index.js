import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { Reducers } from "./reducers";
import { watcherSaga } from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const Store = createStore(
  Reducers,
  reduxDevTools,
  compose(applyMiddleware(sagaMiddleware, logger))
);

export { sagaMiddleware, watcherSaga };
