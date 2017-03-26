import * as React from "react";
import * as ReactDOM from "react-dom";

import Power from "./components/Power";

console.log(1132, module);

if (module.hot) {
  module.hot.accept();
}
console.log(2)

ReactDOM.render(
  <Power compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);