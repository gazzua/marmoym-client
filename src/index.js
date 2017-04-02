import * as React from "react";
import * as ReactDOM from "react-dom";

import AppContainer from './containers/AppContainer/AppContainer'

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <AppContainer compiler="TypeScript" framework="React" />,
  document.getElementById("main")
);