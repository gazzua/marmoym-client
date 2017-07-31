import * as React from 'react';

const styles = require('./Masthead.scss');
import MarmoymLogo from '../MarmoymLogo/MarmoymLogo';
import QueryDisplay from './QueryDisplay/QueryDisplay';
import RightButtonGroup from './RightButtonGroup/RightButtonGroup';

const Masthead = (props) => {
  return (
    <div className={styles.wrapper}>
      <MarmoymLogo/>
      <QueryDisplay/>
      <RightButtonGroup/>
    </div>
  )
}

export default Masthead;

