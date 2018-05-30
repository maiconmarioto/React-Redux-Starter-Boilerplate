import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

import { Store, sagaMiddleware, watcherSaga } from "./src/store";
import App from "./src/App";

const root = document.getElementById("root");

sagaMiddleware.run(watcherSaga);
OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => (window.swUpdate = true)
});

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  root
);
