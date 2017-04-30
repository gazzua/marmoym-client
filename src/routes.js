import {
  BrowserRouter as Router,
  Route } from "react-router-dom"

import AppContainer from './containers/AppContainer/AppContainer'


const Foo = () => <div>foo0505</div>
const Bar = () => <div>bar123</div>

export default
  <Router>
    <div>
      <Route exact path="/" component={AppContainer}/>
      <Route path="/about" component={Bar}/>
    </div>
  </Router>



// <Route exact path="/"><Power/></Route>
//   <Route path="/test"><div className={styles.temp}>p1ower23</div></Route>