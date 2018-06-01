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
  onUpdating: () => {
    console.log("SW Event:", "onUpdating");
  },
  onInstalled: e => console.log("e", e),
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => (window.swUpdate = true),
  onUpdateFailed: () => {
    console.log("SW Event:", "onUpdateFailed");
  }
});

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  root
);
