import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import styles from './AppContainer.scss'

import Power from '../../components/Power'

console.log(1, styles)

// export interface HelloProps { compiler: string; framework: string; }
// interface MyState {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.

class AppContainer extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"><Power/></Route>
          <Route path="/test"><div className={styles.temp}>p1ower23</div></Route>
        </div>
      </Router>
      /*<div> 
        <div className={styles.temp}>p1ower23</div>
      </div>*/
    )
  }
}

export default AppContainer