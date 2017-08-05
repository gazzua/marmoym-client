import * as React from 'react';

const styles = require('./Masthead.mobile.scss');
import MarmoymLogo from '../MarmoymLogo/MarmoymLogo';
import QueryDisplay from './QueryDisplay/QueryDisplay';
import RightButtonGroup from './RightButtonGroup/RightButtonGroup';

export namespace Masthead {
  export interface Props {
    handleClickAddTerm: any;
    history: any;
  }
}

const Masthead: React.SFC<Masthead.Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <MarmoymLogo/>
      <QueryDisplay/>
      <RightButtonGroup
        handleClickAddTerm={props.handleClickAddTerm}/>
    </div>
  )
}

export default Masthead;

