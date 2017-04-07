import {
  BrowserRouter as Router,
  Route } from "react-router-dom"


const Foo = () => <div>foo</div>
const Bar = () => <div>bar</div>

export default
  <Router>
    <div>
      <Route exact path="/" component={Foo}/>
      <Route path="/about" component={Bar}/>
    </div>
  </Router>



// <Route exact path="/"><Power/></Route>
//   <Route path="/test"><div className={styles.temp}>p1ower23</div></Route>