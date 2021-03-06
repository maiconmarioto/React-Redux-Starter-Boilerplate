import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";
import { hot } from "react-hot-loader";

import history from "./history";
import Home from "./containers/Home";
import Loading from "./components/Layout";

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ "./components/DynamicPage"),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./components/NoMatch"),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default hot(module)(App);
