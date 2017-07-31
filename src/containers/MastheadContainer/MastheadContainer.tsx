import * as React from 'react';

const styles = require("./MastheadContainer.scss");
import MarmoymLogo from '../../components/MarmoymLogo/MarmoymLogo';
import QueryDisplay from '../../components/QueryDisplay/QueryDisplay';

class MastheadContainer extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <MarmoymLogo/>
        <QueryDisplay/>
        rightButtonGroup
      </div>
    )
  }
}

export default MastheadContainer;