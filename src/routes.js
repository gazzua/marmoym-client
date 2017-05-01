import { BrowserRouter as Router, Route } from "react-router-dom";
import MainContainer from './containers/MainContainer/MainContainer';

export default
  <Router>
    <div>
      <Route exact path="/" component={MainContainer} />
    </div>
  </Router>