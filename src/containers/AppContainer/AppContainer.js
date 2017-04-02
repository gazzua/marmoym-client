import * as React from "react";

import styles from './AppContainer.scss'

console.log(1, styles)

// export interface HelloProps { compiler: string; framework: string; }
// interface MyState {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.temp}>p1ower23</div>
      </div>
    )
  }
}

export default AppContainer