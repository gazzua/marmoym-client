import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import styles from './AppContainer.scss'

console.log(1, styles)

class AppContainer extends React.Component {
  render() {
    return (
      <div className={styles.temp}>1231231</div>
    )
  }
}

export default AppContainer