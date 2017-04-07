import * as React from "react"
import * as ReactDOM from "react-dom"

import routes from './routes'

// import AppContainer from './containers/AppContainer/AppContainer'

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  routes,
  document.getElementById("main")
);


// <AppContainer compiler="TypeScript" framework="React" />