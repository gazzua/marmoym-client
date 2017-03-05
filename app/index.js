import * as React from "react";
import * as ReactDOM from "react-dom";

import Power from "./components/Power";

ReactDOM.render(
  <Power compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);